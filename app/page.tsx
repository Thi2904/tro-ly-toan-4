import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import { LoginPanel } from "@/components/LoginPanel";

export const dynamic = "force-dynamic";

export default async function Home() {
  const s = await getSession();
  if (s?.role === "student") redirect("/hoc");
  if (s?.role === "admin") redirect("/admin");

  return (
    <main className="wrap">
      <div className="login-grid">
        <section className="hero">
          <h1 className="hero-title">
            Học <span className="scribble">Toán 4</span> mỗi ngày, thêm một bài là thêm một sao
          </h1>
          <p>73 bài trong sách giáo khoa, mỗi lần làm 10 câu. Làm đúng được khen, làm sai được động viên.</p>
          <div className="hero-note">Ai được điểm cao nhất sẽ lên đầu bảng xếp hạng của cả lớp!</div>
        </section>
        <LoginPanel />
      </div>
    </main>
  );
}
