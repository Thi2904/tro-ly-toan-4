import { getStore } from "@/lib/store";
import { buildWorkbook } from "@/lib/exportXlsx";
import { adminOr401, fail } from "@/lib/api";

export const dynamic = "force-dynamic";

const slug = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/đ/gi, "d")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export async function GET(req: Request) {
  if (!(await adminOr401())) return fail("Chưa đăng nhập", 401);
  const p = new URL(req.url).searchParams;
  const lessonId = Number(p.get("lesson")) || undefined;
  const className = p.get("class") || undefined;
  const school = p.get("school") || undefined;
  const bestOnly = p.get("best") === "1";
  const splitByLesson = p.get("split") === "1";

  const rows = await getStore().adminAttempts({ lessonId, className, school, bestOnly, limit: 20000 });
  const buf = await buildWorkbook(rows, { lessonId, className, school, bestOnly, splitByLesson });

  const parts = ["ket-qua", lessonId ? `bai-${lessonId}` : splitByLesson ? "tung-bai" : "tat-ca-bai"];
  if (className) parts.push(`lop-${slug(className)}`);
  if (school) parts.push(slug(school).slice(0, 30));
  const filename = parts.join("-") + ".xlsx";

  return new Response(new Uint8Array(buf), {
    headers: {
      "content-type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "content-disposition": `attachment; filename="${filename}"`,
      "cache-control": "no-store",
    },
  });
}
