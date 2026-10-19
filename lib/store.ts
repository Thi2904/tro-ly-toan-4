import { neon } from "@neondatabase/serverless";
import { nameKey, displayName } from "./identity";

export type Student = {
  id: number;
  name: string;
  dob: string;
  className: string | null;
  school: string | null;
  createdAt: string;
  lastLogin: string | null;
};

export type StoredQ = {
  q: string;
  t: "mc" | "num";
  options?: string[];
  unit?: string;
  correct: string;
  why?: string;
};

export type Attempt = {
  id: number;
  studentId: number;
  lessonId: number;
  status: "doing" | "done";
  questions: StoredQ[];
  answers: (string | null)[];
  oks: (boolean | null)[];
  correct: number;
  total: number;
  points: number;
  startedAt: string;
  finishedAt: string | null;
};

export type LessonProgress = { lessonId: number; best: number; attempts: number };
export type BoardRow = { studentId: number; name: string; points: number; lessons: number; seconds?: number };
export type AdminStudentRow = {
  id: number;
  name: string;
  dob: string;
  className: string | null;
  school: string | null;
  createdAt: string;
  lastLogin: string | null;
  attempts: number;
  lessons: number;
  totalPoints: number;
  avg: number;
};
export type AttemptRow = {
  id: number;
  studentId: number;
  studentName: string;
  dob: string;
  className: string | null;
  school: string | null;
  lessonId: number;
  correct: number;
  total: number;
  points: number;
  startedAt: string;
  finishedAt: string | null;
  seconds: number | null;
};

export type AttemptFilter = {
  studentId?: number;
  lessonId?: number;
  className?: string;
  school?: string;
  /** Mỗi học sinh chỉ lấy một lượt (điểm cao nhất, bằng điểm thì lượt nhanh hơn) cho mỗi bài. */
  bestOnly?: boolean;
  limit?: number;
};

export type LoginResult =
  | { student: Student; created: boolean; needProfile?: false }
  | { student?: undefined; created: false; needProfile: true };

export interface Store {
  readonly kind: "postgres" | "memory";
  loginStudent(name: string, dob: string, profile: { className?: string; school?: string }): Promise<LoginResult>;
  getStudent(id: number): Promise<Student | null>;
  createAttempt(studentId: number, lessonId: number, questions: StoredQ[]): Promise<Attempt>;
  getAttempt(id: number): Promise<Attempt | null>;
  recordAnswer(id: number, index: number, given: string, ok: boolean): Promise<void>;
  finishAttempt(id: number, correct: number, total: number, points: number): Promise<void>;
  progress(studentId: number): Promise<LessonProgress[]>;
  leaderboard(lessonId?: number): Promise<BoardRow[]>;
  adminStudents(): Promise<AdminStudentRow[]>;
  adminAttempts(opts: AttemptFilter): Promise<AttemptRow[]>;
  deleteAttempt(id: number): Promise<void>;
  deleteStudent(id: number): Promise<void>;
  overview(): Promise<{ students: number; attempts: number; avgPoints: number; today: number }>;
}

const secs = (a: string, b: string | null) => (b ? Math.max(0, Math.round((+new Date(b) - +new Date(a)) / 1000)) : null);

const vi = (a: string, b: string) => a.localeCompare(b, "vi");

/** Lọc theo lớp/trường, lấy lượt tốt nhất rồi sắp xếp: bài → lớp → họ tên. */
function shapeAttempts(rows: AttemptRow[], f: AttemptFilter): AttemptRow[] {
  let out = rows;
  if (f.className) out = out.filter((r) => (r.className ?? "") === f.className);
  if (f.school) out = out.filter((r) => (r.school ?? "") === f.school);
  if (f.bestOnly) {
    const best = new Map<string, AttemptRow>();
    for (const r of out) {
      const k = `${r.studentId}:${r.lessonId}`;
      const cur = best.get(k);
      if (!cur || r.points > cur.points || (r.points === cur.points && (r.seconds ?? 1e9) < (cur.seconds ?? 1e9))) best.set(k, r);
    }
    out = [...best.values()];
  }
  out = [...out].sort(
    (a, b) =>
      a.lessonId - b.lessonId ||
      vi(a.className ?? "", b.className ?? "") ||
      vi(a.studentName, b.studentName) ||
      (b.finishedAt ?? "").localeCompare(a.finishedAt ?? ""),
  );
  return out.slice(0, f.limit ?? 5000);
}

/* ------------------------------------------------------------------ Postgres */

