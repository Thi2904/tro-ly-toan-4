import { getStore } from "@/lib/store";
import { adminOr401, fail, ok } from "@/lib/api";

export async function GET(req: Request) {
  if (!(await adminOr401())) return fail("Chưa đăng nhập", 401);
  const id = Number(new URL(req.url).searchParams.get("id"));
  const a = await getStore().getAttempt(id);
  if (!a) return fail("Không tìm thấy bài làm.", 404);
  return ok({
    id: a.id,
    lessonId: a.lessonId,
    correct: a.correct,
    total: a.total,
    points: a.points,
    items: a.questions.map((q, i) => ({
      q: q.q,
      correct: q.correct,
      given: a.answers[i],
      ok: a.oks[i] === true,
      unit: q.unit ?? null,
    })),
  });
}
