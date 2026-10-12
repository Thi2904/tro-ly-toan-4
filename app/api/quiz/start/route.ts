import { getStore } from "@/lib/store";
import { LESSON_BY_ID } from "@/lib/bank";
import { buildQuiz, toPublic } from "@/lib/quiz";
import { studentOr401, body, fail, ok } from "@/lib/api";

export async function POST(req: Request) {
  const s = await studentOr401();
  if (!s) return fail("Chưa đăng nhập", 401);
  const { lessonId } = await body<{ lessonId?: number }>(req);
  const lesson = LESSON_BY_ID.get(Number(lessonId));
  if (!lesson) return fail("Không tìm thấy bài học.", 404);
  const attempt = await getStore().createAttempt(s.sid, lesson.id, buildQuiz(lesson));
  return ok({ attemptId: attempt.id, lessonId: lesson.id, title: lesson.title, questions: toPublic(attempt) });
}
