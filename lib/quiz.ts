import type { Lesson, PublicQuestion } from "./types";
import type { StoredQ, Attempt } from "./store";

export const QUIZ_SIZE = 10;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Chọn ngẫu nhiên tối đa 10 câu trong bài, xáo trộn đáp án trắc nghiệm. */
export function buildQuiz(lesson: Lesson): StoredQ[] {
  const picked = shuffle(lesson.questions).slice(0, QUIZ_SIZE);
  return picked.map((q): StoredQ => {
    if (q.t === "mc") {
      const options = q.fixed
        ? [q.correct, ...q.wrong].sort((a, b) => (a === "Đúng" ? -1 : b === "Đúng" ? 1 : 0))
        : shuffle([q.correct, ...q.wrong]);
      return { q: q.q, t: "mc", options, correct: q.correct, why: q.why };
    }
    return { q: q.q, t: "num", unit: q.unit, correct: q.a, why: q.why };
  });
}

export function toPublic(a: Attempt): PublicQuestion[] {
  return a.questions.map((q, i) => ({ id: String(i), t: q.t, q: q.q, options: q.options, unit: q.unit }));
}
