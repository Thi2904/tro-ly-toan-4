import { getStore } from "@/lib/store";
import { LESSON_BY_ID } from "@/lib/bank";
import { ADV } from "@/lib/bank/meta";
import { buildQuiz, toPublic } from "@/lib/quiz";
import { studentOr401, body, fail, ok } from "@/lib/api";

export async function POST(req: Request) {
  const s = await studentOr401();
  if (!s) return fail("Chưa đăng nhập", 401);
  const { lessonId, advanced } = await body<{ lessonId?: number; advanced?: boolean }>(req);
  const lesson = LESSON_BY_ID.get(Number(lessonId));
  if (!lesson) return fail("Không tìm thấy bài học.", 404);
  const adv = advanced === true;
  const attempt = await getStore().createAttempt(s.sid, adv ? lesson.id + ADV : lesson.id, buildQuiz(lesson, adv));
  return ok({ attemptId: attempt.id, lessonId: lesson.id, title: lesson.title, questions: toPublic(attempt) });
}
