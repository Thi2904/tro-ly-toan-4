import { getStore } from "@/lib/store";
import { adminOr401, fail, ok } from "@/lib/api";

export async function GET() {
  if (!(await adminOr401())) return fail("Chưa đăng nhập", 401);
  const store = getStore();
  return ok({ ...(await store.overview()), db: store.kind });
}
