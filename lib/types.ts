export type Question =
  | { t: "mc"; q: string; correct: string; wrong: string[]; why?: string; fixed?: boolean }
  | { t: "num"; q: string; a: string; unit?: string; why?: string };

export type Lesson = {
  id: number; // 1..73
  topic: number; // chủ đề 1..13
  title: string;
  volume: 1 | 2; // tập
  intro: string; // lời nhắc kiến thức ngắn
  questions: Question[];
};

// Câu hỏi gửi cho học sinh (không chứa đáp án)
export type PublicQuestion = {
  id: string;
  t: "mc" | "num";
  q: string;
  options?: string[];
  unit?: string;
};

export type AnswerRecord = {
  id: string;
  q: string;
  given: string;
  correct: string;
  ok: boolean;
};
