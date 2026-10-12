import { getStore } from "@/lib/store";
import { adminOr401, body, fail, ok } from "@/lib/api";

export async function GET(req: Request) {
  if (!(await adminOr401())) return fail("Chưa đăng nhập", 401);
  const p = new URL(req.url).searchParams;
  const rows = await getStore().adminAttempts({
    studentId: Number(p.get("student")) || undefined,
    lessonId: Number(p.get("lesson")) || undefined,
    limit: 500,
  });
  return ok({ attempts: rows });
}

export async function DELETE(req: Request) {
  if (!(await adminOr401())) return fail("Chưa đăng nhập", 401);
  const { id } = await body<{ id?: number }>(req);
  if (!Number.isInteger(id)) return fail("Thiếu mã bài làm.");
  await getStore().deleteAttempt(id!);
  return ok({ ok: true });
}
