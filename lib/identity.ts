/** Chuẩn hoá tên để nhận ra cùng một học sinh: không phân biệt hoa/thường, dấu, khoảng trắng thừa. */
export function nameKey(raw: string): string {
  return raw
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/gi, "d")
    .toLowerCase()
    .replace(/[^a-z\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Tên hiển thị: gọn khoảng trắng và viết hoa chữ cái đầu mỗi từ. */
export function displayName(raw: string): string {
  return raw
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .map((w) => (w ? w.charAt(0).toLocaleUpperCase("vi") + w.slice(1).toLocaleLowerCase("vi") : w))
    .join(" ");
}

export function validName(raw: string): string | null {
  const t = raw.replace(/\s+/g, " ").trim();
  if (t.length < 2) return "Em hãy nhập họ và tên đầy đủ nhé.";
  if (t.length > 60) return "Tên hơi dài rồi, em kiểm tra lại nhé.";
  if (nameKey(t).split(" ").filter(Boolean).length < 2) return "Em nhập cả họ và tên (ít nhất hai từ) nhé.";
  return null;
}

/** Nhận yyyy-mm-dd, trả về chuỗi chuẩn hoặc null nếu ngày không có thật. */
export function validDob(iso: string): string | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || "");
  if (!m) return null;
  const y = +m[1], mo = +m[2], d = +m[3];
  const dt = new Date(Date.UTC(y, mo - 1, d));
  if (dt.getUTCFullYear() !== y || dt.getUTCMonth() !== mo - 1 || dt.getUTCDate() !== d) return null;
  const now = new Date().getUTCFullYear();
  if (y < now - 25 || y > now - 4) return null;
  return iso;
}

export function fmtDob(iso: string): string {
  const [y, m, d] = iso.slice(0, 10).split("-");
  return `${d}/${m}/${y}`;
}

/** So sánh đáp án số: bỏ khoảng trắng, dấu chấm/phẩy ngăn cách hàng nghìn, số 0 đứng đầu. */
export function normNum(s: string): string {
  const t = String(s).replace(/[\s\u00A0.,]/g, "").replace(/^0+(?=\d)/, "");
  return t.toLowerCase();
}

export function checkAnswer(q: { t: "mc" | "num"; correct: string }, given: string): boolean {
  if (q.t === "mc") return given.trim() === q.correct.trim();
  return normNum(given) === normNum(q.correct) && normNum(given) !== "";
}

export function pointsOf(correct: number, total: number): number {
  if (!total) return 0;
  return Math.round((correct / total) * 100) / 10;
}

/** Lớp: bỏ khoảng trắng thừa, viết hoa (4a → 4A). */
export function cleanClass(raw: string): string {
  return (raw || "").replace(/\s+/g, " ").trim().toLocaleUpperCase("vi").slice(0, 20);
}

/** Trường: gọn khoảng trắng, viết hoa chữ cái đầu mỗi từ nhưng giữ nguyên các chữ viết tắt (THCS). */
export function cleanSchool(raw: string): string {
  return (raw || "")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .map((w) => (w ? w.charAt(0).toLocaleUpperCase("vi") + w.slice(1) : w))
    .join(" ")
    .slice(0, 80);
}

export function validClass(c: string): string | null {
  if (c.length < 1) return "Em nhập lớp của em nhé (ví dụ 4A).";
  if (c.length > 20) return "Tên lớp hơi dài, em kiểm tra lại nhé.";
  return null;
}

export function validSchool(sch: string): string | null {
  if (sch.length < 3) return "Em nhập tên trường của em nhé.";
  if (sch.length > 80) return "Tên trường hơi dài, em kiểm tra lại nhé.";
  return null;
}
