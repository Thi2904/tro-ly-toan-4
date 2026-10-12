import { getStore } from "@/lib/store";
import { pointsOf } from "@/lib/identity";
import { studentOr401, body, fail, ok } from "@/lib/api";

export async function POST(req: Request) {
  const s = await studentOr401();
  if (!s) return fail("Chưa đăng nhập", 401);
  const { attemptId } = await body<{ attemptId?: number }>(req);
  const store = getStore();
  const a = await store.getAttempt(Number(attemptId));
  if (!a || a.studentId !== s.sid) return fail("Không tìm thấy bài làm.", 404);
  const review = () =>
    a.questions.map((q, i) => ({
      q: q.q,
      correct: q.correct,
      given: a.answers[i],
      ok: a.oks[i] === true,
      why: q.why ?? null,
      unit: q.unit ?? null,
    }));
  if (a.status === "done") {
    return ok({ correct: a.correct, total: a.total, points: a.points, review: review() });
  }
  const correct = a.oks.filter((x) => x === true).length;
  const total = a.questions.length;
  const points = pointsOf(correct, total);
  await store.finishAttempt(a.id, correct, total, points);
  const prev = (await store.progress(s.sid)).find((p) => p.lessonId === a.lessonId);
  return ok({ correct, total, points, best: prev?.best ?? points, review: review() });
}
