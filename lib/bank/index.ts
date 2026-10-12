import type { Lesson, Question } from "../types";
import { LESSON_META } from "./meta";
import { ch1 } from "./ch1";
import { ch2 } from "./ch2";
import { ch3 } from "./ch3";
import { ch4 } from "./ch4";
import { ch5 } from "./ch5";
import { ch6 } from "./ch6";
import { ch7 } from "./ch7";
import { ch8a } from "./ch8a";
import { ch8b } from "./ch8b";
import { ch8c } from "./ch8c";
import { ch9 } from "./ch9";
import { ch10 } from "./ch10";
import { ch11 } from "./ch11";
import { ch12 } from "./ch12";
import { ch13 } from "./ch13";

type Raw = Record<number, { intro: string; questions: Question[] }>;

const RAW: Raw = {
  ...ch1, ...ch2, ...ch3, ...ch4, ...ch5, ...ch6, ...ch7,
  ...ch8a, ...ch8b, ...ch8c, ...ch9, ...ch10, ...ch11, ...ch12, ...ch13,
};

export const LESSONS: Lesson[] = LESSON_META.map(([id, topic, title]) => {
  const raw = RAW[id];
  if (!raw) throw new Error(`Thiếu nội dung bài ${id}`);
  return { id, topic, title, volume: id <= 37 ? 1 : 2, intro: raw.intro, questions: raw.questions };
});

export const LESSON_BY_ID = new Map(LESSONS.map((l) => [l.id, l]));
