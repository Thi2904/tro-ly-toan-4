import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

const COOKIE = "tl_session";

export type Session = { role: "student"; sid: number; name: string } | { role: "admin" };

function secret(): string {
  return process.env.SESSION_SECRET || "dev-only-secret-change-me";
}

function sign(payload: string): string {
  return createHmac("sha256", secret()).update(payload).digest("base64url");
}

export function encode(s: Session, ttlSec: number): string {
  const body = Buffer.from(JSON.stringify({ ...s, exp: Math.floor(Date.now() / 1000) + ttlSec })).toString("base64url");
  return `${body}.${sign(body)}`;
}

export function decode(token: string | undefined): Session | null {
  if (!token) return null;
  const [body, sig] = token.split(".");
  if (!body || !sig) return null;
  const expect = sign(body);
  const a = Buffer.from(sig);
  const b = Buffer.from(expect);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return null;
  try {
    const data = JSON.parse(Buffer.from(body, "base64url").toString("utf8"));
    if (typeof data.exp !== "number" || data.exp < Date.now() / 1000) return null;
    delete data.exp;
    return data as Session;
  } catch {
    return null;
  }
}

export async function getSession(): Promise<Session | null> {
  const jar = await cookies();
  return decode(jar.get(COOKIE)?.value);
}

export async function setSession(s: Session) {
  const ttl = s.role === "admin" ? 60 * 60 * 8 : 60 * 60 * 24 * 60;
  const jar = await cookies();
  jar.set(COOKIE, encode(s, ttl), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: ttl,
  });
}

export async function clearSession() {
  const jar = await cookies();
  jar.delete(COOKIE);
}

export function safeEqual(a: string, b: string): boolean {
  const x = createHmac("sha256", "cmp").update(a).digest();
  const y = createHmac("sha256", "cmp").update(b).digest();
  return timingSafeEqual(x, y);
}
