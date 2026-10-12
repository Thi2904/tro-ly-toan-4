import { getStore } from "@/lib/store";
import { LESSON_BY_ID } from "@/lib/bank";
import { fmtDob } from "@/lib/identity";
import { adminOr401, fail } from "@/lib/api";

const esc = (v: unknown) => `"${String(v ?? "").replace(/"/g, '""')}"`;

export async function GET() {
  if (!(await adminOr401())) return fail("Chưa đăng nhập", 401);
  const store = getStore();
  const students = new Map((await store.adminStudents()).map((s) => [s.id, s]));
  const rows = await store.adminAttempts({ limit: 5000 });
  const head = ["Học sinh", "Ngày sinh", "Bài", "Tên bài", "Số câu đúng", "Tổng số câu", "Điểm", "Thời gian (giây)", "Nộp lúc"];
  const lines = [head.map(esc).join(",")];
  for (const r of rows) {
    const s = students.get(r.studentId);
    const l = LESSON_BY_ID.get(r.lessonId);
    lines.push(
      [r.studentName, s ? fmtDob(s.dob) : "", r.lessonId, l?.title ?? "", r.correct, r.total, r.points, r.seconds ?? "", r.finishedAt ?? ""]
        .map(esc)
        .join(","),
    );
  }
  return new Response("﻿" + lines.join("\r\n"), {
    headers: {
      "content-type": "text/csv; charset=utf-8",
      "content-disposition": 'attachment; filename="ket-qua-hoc-sinh.csv"',
    },
  });
}
