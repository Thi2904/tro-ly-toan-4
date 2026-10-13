"use client";

import Link from "next/link";
import { useState } from "react";
import { LESSON_META, TOPICS } from "@/lib/bank/meta";

export type Prog = { lessonId: number; best: number; attempts: number };

const CHIPS = ["#cfe0ff", "#ffe0e0", "#d6f5e4", "#fff0b5", "#e6dcff"];

export const fmt = (n: number) => n.toLocaleString("vi-VN", { maximumFractionDigits: 1 });
export const starsOf = (p: number) => (p >= 9 ? 3 : p >= 7 ? 2 : p >= 5 ? 1 : 0);

export function Stars({ n }: { n: number }) {
  return (
    <span className="stars" aria-label={`${n} trên 3 sao`}>
      {[0, 1, 2].map((i) => (
        <span key={i} className={i < n ? "" : "off"}>⭐</span>
      ))}
    </span>
  );
}

export function StudentHome({ name, progress, rank, totalStudents }: { name: string; progress: Prog[]; rank: number | null; totalStudents: number }) {
  const [vol, setVol] = useState<1 | 2>(progress.some((p) => p.lessonId > 37) && !progress.some((p) => p.lessonId <= 37) ? 2 : 1);
  const byId = new Map(progress.map((p) => [p.lessonId, p]));
  const doneCount = progress.length;
  const total = progress.reduce((s, p) => s + p.best, 0);
  const first = name.split(" ").slice(-1)[0];

  const next = LESSON_META.find(([id]) => !byId.has(id))?.[0] ?? 1;
  const lessons = LESSON_META.filter(([id]) => (vol === 1 ? id <= 37 : id > 37));
  const topics = [...new Set(lessons.map((l) => l[1]))];

  return (
    <>
      <section className="welcome">
        <div>
          <h1>Chào {first}!</h1>
          <p style={{ marginTop: 8, fontSize: "1.1rem" }}>
            {doneCount === 0 ? "Em hãy bắt đầu từ Bài 1 nhé." : `Em đã làm ${doneCount} trên 73 bài. Làm tiếp để leo lên bảng xếp hạng nào!`}
          </p>
          <div className="row" style={{ marginTop: 16 }}>
            <Link className="btn blue" href={`/hoc/bai/${next}`}>
              {doneCount === 0 ? "Làm Bài 1" : `Làm tiếp Bài ${next}`}
            </Link>
            <Link className="btn white" href="/xep-hang">Xem bảng xếp hạng</Link>
          </div>
        </div>
        <div className="stats" aria-label="Thành tích của em">
          <div className="stat"><b>{fmt(total)}</b><span>Tổng điểm</span></div>
          <div className="stat"><b>{doneCount}/73</b><span>Bài đã làm</span></div>
          <div className="stat"><b>{rank ? `#${rank}` : "–"}</b><span>{rank ? `trên ${totalStudents} bạn` : "Chưa có hạng"}</span></div>
        </div>
      </section>

      <div className="tabs vol-tabs" role="tablist" aria-label="Chọn tập sách">
        <button className="tab" role="tab" aria-selected={vol === 1} onClick={() => setVol(1)}>Tập một (Bài 1–37)</button>
        <button className="tab" role="tab" aria-selected={vol === 2} onClick={() => setVol(2)}>Tập hai (Bài 38–73)</button>
      </div>

      {topics.map((t) => (
        <section className="topic" key={t} style={{ ["--chip" as string]: CHIPS[t % CHIPS.length] }}>
          <div className="topic-head">
            <span className="topic-chip">Chủ đề {t}</span>
            <h2>{TOPICS[t]}</h2>
          </div>
          <div className="lessons">
            {lessons
              .filter((l) => l[1] === t)
              .map(([id, , title]) => {
                const p = byId.get(id);
                return (
                  <Link key={id} href={`/hoc/bai/${id}`} className={`lesson${p ? " done" : ""}`}>
                    <span className="no">{id}</span>
                    <span className="t">{title}</span>
                    <span className="meta">
                      {p ? (
                        <>
                          <Stars n={starsOf(p.best)} /> {fmt(p.best)} điểm · {p.attempts} lần
                        </>
                      ) : (
                        "Chưa làm"
                      )}
                    </span>
                  </Link>
                );
              })}
          </div>
        </section>
      ))}
    </>
  );
}
