import { getStore } from "@/lib/store";
import { studentOr401, fail, ok } from "@/lib/api";

export async function GET() {
  const s = await studentOr401();
  if (!s) return fail("Chưa đăng nhập", 401);
  return ok({ progress: await getStore().progress(s.sid) });
}
