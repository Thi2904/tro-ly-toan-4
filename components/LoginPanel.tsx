"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { unlockAudio } from "@/lib/sound";

const MONTHS = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"];

export function LoginPanel() {
  const router = useRouter();
  const [mode, setMode] = useState<"student" | "admin">("student");
  const [name, setName] = useState("");
  const [d, setD] = useState("");
  const [m, setM] = useState("");
  const [y, setY] = useState("");
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const thisYear = new Date().getFullYear();
  const years = Array.from({ length: 14 }, (_, i) => thisYear - 6 - i);

  async function post(url: string, payload: unknown) {
    setBusy(true);
    setError("");
    try {
      const r = await fetch(url, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(payload) });
      const data = await r.json().catch(() => ({}));
      if (!r.ok) {
        setError(data.error || "Có lỗi xảy ra, em thử lại nhé.");
        return false;
      }
      return true;
    } catch {
      setError("Không kết nối được máy chủ. Em kiểm tra mạng rồi thử lại nhé.");
      return false;
    } finally {
      setBusy(false);
    }
  }

  async function submitStudent(e: React.FormEvent) {
    e.preventDefault();
    unlockAudio();
    if (!d || !m || !y) return setError("Em chọn đủ ngày, tháng, năm sinh nhé.");
    const dob = `${y}-${m.padStart(2, "0")}-${d.padStart(2, "0")}`;
    if (await post("/api/auth/student", { name, dob })) {
      router.push("/hoc");
      router.refresh();
    }
  }

  async function submitAdmin(e: React.FormEvent) {
    e.preventDefault();
    if (await post("/api/auth/admin", { username: user, password: pass })) {
      router.push("/admin");
      router.refresh();
    }
  }

  return (
    <div className="card">
      <div className="tabs" role="tablist" aria-label="Chọn kiểu đăng nhập">
        <button className="tab" role="tab" aria-selected={mode === "student"} onClick={() => { setMode("student"); setError(""); }}>
          Em là học sinh
        </button>
        <button className="tab" role="tab" aria-selected={mode === "admin"} onClick={() => { setMode("admin"); setError(""); }}>
          Giáo viên
        </button>
      </div>

      {mode === "student" ? (
        <form onSubmit={submitStudent} className="field" style={{ gap: 16 }}>
          <div className="field">
            <label htmlFor="name">Họ và tên của em</label>
            <input id="name" className="input" value={name} onChange={(e) => setName(e.target.value)} autoComplete="off" placeholder="Ví dụ: Nguyễn Minh An" />
          </div>
          <div className="field">
            <span className="label" id="dob-l">Ngày sinh của em</span>
            <div className="dob" role="group" aria-labelledby="dob-l">
              <select className="select" aria-label="Ngày" value={d} onChange={(e) => setD(e.target.value)}>
                <option value="">Ngày</option>
                {Array.from({ length: 31 }, (_, i) => (
                  <option key={i + 1} value={String(i + 1)}>{i + 1}</option>
                ))}
              </select>
              <select className="select" aria-label="Tháng" value={m} onChange={(e) => setM(e.target.value)}>
                <option value="">Tháng</option>
                {MONTHS.map((t, i) => (
                  <option key={t} value={String(i + 1)}>{t}</option>
                ))}
              </select>
              <select className="select" aria-label="Năm" value={y} onChange={(e) => setY(e.target.value)}>
                <option value="">Năm</option>
                {years.map((yy) => (
                  <option key={yy} value={String(yy)}>{yy}</option>
                ))}
              </select>
            </div>
          </div>
          {error && <p className="err" role="alert">{error}</p>}
          <button className="btn blue" type="submit" disabled={busy}>{busy ? "Đang vào lớp…" : "Vào học thôi"}</button>
          <p className="note">Lần đầu, hệ thống tự tạo tài khoản cho em. Những lần sau em chỉ cần nhập đúng tên và ngày sinh là vào lại được, điểm cũ vẫn còn nguyên.</p>
        </form>
      ) : (
        <form onSubmit={submitAdmin} className="field" style={{ gap: 16 }}>
          <div className="field">
            <label htmlFor="user">Tên đăng nhập</label>
            <input id="user" className="input" value={user} onChange={(e) => setUser(e.target.value)} autoComplete="username" />
          </div>
          <div className="field">
            <label htmlFor="pass">Mật khẩu</label>
            <input id="pass" className="input" type="password" value={pass} onChange={(e) => setPass(e.target.value)} autoComplete="current-password" />
          </div>
          {error && <p className="err" role="alert">{error}</p>}
          <button className="btn blue" type="submit" disabled={busy}>{busy ? "Đang kiểm tra…" : "Đăng nhập quản lý"}</button>
        </form>
      )}
    </div>
  );
}
