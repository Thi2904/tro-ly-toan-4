import { getStore } from "@/lib/store";
import { getSession } from "@/lib/session";
import { fail, ok } from "@/lib/api";

export async function GET(req: Request) {
  const s = await getSession();
  if (!s) return fail("Chưa đăng nhập", 401);
  const lesson = Number(new URL(req.url).searchParams.get("lesson")) || undefined;
  const rows = await getStore().leaderboard(lesson);
  return ok({ rows, me: s.role === "student" ? s.sid : null });
}
