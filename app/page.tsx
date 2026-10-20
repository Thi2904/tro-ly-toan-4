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
            Trở thành <span className="scribble">Siêu Sao Toán 4</span> sau từng bài làm
          </h1>
          <p>Ôn tập kiến thức cơ bản và nâng cao các dạng bài trong sách Toán 4. Mỗi lần làm 10 câu. Sau phần ôn kiến thức cơ bản, có phần thử thách. Làm đúng được khen, làm sai được động viên, điểm cao nhất lên đầu bảng xếp hạng.</p>
          <div className="hero-note">Mỗi bài làm xong là thêm sao, thêm điểm cho em!</div>
        </section>
        <LoginPanel />
      </div>
    </main>
  );
}
