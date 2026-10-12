import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import { Header } from "@/components/Header";
import { Leaderboard } from "@/components/Leaderboard";

export const dynamic = "force-dynamic";

export default async function BoardPage({ searchParams }: { searchParams: Promise<{ lesson?: string }> }) {
  const s = await getSession();
  if (!s) redirect("/");
  const { lesson } = await searchParams;
  const initial = Math.min(73, Math.max(0, Number(lesson) || 0));

  return (
    <>
      <Header role={s.role} name={s.role === "student" ? s.name : undefined} />
      <main className="wrap">
        <Leaderboard initialLesson={initial} />
      </main>
    </>
  );
}
