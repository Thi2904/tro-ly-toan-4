import { getStore } from "@/lib/store";
import { adminOr401, body, fail, ok } from "@/lib/api";

export async function GET() {
  if (!(await adminOr401())) return fail("Chưa đăng nhập", 401);
  return ok({ students: await getStore().adminStudents() });
}

export async function DELETE(req: Request) {
  if (!(await adminOr401())) return fail("Chưa đăng nhập", 401);
  const { id } = await body<{ id?: number }>(req);
  if (!Number.isInteger(id)) return fail("Thiếu mã học sinh.");
  await getStore().deleteStudent(id!);
  return ok({ ok: true });
}
