"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { isMuted, setMuted, unlockAudio } from "@/lib/sound";

export function Header({ role, name }: { role: "student" | "admin"; name?: string }) {
  const router = useRouter();
  const path = usePathname();
  const [muted, setM] = useState(false);

  useEffect(() => setM(isMuted()), []);

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/");
    router.refresh();
  }

  const items =
    role === "admin"
      ? [
          { href: "/admin", label: "Quản lý" },
          { href: "/xep-hang", label: "Bảng xếp hạng" },
        ]
      : [
          { href: "/hoc", label: "Bài học" },
          { href: "/xep-hang", label: "Bảng xếp hạng" },
        ];

  return (
    <header className="topbar">
      <div className="topbar-in">
        <Link href={role === "admin" ? "/admin" : "/hoc"} className="brand">
          <span className="brand-mark">Siêu Sao</span>
          <span>Toán 4</span>
        </Link>
        <nav className="nav" aria-label="Điều hướng chính">
          {items.map((i) => (
            <Link key={i.href} href={i.href} aria-current={path === i.href || (i.href === "/hoc" && path.startsWith("/hoc")) ? "page" : undefined}>
              {i.label}
            </Link>
          ))}
        </nav>
        <div className="who">
          {role === "student" && (
            <button
              className="btn white icon"
              aria-label={muted ? "Bật âm thanh" : "Tắt âm thanh"}
              title={muted ? "Bật âm thanh" : "Tắt âm thanh"}
              onClick={() => {
                const next = !muted;
                setMuted(next);
                setM(next);
                if (!next) unlockAudio();
              }}
            >
              {muted ? "🔇" : "🔊"}
            </button>
          )}
          <span className="name">{role === "admin" ? "Thầy/Cô" : name}</span>
          <button className="btn white small" onClick={logout}>
            Thoát
          </button>
        </div>
      </div>
    </header>
  );
}
