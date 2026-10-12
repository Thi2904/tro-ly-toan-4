import { NextResponse } from "next/server";
import { getSession } from "./session";

export const ok = (data: unknown = {}, init?: ResponseInit) => NextResponse.json(data, init);
export const fail = (message: string, status = 400) => NextResponse.json({ error: message }, { status });

export async function studentOr401() {
  const s = await getSession();
  if (!s || s.role !== "student") return null;
  return s;
}

export async function adminOr401() {
  const s = await getSession();
  if (!s || s.role !== "admin") return null;
  return s;
}

export async function body<T = any>(req: Request): Promise<T> {
  try {
    return (await req.json()) as T;
  } catch {
    return {} as T;
  }
}
