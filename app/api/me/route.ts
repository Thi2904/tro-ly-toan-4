import { getSession } from "@/lib/session";
import { getStore } from "@/lib/store";
import { ok } from "@/lib/api";

export async function GET() {
  const s = await getSession();
  return ok({ session: s, db: getStore().kind });
}
