import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import { getStore } from "@/lib/store";
import { Header } from "@/components/Header";
import { StudentHome } from "@/components/StudentHome";

export const dynamic = "force-dynamic";

export default async function StudentPage() {
  const s = await getSession();
  if (!s) redirect("/");
  if (s.role === "admin") redirect("/admin");
  const store = getStore();
  const [progress, board] = await Promise.all([store.progress(s.sid), store.leaderboard()]);
  const idx = board.findIndex((r) => r.studentId === s.sid);

  return (
    <>
      <Header role="student" name={s.name} />
      <main className="wrap">
        <StudentHome name={s.name} progress={progress} rank={idx >= 0 ? idx + 1 : null} totalStudents={board.length} />
      </main>
    </>
  );
}
