import type { Question } from "../types";

const NBSP = "\u00A0";

/** Định dạng số theo kiểu SGK: 1 120 980 (dùng khoảng trắng không ngắt dòng). */
export function n(x: number | bigint): string {
  const s = x.toString();
  const neg = s.startsWith("-");
  const digits = neg ? s.slice(1) : s;
  const out = digits.replace(/\B(?=(\d{3})+(?!\d))/g, NBSP);
  return (neg ? "-" : "") + out;
}

/** Câu trắc nghiệm: đáp án đúng + các đáp án sai (thứ tự sẽ được xáo khi giao cho học sinh). */
export function mc(q: string, correct: string | number, wrong: (string | number)[], why?: string): Question {
  const f = (v: string | number) => (typeof v === "number" ? n(v) : v);
  return { t: "mc", q, correct: f(correct), wrong: wrong.map(f), why };
}

/** Câu đúng/sai (giữ nguyên thứ tự Đúng – Sai). */
export function tf(q: string, isTrue: boolean, why?: string): Question {
  return {
    t: "mc",
    q,
    correct: isTrue ? "Đúng" : "Sai",
    wrong: [isTrue ? "Sai" : "Đúng"],
    why,
    fixed: true,
  };
}

/** Câu điền số / điền đáp án ngắn. */
export function num(q: string, a: string | number, why?: string, unit?: string): Question {
  return { t: "num", q, a: typeof a === "number" ? n(a) : a, why, unit };
}

/** Phân số dạng {a/b} — hiển thị xếp chồng trên giao diện. */
export const fr = (a: number | string, b: number | string) => `{${a}/${b}}`;
