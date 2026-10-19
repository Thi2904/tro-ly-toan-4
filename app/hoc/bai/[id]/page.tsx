import { notFound, redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import { LESSON_BY_ID } from "@/lib/bank";
import { Header } from "@/components/Header";
import { Quiz } from "@/components/Quiz";

export const dynamic = "force-dynamic";

export default async function LessonPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const s = await getSession();
  if (!s) redirect("/");
  if (s.role === "admin") redirect("/admin");
  const lesson = LESSON_BY_ID.get(Number(id));
  if (!lesson) notFound();

  return (
    <>
      <Header role="student" name={s.name} />
      <main className="wrap">
        <Quiz lessonId={lesson.id} title={lesson.title} intro={lesson.intro} hasQuestions={lesson.questions.length} hasAdv={lesson.adv.length} />
      </main>
    </>
  );
}
