"use client";

import { Fragment, useCallback, useEffect, useMemo, useState } from "react";
import { ADV, LESSON_META, lessonNo, lessonTitle } from "@/lib/bank/meta";
import { Inline } from "./Rich";

type Overview = { students: number; attempts: number; avgPoints: number; today: number; db: "postgres" | "memory" };
type Student = {
  id: number; name: string; dob: string; className: string | null; school: string | null;
  createdAt: string; lastLogin: string | null; attempts: number; lessons: number; totalPoints: number; avg: number;
};
type Attempt = {
  id: number; studentId: number; studentName: string; dob: string; className: string | null; school: string | null;
  lessonId: number; correct: number; total: number; points: number; finishedAt: string | null; seconds: number | null;
};
type Detail = { id: number; items: { q: string; correct: string; given: string | null; ok: boolean; unit: string | null }[] };

const fmt = (n: number) => n.toLocaleString("vi-VN", { maximumFractionDigits: 1 });
const when = (iso: string | null) => (iso ? new Date(iso).toLocaleString("vi-VN", { dateStyle: "short", timeStyle: "short" }) : "–");
const dobFmt = (iso: string) => iso.slice(0, 10).split("-").reverse().join("/");
const dur = (s: number | null) => (s === null ? "–" : `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`);
const pillCls = (p: number) => (p >= 8 ? "hi" : p >= 5 ? "mid" : "lo");

async function api<T = any>(url: string, init?: RequestInit): Promise<T> {
  const r = await fetch(url, init);
  const d = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(d.error || "Có lỗi xảy ra");
  return d as T;
}

type Tab = "over" | "students" | "attempts" | "export";