function pgStore(url: string): Store {
  const sql = neon(url);
  let ready: Promise<void> | null = null;

  const init = () =>
    (ready ??= (async () => {
      await sql`CREATE TABLE IF NOT EXISTS students (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        name_key TEXT NOT NULL,
        dob DATE NOT NULL,
        created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
        last_login TIMESTAMPTZ,
        UNIQUE (name_key, dob)
      )`;
      await sql`ALTER TABLE students ADD COLUMN IF NOT EXISTS class_name TEXT`;
      await sql`ALTER TABLE students ADD COLUMN IF NOT EXISTS school_name TEXT`;
      await sql`CREATE TABLE IF NOT EXISTS attempts (
        id SERIAL PRIMARY KEY,
        student_id INT NOT NULL REFERENCES students(id) ON DELETE CASCADE,
        lesson_id INT NOT NULL,
        status TEXT NOT NULL DEFAULT 'doing',
        questions JSONB NOT NULL,
        answers JSONB NOT NULL,
        oks JSONB NOT NULL,
        correct INT NOT NULL DEFAULT 0,
        total INT NOT NULL,
        points NUMERIC(4,1) NOT NULL DEFAULT 0,
        started_at TIMESTAMPTZ NOT NULL DEFAULT now(),
        finished_at TIMESTAMPTZ
      )`;
      await sql`CREATE INDEX IF NOT EXISTS attempts_student_idx ON attempts (student_id, lesson_id)`;
      await sql`CREATE INDEX IF NOT EXISTS attempts_lesson_idx ON attempts (lesson_id, status)`;
    })());

  const toStudent = (r: any): Student => ({
    id: r.id,
    name: r.name,
    dob: typeof r.dob === "string" ? r.dob.slice(0, 10) : new Date(r.dob).toISOString().slice(0, 10),
    className: r.class_name ?? null,
    school: r.school_name ?? null,
    createdAt: new Date(r.created_at).toISOString(),
    lastLogin: r.last_login ? new Date(r.last_login).toISOString() : null,
  });

  const toAttempt = (r: any): Attempt => ({
    id: r.id,
    studentId: r.student_id,
    lessonId: r.lesson_id,
    status: r.status,
    questions: r.questions,
    answers: r.answers,
    oks: r.oks,
    correct: r.correct,
    total: r.total,
    points: Number(r.points),
    startedAt: new Date(r.started_at).toISOString(),
    finishedAt: r.finished_at ? new Date(r.finished_at).toISOString() : null,
  });

  return {
    kind: "postgres",
    async loginStudent(name, dob, profile) {
      await init();
      const key = nameKey(name);
      const cls = profile.className ?? "";
      const sch = profile.school ?? "";
      const found = await sql`SELECT id FROM students WHERE name_key = ${key} AND dob = ${dob}`;
      if (found.length) {
        const upd = await sql`UPDATE students SET last_login = now(),
            class_name = COALESCE(NULLIF(${cls}, ''), class_name),
            school_name = COALESCE(NULLIF(${sch}, ''), school_name)
          WHERE id = ${found[0].id}
          RETURNING id, name, dob::text AS dob, class_name, school_name, created_at, last_login`;
        return { student: toStudent(upd[0]), created: false };
      }
      if (!cls || !sch) return { created: false, needProfile: true };
      const ins = await sql`INSERT INTO students (name, name_key, dob, class_name, school_name, last_login)
        VALUES (${displayName(name)}, ${key}, ${dob}, ${cls}, ${sch}, now())
        ON CONFLICT (name_key, dob) DO UPDATE SET last_login = now()
        RETURNING id, name, dob::text AS dob, class_name, school_name, created_at, last_login, (xmax = 0) AS inserted`;
      return { student: toStudent(ins[0]), created: !!ins[0].inserted };
    },
    async getStudent(id) {
      await init();
      const r = await sql`SELECT id, name, dob::text AS dob, class_name, school_name, created_at, last_login FROM students WHERE id = ${id}`;
      return r.length ? toStudent(r[0]) : null;
    },
    async createAttempt(studentId, lessonId, questions) {
      await init();
      await sql`DELETE FROM attempts WHERE student_id = ${studentId} AND lesson_id = ${lessonId} AND status = 'doing'`;
      const n = questions.length;
      const r = await sql`INSERT INTO attempts (student_id, lesson_id, questions, answers, oks, total)
        VALUES (${studentId}, ${lessonId}, ${JSON.stringify(questions)}::jsonb, ${JSON.stringify(Array(n).fill(null))}::jsonb, ${JSON.stringify(Array(n).fill(null))}::jsonb, ${n})
        RETURNING *`;
      return toAttempt(r[0]);
    },
    async getAttempt(id) {
      await init();
      const r = await sql`SELECT * FROM attempts WHERE id = ${id}`;
      return r.length ? toAttempt(r[0]) : null;
    },
    async recordAnswer(id, index, given, ok) {
      await init();
      await sql`UPDATE attempts SET
        answers = jsonb_set(answers, ARRAY[${String(index)}], to_jsonb(${given}::text)),
        oks = jsonb_set(oks, ARRAY[${String(index)}], to_jsonb(${ok}::boolean))
        WHERE id = ${id} AND status = 'doing'`;
    },
    async finishAttempt(id, correct, total, points) {
      await init();
      await sql`UPDATE attempts SET status = 'done', correct = ${correct}, total = ${total}, points = ${points}, finished_at = now()
        WHERE id = ${id} AND status = 'doing'`;
    },
    async progress(studentId) {
      await init();
      const r = await sql`SELECT lesson_id, MAX(points) AS best, COUNT(*)::int AS attempts FROM attempts
        WHERE student_id = ${studentId} AND status = 'done' GROUP BY lesson_id`;
      return r.map((x: any) => ({ lessonId: x.lesson_id, best: Number(x.best), attempts: x.attempts }));
    },
    async leaderboard(lessonId) {
      await init();
      if (lessonId) {
        const r = await sql`SELECT DISTINCT ON (a.student_id) a.student_id, s.name, a.points,
            EXTRACT(EPOCH FROM (a.finished_at - a.started_at))::int AS seconds
          FROM attempts a JOIN students s ON s.id = a.student_id
          WHERE a.lesson_id = ${lessonId} AND a.status = 'done'
          ORDER BY a.student_id, a.points DESC, (a.finished_at - a.started_at) ASC`;
        return r
          .map((x: any) => ({ studentId: x.student_id, name: x.name, points: Number(x.points), lessons: 1, seconds: x.seconds }))
          .sort((a: BoardRow, b: BoardRow) => b.points - a.points || (a.seconds ?? 0) - (b.seconds ?? 0))
          .slice(0, 100);
      }
      const r = await sql`WITH best AS (
          SELECT student_id, lesson_id, MAX(points) AS p FROM attempts WHERE status = 'done' GROUP BY student_id, lesson_id
        )
        SELECT s.id, s.name, SUM(b.p) AS total, (COUNT(*) FILTER (WHERE b.lesson_id <= 100))::int AS lessons
        FROM best b JOIN students s ON s.id = b.student_id
        GROUP BY s.id, s.name, s.created_at
        ORDER BY total DESC, lessons DESC, s.created_at ASC
        LIMIT 100`;
      return r.map((x: any) => ({ studentId: x.id, name: x.name, points: Number(x.total), lessons: x.lessons }));
    },
    async adminStudents() {
      await init();
      const r = await sql`WITH best AS (
          SELECT student_id, lesson_id, MAX(points) AS p FROM attempts WHERE status = 'done' GROUP BY student_id, lesson_id
        ), agg AS (
          SELECT student_id, SUM(p) AS total, (COUNT(*) FILTER (WHERE lesson_id <= 100))::int AS lessons FROM best GROUP BY student_id
        ), cnt AS (
          SELECT student_id, COUNT(*)::int AS attempts, AVG(points) AS avg FROM attempts WHERE status = 'done' GROUP BY student_id
        )
        SELECT s.id, s.name, s.dob::text AS dob, s.class_name, s.school_name, s.created_at, s.last_login,
          COALESCE(c.attempts, 0) AS attempts, COALESCE(a.lessons, 0) AS lessons,
          COALESCE(a.total, 0) AS total, COALESCE(c.avg, 0) AS avg
        FROM students s LEFT JOIN agg a ON a.student_id = s.id LEFT JOIN cnt c ON c.student_id = s.id
        ORDER BY s.name ASC`;
      return r.map((x: any) => ({
        id: x.id,
        name: x.name,
        dob: String(x.dob).slice(0, 10),
        className: x.class_name ?? null,
        school: x.school_name ?? null,
        createdAt: new Date(x.created_at).toISOString(),
        lastLogin: x.last_login ? new Date(x.last_login).toISOString() : null,
        attempts: x.attempts,
        lessons: x.lessons,
        totalPoints: Number(x.total),
        avg: Math.round(Number(x.avg) * 10) / 10,
      }));
    },
    async adminAttempts(f) {
      await init();
      const sid = f.studentId ?? null;
      const lid = f.lessonId ?? null;
      const r = await sql`SELECT a.id, a.student_id, s.name, s.dob::text AS dob, s.class_name, s.school_name,
          a.lesson_id, a.correct, a.total, a.points, a.started_at, a.finished_at
        FROM attempts a JOIN students s ON s.id = a.student_id
        WHERE a.status = 'done'
          AND (${sid}::int IS NULL OR a.student_id = ${sid}::int)
          AND (${lid}::int IS NULL OR a.lesson_id = ${lid}::int)
        ORDER BY a.finished_at DESC LIMIT 20000`;
      const rows: AttemptRow[] = r.map((x: any) => {
        const started = new Date(x.started_at).toISOString();
        const finished = x.finished_at ? new Date(x.finished_at).toISOString() : null;
        return {
          id: x.id,
          studentId: x.student_id,
          studentName: x.name,
          dob: String(x.dob).slice(0, 10),
          className: x.class_name ?? null,
          school: x.school_name ?? null,
          lessonId: x.lesson_id,
          correct: x.correct,
          total: x.total,
          points: Number(x.points),
          startedAt: started,
          finishedAt: finished,
          seconds: secs(started, finished),
        };
      });
      return shapeAttempts(rows, f);
    },
    async deleteAttempt(id) {
      await init();
      await sql`DELETE FROM attempts WHERE id = ${id}`;
    },
    async deleteStudent(id) {
      await init();
      await sql`DELETE FROM students WHERE id = ${id}`;
    },
    async overview() {
      await init();
      const s = await sql`SELECT COUNT(*)::int AS n FROM students`;
      const a = await sql`SELECT COUNT(*)::int AS n, COALESCE(AVG(points), 0) AS avg,
        COUNT(*) FILTER (WHERE finished_at >= now() - interval '1 day')::int AS today FROM attempts WHERE status = 'done'`;
      return { students: s[0].n, attempts: a[0].n, avgPoints: Math.round(Number(a[0].avg) * 10) / 10, today: a[0].today };
    },
  };
}

