import ExcelJS from "exceljs";
import { LESSON_BY_ID } from "./bank";
import type { AttemptRow } from "./store";

const HEADERS = ["STT", "Họ tên", "Ngày sinh", "Lớp", "Trường", "Bài", "Tên bài", "Số câu đúng", "Tổng số câu", "Điểm", "Thời gian", "Nộp"];
const WIDTHS = [6, 26, 13, 9, 30, 7, 40, 13, 13, 9, 12, 18];
const LEFT = new Set([1, 4, 6]); // Họ tên, Trường, Tên bài canh trái

const BORDER: Partial<ExcelJS.Borders> = {
  top: { style: "thin" },
  left: { style: "thin" },
  bottom: { style: "thin" },
  right: { style: "thin" },
};

const VN_OFFSET_MS = 7 * 3600 * 1000;

function vnDateTime(iso: string | null): Date | null {
  // Excel không có múi giờ: dịch sang giờ Việt Nam rồi ghi như giờ địa phương.
  return iso ? new Date(+new Date(iso) + VN_OFFSET_MS) : null;
}

function vnNowText(): string {
  const d = new Date(Date.now() + VN_OFFSET_MS);
  const p = (n: number) => String(n).padStart(2, "0");
  return `${p(d.getUTCDate())}/${p(d.getUTCMonth() + 1)}/${d.getUTCFullYear()} ${p(d.getUTCHours())}:${p(d.getUTCMinutes())}`;
}

function dobDate(iso: string): Date | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso || "");
  return m ? new Date(Date.UTC(+m[1], +m[2] - 1, +m[3])) : null;
}

function addSheet(wb: ExcelJS.Workbook, sheetName: string, title: string, subtitle: string, rows: AttemptRow[]) {
  const ws = wb.addWorksheet(sheetName.replace(/[\\/?*[\]:]/g, " ").slice(0, 31), {
    views: [{ state: "frozen", ySplit: 3 }],
    pageSetup: { orientation: "landscape", fitToPage: true, fitToWidth: 1, fitToHeight: 0 },
  });
  ws.columns = WIDTHS.map((w) => ({ width: w }));

  ws.mergeCells(1, 1, 1, HEADERS.length);
  const t = ws.getCell(1, 1);
  t.value = title;
  t.font = { bold: true, size: 15 };
  t.alignment = { horizontal: "center", vertical: "middle" };
  ws.getRow(1).height = 28;

  ws.mergeCells(2, 1, 2, HEADERS.length);
  const sub = ws.getCell(2, 1);
  sub.value = subtitle;
  sub.font = { italic: true, size: 11, color: { argb: "FF4A5A78" } };
  sub.alignment = { horizontal: "center", vertical: "middle" };

  const head = ws.getRow(3);
  HEADERS.forEach((h, i) => {
    const c = head.getCell(i + 1);
    c.value = h;
    c.font = { bold: true, size: 12 };
    c.alignment = { horizontal: "center", vertical: "middle", wrapText: true };
    c.border = BORDER;
    c.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFDDE8FB" } };
  });
  head.height = 24;

  rows.forEach((r, idx) => {
    const lesson = LESSON_BY_ID.get(r.lessonId);
    const row = ws.getRow(4 + idx);
    row.height = 21;
    const values: (string | number | Date | null)[] = [
      idx + 1,
      r.studentName,
      dobDate(r.dob),
      r.className ?? "",
      r.school ?? "",
      r.lessonId,
      lesson?.title ?? "",
      r.correct,
      r.total,
      r.points,
      r.seconds === null ? null : r.seconds / 86400,
      vnDateTime(r.finishedAt),
    ];
    values.forEach((v, i) => {
      const c = row.getCell(i + 1);
      c.value = v as ExcelJS.CellValue;
      c.border = BORDER;
      c.alignment = { horizontal: LEFT.has(i) ? "left" : "center", vertical: "middle", wrapText: i === 6 };
    });
    row.getCell(3).numFmt = "dd/mm/yyyy";
    row.getCell(10).numFmt = "0.0";
    row.getCell(11).numFmt = "[m]:ss";
    row.getCell(12).numFmt = "dd/mm/yyyy hh:mm";
  });

  if (rows.length === 0) {
    ws.mergeCells(4, 1, 4, HEADERS.length);
    const c = ws.getCell(4, 1);
    c.value = "Chưa có bài làm nào phù hợp với bộ lọc này.";
    c.alignment = { horizontal: "center" };
    c.font = { italic: true, color: { argb: "FF4A5A78" } };
  }

  ws.autoFilter = { from: { row: 3, column: 1 }, to: { row: 3, column: HEADERS.length } };
}

export type ExportOptions = {
  lessonId?: number;
  className?: string;
  school?: string;
  bestOnly: boolean;
  splitByLesson: boolean;
};

export async function buildWorkbook(rows: AttemptRow[], o: ExportOptions): Promise<Buffer> {
  const wb = new ExcelJS.Workbook();
  wb.creator = "Siêu Sao Toán 4";
  wb.created = new Date();

  const filters = [
    o.className ? `Lớp: ${o.className}` : "Tất cả các lớp",
    o.school ? `Trường: ${o.school}` : "Tất cả các trường",
    o.bestOnly ? "Mỗi em một dòng (lần điểm cao nhất)" : "Tất cả các lượt làm",
  ];
  const subtitle = `${filters.join("  ·  ")}  ·  Xuất lúc ${vnNowText()}`;

  if (o.lessonId) {
    const l = LESSON_BY_ID.get(o.lessonId);
    addSheet(wb, `Bài ${o.lessonId}`, `KẾT QUẢ LÀM BÀI – Bài ${o.lessonId}. ${l?.title ?? ""}`, subtitle, rows);
  } else if (o.splitByLesson) {
    const ids = [...new Set(rows.map((r) => r.lessonId))].sort((a, b) => a - b);
    if (ids.length === 0) addSheet(wb, "Kết quả", "KẾT QUẢ LÀM BÀI", subtitle, []);
    for (const id of ids) {
      const l = LESSON_BY_ID.get(id);
      addSheet(wb, `Bài ${id}`, `KẾT QUẢ LÀM BÀI – Bài ${id}. ${l?.title ?? ""}`, subtitle, rows.filter((r) => r.lessonId === id));
    }
  } else {
    addSheet(wb, "Tất cả các bài", "KẾT QUẢ LÀM BÀI – Tất cả các bài", subtitle, rows);
  }

  const buf = await wb.xlsx.writeBuffer();
  return Buffer.from(buf as ArrayBuffer);
}
