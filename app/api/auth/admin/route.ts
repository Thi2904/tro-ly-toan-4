import { setSession, safeEqual } from "@/lib/session";
import { body, fail, ok } from "@/lib/api";

export async function POST(req: Request) {
  const { username, password } = await body<{ username?: string; password?: string }>(req);
  const u = process.env.ADMIN_USERNAME || "admin";
  const p = process.env.ADMIN_PASSWORD;
  if (!p) return fail("Máy chủ chưa được cấu hình mật khẩu giáo viên.", 500);
  const good = safeEqual(String(username ?? "").trim(), u) && safeEqual(String(password ?? ""), p);
  if (!good) return fail("Sai tên đăng nhập hoặc mật khẩu.", 401);
  await setSession({ role: "admin" });
  return ok({ ok: true });
}
