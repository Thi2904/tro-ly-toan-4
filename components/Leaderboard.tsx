"use client";

import { useEffect, useState } from "react";
import { LESSON_META } from "@/lib/bank/meta";
import { fmt } from "./StudentHome";

type Row = { studentId: number; name: string; points: number; lessons: number; seconds?: number };

const MEDAL = ["🥇", "🥈", "🥉"];

function mmss(s?: number) {
  if (s === undefined) return "";
  return `${Math.floor(s / 60)} phút ${s % 60} giây`;
}

export function Leaderboard({ initialLesson }: { initialLesson: number }) {
  const [lesson, setLesson] = useState(initialLesson);
  const [rows, setRows] = useState<Row[] | null>(null);
  const [me, setMe] = useState<number | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let alive = true;
    setRows(null);
    setError("");
    fetch(`/api/leaderboard${lesson ? `?lesson=${lesson}` : ""}`)
      .then(async (r) => {
        const d = await r.json();
        if (!r.ok) throw new Error(d.error);
        return d;
      })
      .then((d) => {
        if (!alive) return;
        setRows(d.rows);
        setMe(d.me);
      })
      .catch((e) => alive && setError(e.message || "Không tải được bảng xếp hạng."));
    return () => {
      alive = false;
    };
  }, [lesson]);

  const myIdx = rows?.findIndex((r) => r.studentId === me) ?? -1;

  return (
    <div style={{ paddingTop: 30 }}>
      <h1>Bảng xếp hạng</h1>
      <p style={{ marginTop: 8 }}>
        {lesson
          ? "Xếp theo điểm cao nhất của từng bạn ở bài này; bằng điểm thì ai làm nhanh hơn đứng trên."
          : "Tổng điểm là cộng điểm cao nhất của mỗi bài đã làm. Làm nhiều bài và làm đúng thì lên hạng cao."}
      </p>

      <div className="row" style={{ margin: "18px 0" }}>
        <label htmlFor="lesson" className="label">Xem theo</label>
        <select id="lesson" className="select" style={{ maxWidth: 420 }} value={lesson} onChange={(e) => setLesson(Number(e.target.value))}>
          <option value={0}>Tất cả các bài (tổng điểm)</option>
          {LESSON_META.map(([id, , t]) => (
            <option key={id} value={id}>
              Bài {id}. {t}
            </option>
          ))}
        </select>
      </div>

      {me !== null && rows && (
        <p className="note" style={{ marginBottom: 6 }}>
          {myIdx >= 0 ? `Em đang đứng thứ ${myIdx + 1}.` : "Em chưa có tên trong bảng này. Hãy làm bài để lên bảng nhé!"}
        </p>
      )}

      {error && <p className="err">{error}</p>}
      {!rows && !error && <p className="empty">Đang tải bảng xếp hạng…</p>}
      {rows && rows.length === 0 && <p className="empty">Chưa có ai làm bài. Bạn nào làm trước sẽ đứng đầu bảng!</p>}
      {rows && rows.length > 0 && (
        <table className="board">
          <thead>
            <tr>
              <th>Hạng</th>
              <th>Học sinh</th>
              <th>{lesson ? "Điểm" : "Tổng điểm"}</th>
              <th>{lesson ? "Thời gian làm" : "Số bài đã làm"}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.studentId} className={`${r.studentId === me ? "me" : ""} ${i === 0 ? "top1" : ""}`}>
                <td>{MEDAL[i] ?? i + 1}</td>
                <td>
                  {r.name}
                  {r.studentId === me && <span className="pill mid" style={{ marginLeft: 8 }}>Em</span>}
                </td>
                <td className="pts">{fmt(r.points)}</td>
                <td>{lesson ? mmss(r.seconds) : `${r.lessons} bài`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
