import { getStore } from "@/lib/store";
import { checkAnswer } from "@/lib/identity";
import { studentOr401, body, fail, ok } from "@/lib/api";

export async function POST(req: Request) {
  const s = await studentOr401();
  if (!s) return fail("Chưa đăng nhập", 401);
  const { attemptId, index, answer } = await body<{ attemptId?: number; index?: number; answer?: string }>(req);
  const store = getStore();
  const a = await store.getAttempt(Number(attemptId));
  if (!a || a.studentId !== s.sid) return fail("Không tìm thấy bài làm.", 404);
  const i = Number(index);
  if (!Number.isInteger(i) || i < 0 || i >= a.questions.length) return fail("Câu hỏi không hợp lệ.");
  const q = a.questions[i];
  // Đã trả lời rồi thì trả lại kết quả cũ, không cho đổi đáp án.
  if (a.oks[i] !== null && a.oks[i] !== undefined) {
    return ok({ correct: !!a.oks[i], answer: q.correct, why: q.why ?? null, repeated: true });
  }
  if (a.status !== "doing") return fail("Bài này đã nộp rồi.");
  const given = String(answer ?? "").slice(0, 80);
  const good = checkAnswer(q, given);
  await store.recordAnswer(a.id, i, given, good);
  return ok({ correct: good, answer: q.correct, why: q.why ?? null });
}
