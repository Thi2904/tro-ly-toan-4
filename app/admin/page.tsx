import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import { Header } from "@/components/Header";
import { AdminDashboard } from "@/components/AdminDashboard";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const s = await getSession();
  if (!s) redirect("/");
  if (s.role !== "admin") redirect("/hoc");

  return (
    <>
      <Header role="admin" />
      <main className="wrap">
        <AdminDashboard />
      </main>
    </>
  );
}