export function AdminDashboard() {
  const [tab, setTab] = useState<Tab>("over");
  const [overview, setOverview] = useState<Overview | null>(null);
  const [students, setStudents] = useState<Student[]>([]);
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [q, setQ] = useState("");
  const [lessonFilter, setLessonFilter] = useState(0);
  const [studentFilter, setStudentFilter] = useState(0);
  const [open, setOpen] = useState<number | null>(null);
  const [detail, setDetail] = useState<Detail | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // bộ lọc của trang "Xuất điểm"
  const [exLesson, setExLesson] = useState(0);
  const [exClass, setExClass] = useState("");
  const [exSchool, setExSchool] = useState("");
  const [exBest, setExBest] = useState(true);
  const [exSplit, setExSplit] = useState(false);
  const [exRows, setExRows] = useState<Attempt[] | null>(null);

  const loadBase = useCallback(async () => {
    try {
      const [o, s] = await Promise.all([api<Overview>("/api/admin/overview"), api<{ students: Student[] }>("/api/admin/students")]);
      setOverview(o);
      setStudents(s.students);
      setError("");
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const loadAttempts = useCallback(async () => {
    try {
      const p = new URLSearchParams();
      if (lessonFilter) p.set("lesson", String(lessonFilter));
      if (studentFilter) p.set("student", String(studentFilter));
      const d = await api<{ attempts: Attempt[] }>(`/api/admin/attempts?${p}`);
      setAttempts(d.attempts);
    } catch (e: any) {
      setError(e.message);
    }
  }, [lessonFilter, studentFilter]);

  const exportQuery = useMemo(() => {
    const p = new URLSearchParams();
    if (exLesson) p.set("lesson", String(exLesson));
    if (exClass) p.set("class", exClass);
    if (exSchool) p.set("school", exSchool);
    if (exBest) p.set("best", "1");
    if (exSplit && !exLesson) p.set("split", "1");
    return p.toString();
  }, [exLesson, exClass, exSchool, exBest, exSplit]);

  const loadExport = useCallback(async () => {
    try {
      const d = await api<{ attempts: Attempt[] }>(`/api/admin/attempts?${exportQuery}`);
      setExRows(d.attempts);
      setError("");
    } catch (e: any) {
      setError(e.message);
    }
  }, [exportQuery]);

  useEffect(() => {
    void loadBase();
  }, [loadBase]);

  useEffect(() => {
    if (tab === "attempts") void loadAttempts();
  }, [tab, loadAttempts]);

  useEffect(() => {
    if (tab === "export") void loadExport();
  }, [tab, loadExport]);

  const classes = useMemo(() => [...new Set(students.map((s) => s.className).filter(Boolean) as string[])].sort((a, b) => a.localeCompare(b, "vi")), [students]);
  const schools = useMemo(() => [...new Set(students.map((s) => s.school).filter(Boolean) as string[])].sort((a, b) => a.localeCompare(b, "vi")), [students]);

  const filtered = useMemo(() => {
    const k = q.trim().toLowerCase();
    if (!k) return students;
    return students.filter((s) => [s.name, s.className ?? "", s.school ?? ""].some((v) => v.toLowerCase().includes(k)));
  }, [students, q]);

  async function toggleDetail(id: number) {
    if (open === id) return setOpen(null);
    setOpen(id);
    setDetail(null);
    try {
      setDetail(await api<Detail>(`/api/admin/attempt?id=${id}`));
    } catch (e: any) {
      setError(e.message);
    }
  }

  async function delAttempt(a: Attempt) {
    if (!confirm(`Xoá lượt làm Bài ${lessonNo(a.lessonId)}${a.lessonId > ADV ? " (Nâng cao)" : ""} của ${a.studentName} (${fmt(a.points)} điểm)?`)) return;
    await api("/api/admin/attempts", { method: "DELETE", headers: { "content-type": "application/json" }, body: JSON.stringify({ id: a.id }) });
    setOpen(null);
    await Promise.all([loadBase(), loadAttempts()]);
  }

  async function delStudent(s: Student) {
    if (!confirm(`Xoá học sinh ${s.name} và toàn bộ điểm số của bạn này? Không thể khôi phục.`)) return;
    await api("/api/admin/students", { method: "DELETE", headers: { "content-type": "application/json" }, body: JSON.stringify({ id: s.id }) });
    await Promise.all([loadBase(), loadAttempts()]);
  }

  const attemptTable = (rows: Attempt[]) =>
    rows.length === 0 ? (
      <p className="empty">Chưa có bài làm nào.</p>
    ) : (
      <div className="tablewrap">
        <table className="data">
          <thead>
            <tr>
              <th>Học sinh</th>
              <th>Lớp</th>
              <th>Bài</th>
              <th>Đúng</th>
              <th>Điểm</th>
              <th>Thời gian</th>
              <th>Nộp lúc</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((a) => (
              <Fragment key={a.id}>
                <tr className="click" onClick={() => toggleDetail(a.id)}>
                  <td>{a.studentName}</td>
                  <td>{a.className ?? "–"}</td>
                  <td>Bài {lessonNo(a.lessonId)}. {lessonTitle(a.lessonId)}</td>
                  <td>{a.correct}/{a.total}</td>
                  <td><span className={`pill ${pillCls(a.points)}`}>{fmt(a.points)}</span></td>
                  <td>{dur(a.seconds)}</td>
                  <td>{when(a.finishedAt)}</td>
                  <td>
                    <button className="btn red small" onClick={(e) => { e.stopPropagation(); void delAttempt(a); }}>Xoá</button>
                  </td>
                </tr>
                {open === a.id && (
                  <tr>
                    <td colSpan={8} style={{ background: "#fafcff" }}>
                      {!detail ? (
                        "Đang tải chi tiết…"
                      ) : (
                        <div style={{ display: "grid", gap: 6 }}>
                          {detail.items.map((it, k) => (
                            <div key={k} className={`rv ${it.ok ? "ok" : "no"}`}>
                              <div className="q"><Inline text={it.q.replace(/\[\[[^\]]*\]\]\s*/g, "")} /></div>
                              <div className="a">
                                Học sinh trả lời: <b>{it.given ? <Inline text={it.given} /> : "(chưa trả lời)"}</b>
                                {!it.ok && <> · Đáp án đúng: <b><Inline text={it.correct} />{it.unit ? ` ${it.unit}` : ""}</b></>}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </td>
                  </tr>
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    );

  function studentTable() {
    if (!filtered.length) return <p className="empty">Chưa có học sinh nào đăng ký.</p>;
    return (
      <div className="tablewrap">
        <table className="data">
          <thead>
            <tr>
              <th>Học sinh</th>
              <th>Lớp</th>
              <th>Trường</th>
              <th>Ngày sinh</th>
              <th>Tổng điểm</th>
              <th>Số bài</th>
              <th>Lượt làm</th>
              <th>Điểm TB</th>
              <th>Vào lần cuối</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {[...filtered].sort((a, b) => b.totalPoints - a.totalPoints).map((s) => (
              <tr key={s.id} className="click" onClick={() => { setStudentFilter(s.id); setLessonFilter(0); setTab("attempts"); }}>
                <td><b>{s.name}</b></td>
                <td>{s.className ?? "–"}</td>
                <td>{s.school ?? "–"}</td>
                <td>{dobFmt(s.dob)}</td>
                <td><span className="pill">{fmt(s.totalPoints)}</span></td>
                <td>{s.lessons}/73</td>
                <td>{s.attempts}</td>
                <td>{s.attempts ? fmt(s.avg) : "–"}</td>
                <td>{when(s.lastLogin)}</td>
                <td>
                  <button className="btn red small" onClick={(e) => { e.stopPropagation(); void delStudent(s); }}>Xoá</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  function exportPanel() {
    const rows = exRows ?? [];
    const lessonCount = new Set(rows.map((r) => r.lessonId)).size;
    return (
      <>
        <div className="filters">
          <div className="field">
            <label htmlFor="ex-lesson">Bài</label>
            <select id="ex-lesson" className="select" value={exLesson} onChange={(e) => setExLesson(Number(e.target.value))}>
              <option value={0}>Tất cả các bài</option>
              {LESSON_META.map(([id, , t]) => (
                <option key={id} value={id}>Bài {id}. {t}</option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="ex-class">Lớp</label>
            <select id="ex-class" className="select" value={exClass} onChange={(e) => setExClass(e.target.value)}>
              <option value="">Tất cả các lớp</option>
              {classes.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="ex-school">Trường</label>
            <select id="ex-school" className="select" value={exSchool} onChange={(e) => setExSchool(e.target.value)}>
              <option value="">Tất cả các trường</option>
              {schools.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="row" style={{ gap: 22 }}>
          <label className="check">
            <input type="checkbox" checked={exBest} onChange={(e) => setExBest(e.target.checked)} />
            Mỗi em một dòng (lần có điểm cao nhất)
          </label>
          <label className="check" style={{ opacity: exLesson ? 0.5 : 1 }}>
            <input type="checkbox" checked={exSplit && !exLesson} disabled={!!exLesson} onChange={(e) => setExSplit(e.target.checked)} />
            Mỗi bài một trang tính (sheet) trong file Excel
          </label>
        </div>

        <div className="export-bar">
          <p className="note">
            {exRows === null
              ? "Đang tải…"
              : `${rows.length} dòng${!exLesson && rows.length ? ` · ${lessonCount} bài` : ""}${rows.length >= 1000 ? " (xem trước 1 000 dòng đầu, file Excel có đủ)" : ""}`}
          </p>
          <a className="btn blue" href={`/api/admin/export?${exportQuery}`}>
            Tải file Excel (.xlsx)
          </a>
        </div>

        {rows.length === 0 ? (
          <p className="empty">Chưa có bài làm nào khớp bộ lọc này.</p>
        ) : (
          <div className="tablewrap">
            <table className="data export" style={{ minWidth: 1180 }}>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Họ tên</th>
                  <th>Ngày sinh</th>
                  <th>Lớp</th>
                  <th>Trường</th>
                  <th>Bài</th>
                  <th>Tên bài</th>
                  <th>Số câu đúng</th>
                  <th>Tổng số câu</th>
                  <th>Điểm</th>
                  <th>Thời gian</th>
                  <th>Nộp</th>
                </tr>
              </thead>
              <tbody>
                {rows.slice(0, 200).map((r, i) => (
                  <tr key={r.id}>
                    <td>{i + 1}</td>
                    <td><b>{r.studentName}</b></td>
                    <td>{dobFmt(r.dob)}</td>
                    <td>{r.className ?? ""}</td>
                    <td>{r.school ?? ""}</td>
                    <td>{lessonNo(r.lessonId)}</td>
                    <td className="wrap">{lessonTitle(r.lessonId)}</td>
                    <td>{r.correct}</td>
                    <td>{r.total}</td>
                    <td><span className={`pill ${pillCls(r.points)}`}>{fmt(r.points)}</span></td>
                    <td>{dur(r.seconds)}</td>
                    <td>{when(r.finishedAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {rows.length > 200 && <p className="note" style={{ marginTop: 8 }}>Đang hiện 200 dòng đầu. File Excel có đủ {rows.length} dòng.</p>}
      </>
    );
  }

  return (
    <div style={{ paddingTop: 30 }}>
      <div className="row" style={{ justifyContent: "space-between" }}>
        <h1>Quản lý lớp học</h1>
        <button className="btn white" onClick={() => setTab("export")}>Xuất điểm ra Excel</button>
      </div>

      {overview?.db === "memory" && (
        <p className="warn" style={{ marginTop: 14 }}>
          Chưa kết nối cơ sở dữ liệu online nên điểm chỉ lưu tạm trên máy chủ và sẽ mất khi máy chủ khởi động lại. Hãy thêm biến môi trường DATABASE_URL (Neon Postgres) để lưu lâu dài.
        </p>
      )}
      {error && <p className="err" style={{ marginTop: 14 }}>{error}</p>}

      <div className="tabs" role="tablist" style={{ marginTop: 20, flexWrap: "wrap" }}>
        <button className="tab" role="tab" aria-selected={tab === "over"} onClick={() => setTab("over")}>Tổng quan</button>
        <button className="tab" role="tab" aria-selected={tab === "students"} onClick={() => setTab("students")}>Học sinh</button>
        <button className="tab" role="tab" aria-selected={tab === "attempts"} onClick={() => setTab("attempts")}>Bài đã làm</button>
        <button className="tab" role="tab" aria-selected={tab === "export"} onClick={() => setTab("export")}>Xuất điểm</button>
      </div>

      {loading && <p className="empty">Đang tải dữ liệu…</p>}

      {tab === "over" && overview && (
        <>
          <div className="tiles">
            <div className="tile"><b>{overview.students}</b><span>Học sinh đã đăng ký</span></div>
            <div className="tile"><b>{overview.attempts}</b><span>Lượt làm bài</span></div>
            <div className="tile"><b>{fmt(overview.avgPoints)}</b><span>Điểm trung bình mỗi lượt</span></div>
            <div className="tile"><b>{overview.today}</b><span>Lượt làm trong 24 giờ qua</span></div>
          </div>
          <h2 style={{ margin: "22px 0 10px" }}>Điểm số học sinh</h2>
          {studentTable()}
        </>
      )}

      {tab === "students" && (
        <>
          <div className="row" style={{ margin: "6px 0 14px" }}>
            <input className="input" style={{ maxWidth: 380 }} placeholder="Tìm theo tên, lớp hoặc trường" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Tìm học sinh" />
          </div>
          {studentTable()}
        </>
      )}

      {tab === "attempts" && (
        <>
          <div className="row" style={{ margin: "6px 0 14px" }}>
            <select className="select" style={{ maxWidth: 260 }} value={studentFilter} onChange={(e) => setStudentFilter(Number(e.target.value))} aria-label="Lọc theo học sinh">
              <option value={0}>Tất cả học sinh</option>
              {students.map((s) => (
                <option key={s.id} value={s.id}>{s.name}{s.className ? ` – ${s.className}` : ""}</option>
              ))}
            </select>
            <select className="select" style={{ maxWidth: 320 }} value={lessonFilter} onChange={(e) => setLessonFilter(Number(e.target.value))} aria-label="Lọc theo bài">
              <option value={0}>Tất cả các bài</option>
              {LESSON_META.map(([id, , t]) => (
                <option key={id} value={id}>Bài {id}. {t}</option>
              ))}
            </select>
          </div>
          {attemptTable(attempts)}
        </>
      )}

      {tab === "export" && exportPanel()}
    </div>
  );
}