/* ------------------------------------------------------------------ Memory (chỉ để chạy thử khi chưa có DATABASE_URL) */

function memoryStore(): Store {
  const g = globalThis as any;
  const db: { students: (Student & { key: string })[]; attempts: Attempt[]; seq: number } = (g.__memdb ??= {
    students: [],
    attempts: [],
    seq: 1,
  });
  const done = () => db.attempts.filter((a) => a.status === "done");
  const bestMap = (filter?: (a: Attempt) => boolean) => {
    const m = new Map<string, number>();
    for (const a of done()) {
      if (filter && !filter(a)) continue;
      const k = `${a.studentId}:${a.lessonId}`;
      m.set(k, Math.max(m.get(k) ?? 0, a.points));
    }
    return m;
  };
  return {
    kind: "memory",
    async loginStudent(name, dob, profile) {
      const key = nameKey(name);
      const cls = profile.className ?? "";
      const sch = profile.school ?? "";
      let s = db.students.find((x) => x.key === key && x.dob === dob);
      const now = new Date().toISOString();
      if (s) {
        s.lastLogin = now;
        if (cls) s.className = cls;
        if (sch) s.school = sch;
        return { student: s, created: false };
      }
      if (!cls || !sch) return { created: false, needProfile: true };
      s = { id: db.seq++, name: displayName(name), key, dob, className: cls, school: sch, createdAt: now, lastLogin: now };
      db.students.push(s);
      return { student: s, created: true };
    },
    async getStudent(id) {
      return db.students.find((s) => s.id === id) ?? null;
    },
    async createAttempt(studentId, lessonId, questions) {
      db.attempts = db.attempts.filter((a) => !(a.studentId === studentId && a.lessonId === lessonId && a.status === "doing"));
      const a: Attempt = {
        id: db.seq++,
        studentId,
        lessonId,
        status: "doing",
        questions,
        answers: Array(questions.length).fill(null),
        oks: Array(questions.length).fill(null),
        correct: 0,
        total: questions.length,
        points: 0,
        startedAt: new Date().toISOString(),
        finishedAt: null,
      };
      db.attempts.push(a);
      return a;
    },
    async getAttempt(id) {
      return db.attempts.find((a) => a.id === id) ?? null;
    },
    async recordAnswer(id, index, given, ok) {
      const a = db.attempts.find((x) => x.id === id);
      if (a && a.status === "doing") {
        a.answers[index] = given;
        a.oks[index] = ok;
      }
    },
    async finishAttempt(id, correct, total, points) {
      const a = db.attempts.find((x) => x.id === id);
      if (a && a.status === "doing") Object.assign(a, { status: "done", correct, total, points, finishedAt: new Date().toISOString() });
    },
    async progress(studentId) {
      const out = new Map<number, LessonProgress>();
      for (const a of done().filter((x) => x.studentId === studentId)) {
        const p = out.get(a.lessonId) ?? { lessonId: a.lessonId, best: 0, attempts: 0 };
        p.best = Math.max(p.best, a.points);
        p.attempts++;
        out.set(a.lessonId, p);
      }
      return [...out.values()];
    },
    async leaderboard(lessonId) {
      const name = (id: number) => db.students.find((s) => s.id === id)?.name ?? "?";
      if (lessonId) {
        const best = new Map<number, Attempt>();
        for (const a of done().filter((x) => x.lessonId === lessonId)) {
          const cur = best.get(a.studentId);
          const t = secs(a.startedAt, a.finishedAt) ?? 0;
          const ct = cur ? secs(cur.startedAt, cur.finishedAt) ?? 0 : 0;
          if (!cur || a.points > cur.points || (a.points === cur.points && t < ct)) best.set(a.studentId, a);
        }
        return [...best.values()]
          .map((a) => ({ studentId: a.studentId, name: name(a.studentId), points: a.points, lessons: 1, seconds: secs(a.startedAt, a.finishedAt) ?? 0 }))
          .sort((a, b) => b.points - a.points || a.seconds - b.seconds)
          .slice(0, 100);
      }
      const per = new Map<number, { points: number; lessons: number }>();
      for (const [k, p] of bestMap()) {
        const sid = +k.split(":")[0];
        const c = per.get(sid) ?? { points: 0, lessons: 0 };
        c.points += p;
        if (+k.split(":")[1] <= 100) c.lessons++;
        per.set(sid, c);
      }
      return [...per.entries()]
        .map(([studentId, v]) => ({ studentId, name: name(studentId), points: Math.round(v.points * 10) / 10, lessons: v.lessons }))
        .sort((a, b) => b.points - a.points || b.lessons - a.lessons)
        .slice(0, 100);
    },
    async adminStudents() {
      const board = new Map((await this.leaderboard()).map((r) => [r.studentId, r]));
      return db.students
        .map((s) => {
          const mine = done().filter((a) => a.studentId === s.id);
          const b = board.get(s.id);
          return {
            id: s.id,
            name: s.name,
            dob: s.dob,
            className: s.className,
            school: s.school,
            createdAt: s.createdAt,
            lastLogin: s.lastLogin,
            attempts: mine.length,
            lessons: b?.lessons ?? 0,
            totalPoints: b?.points ?? 0,
            avg: mine.length ? Math.round((mine.reduce((x, a) => x + a.points, 0) / mine.length) * 10) / 10 : 0,
          };
        })
        .sort((a, b) => a.name.localeCompare(b.name, "vi"));
    },
    async adminAttempts(f) {
      const rows: AttemptRow[] = done()
        .filter((a) => (!f.studentId || a.studentId === f.studentId) && (!f.lessonId || a.lessonId === f.lessonId))
        .map((a) => {
          const s = db.students.find((x) => x.id === a.studentId);
          return {
            id: a.id,
            studentId: a.studentId,
            studentName: s?.name ?? "?",
            dob: s?.dob ?? "",
            className: s?.className ?? null,
            school: s?.school ?? null,
            lessonId: a.lessonId,
            correct: a.correct,
            total: a.total,
            points: a.points,
            startedAt: a.startedAt,
            finishedAt: a.finishedAt,
            seconds: secs(a.startedAt, a.finishedAt),
          };
        });
      return shapeAttempts(rows, f);
    },
    async deleteAttempt(id) {
      db.attempts = db.attempts.filter((a) => a.id !== id);
    },
    async deleteStudent(id) {
      db.students = db.students.filter((s) => s.id !== id);
      db.attempts = db.attempts.filter((a) => a.studentId !== id);
    },
    async overview() {
      const d = done();
      const dayAgo = Date.now() - 86400000;
      return {
        students: db.students.length,
        attempts: d.length,
        avgPoints: d.length ? Math.round((d.reduce((x, a) => x + a.points, 0) / d.length) * 10) / 10 : 0,
        today: d.filter((a) => a.finishedAt && +new Date(a.finishedAt) >= dayAgo).length,
      };
    },
  };
}

let instance: Store | null = null;

export function getStore(): Store {
  if (instance) return instance;
  const url = process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.DATABASE_URL_UNPOOLED;
  instance = url ? pgStore(url) : memoryStore();
  return instance;
}
