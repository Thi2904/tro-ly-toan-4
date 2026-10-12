// Kiểm tra ngân hàng câu hỏi: node --experimental-strip-types scripts/check-bank.mjs
import { LESSONS } from "../lib/bank/index";

let errors = 0;
let total = 0;
const err = (m) => { errors++; console.log("LỖI:", m); };

if (LESSONS.length !== 73) err(`Số bài = ${LESSONS.length}, cần 73`);
for (const l of LESSONS) {
  if (l.questions.length < 8) err(`Bài ${l.id} chỉ có ${l.questions.length} câu`);
  total += l.questions.length;
  const seen = new Set();
  l.questions.forEach((q, i) => {
    const tag = `Bài ${l.id} câu ${i + 1}`;
    if (!q.q || q.q.length < 5) err(`${tag}: thiếu đề`);
    if (seen.has(q.q)) err(`${tag}: trùng đề`);
    seen.add(q.q);
    if (q.t === "mc") {
      if (!q.correct) err(`${tag}: thiếu đáp án`);
      const all = [q.correct, ...q.wrong];
      if (new Set(all.map(String)).size !== all.length) err(`${tag}: đáp án trùng nhau → ${all.join(" | ")}`);
      if (q.wrong.length < 1) err(`${tag}: thiếu đáp án sai`);
    } else {
      if (q.a === undefined || q.a === "" || String(q.a).includes("NaN")) err(`${tag}: đáp án số không hợp lệ (${q.a})`);
      if (/\./.test(String(q.a))) err(`${tag}: đáp án có dấu thập phân (${q.a})`);
    }
  });
}
console.log(`Số bài: ${LESSONS.length}, tổng câu hỏi: ${total}, lỗi: ${errors}`);
process.exit(errors ? 1 : 0);
