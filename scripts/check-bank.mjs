// Kiểm tra ngân hàng câu hỏi: npm run check:bank
import { readdirSync } from "node:fs";
import { LESSON_META } from "../lib/bank/meta";

// Nạp trực tiếp từng file chương để báo lỗi từng bài, kể cả khi chương khác chưa viết xong.
const files = readdirSync(new URL("../lib/bank/", import.meta.url)).filter((f) => /^ch\d+[abc]?\.ts$/.test(f));
const RAW = {};
for (const f of files) Object.assign(RAW, Object.values(await import(`../lib/bank/${f}`))[0]);
const LESSONS = LESSON_META.map(([id, topic, title]) => ({ id, title, ...(RAW[id] ?? { questions: [], adv: [] }) }));

let errors = 0;
let total = 0;
let totalAdv = 0;
const err = (m) => { errors++; console.log("LỖI:", m); };
const norm = (s) => String(s).replace(/[\s .,]/g, "").replace(/^0+(?=\d)/, "");

// Với câu "…: biểu thức = ?" thì tự tính lại biểu thức trong đề và so với đáp án.
function recompute(q) {
  const idx = q.q.lastIndexOf("= ?");
  if (idx < 0 || /[\d×+]/.test(q.q.slice(idx + 3))) return; // "= ? × 5": ẩn số nằm giữa biểu thức
  let i = idx;
  while (i > 0 && /[\d\s ()+–×:-]/.test(q.q[i - 1])) i--;
  let run = q.q.slice(i, idx);
  if (run.startsWith(":")) run = run.slice(1); // dấu hai chấm của đề, liền sau chữ
  else if (/^\s*:/.test(run)) return; // phép chia có số bị chia kèm đơn vị
  run = run.trim();
  if (!/^[\d(]/.test(run)) return;
  const expr = run.replace(/(\d)[\s ]+(?=\d{3}(?!\d))/g, "$1").replace(/–/g, "-").replace(/×/g, "*").replace(/:/g, "/");
  if (!/^[\d+\-*/() ]+$/.test(expr)) return;
  let v;
  try { v = Function(`"use strict";return (${expr})`)(); } catch { return; }
  if (norm(Math.floor(v)) !== norm(q.a) && norm(v) !== norm(q.a)) err(`đáp án ${q.a} không khớp biểu thức "${run}" = ${v} → ${q.q}`);
}

function check(list, tag, min) {
  if (list.length < min) err(`${tag} chỉ có ${list.length} câu (cần ≥ ${min})`);
  const seen = new Set();
  list.forEach((q, i) => {
    const t = `${tag} câu ${i + 1}`;
    if (!q.q || q.q.length < 5) err(`${t}: thiếu đề`);
    if (seen.has(q.q)) err(`${t}: trùng đề`);
    seen.add(q.q);
    if (q.t === "mc") {
      if (!q.correct) err(`${t}: thiếu đáp án`);
      const all = [q.correct, ...q.wrong];
      if (new Set(all.map(String)).size !== all.length) err(`${t}: đáp án trùng nhau → ${all.join(" | ")}`);
      if (q.wrong.length < 1) err(`${t}: thiếu đáp án sai`);
    } else {
      if (q.a === undefined || q.a === "" || String(q.a).includes("NaN")) err(`${t}: đáp án số không hợp lệ (${q.a})`);
      if (/\./.test(String(q.a))) err(`${t}: đáp án có dấu thập phân (${q.a})`);
      if (/-/.test(String(q.a))) err(`${t}: đáp án âm (${q.a})`);
      recompute(q);
    }
  });
}

if (LESSONS.length !== 73) err(`Số bài = ${LESSONS.length}, cần 73`);
for (const l of LESSONS) {
  check(l.questions, `Bài ${l.id}`, 12);
  check(l.adv ?? [], `Bài ${l.id} (nâng cao)`, 5);
  total += l.questions.length;
  totalAdv += (l.adv ?? []).length;
}
console.log(`Số bài: ${LESSONS.length}, câu thường: ${total}, câu nâng cao: ${totalAdv}, lỗi: ${errors}`);
process.exit(errors ? 1 : 0);
