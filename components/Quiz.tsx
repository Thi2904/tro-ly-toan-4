"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { PublicQuestion } from "@/lib/types";
import { Rich, Inline } from "./Rich";
import { Stars, starsOf, fmt } from "./StudentHome";
import { COMFORT, PRAISE, pick, sfxCorrect, sfxFinish, sfxWrong, speak, unlockAudio } from "@/lib/sound";

type Feedback = { correct: boolean; answer: string; why: string | null; say: string };
type Review = { q: string; correct: string; given: string | null; ok: boolean; why: string | null; unit: string | null };
type Result = { correct: number; total: number; points: number; review: Review[] };

const KEYS = ["A", "B", "C", "D", "E", "F"];

export function Quiz({ lessonId, title, intro, hasQuestions }: { lessonId: number; title: string; intro: string; hasQuestions: number }) {
  const [phase, setPhase] = useState<"intro" | "loading" | "quiz" | "result">("intro");
  const [attemptId, setAttemptId] = useState(0);
  const [qs, setQs] = useState<PublicQuestion[]>([]);
  const [i, setI] = useState(0);
  const [oks, setOks] = useState<(boolean | null)[]>([]);
  const [fb, setFb] = useState<Feedback | null>(null);
  const [picked, setPicked] = useState<string | null>(null);
  const [text, setText] = useState("");
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (phase === "quiz" && qs[i]?.t === "num" && !fb) inputRef.current?.focus();
  }, [phase, i, fb, qs]);

  async function start() {
    unlockAudio();
    setPhase("loading");
    setError("");
    try {
      const r = await fetch("/api/quiz/start", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ lessonId }) });
      const d = await r.json();
      if (!r.ok) throw new Error(d.error || "Không bắt đầu được bài.");
      setAttemptId(d.attemptId);
      setQs(d.questions);
      setOks(Array(d.questions.length).fill(null));
      setI(0);
      setFb(null);
      setPicked(null);
      setText("");
      setResult(null);
      setPhase("quiz");
    } catch (e: any) {
      setError(e.message || "Có lỗi, em thử lại nhé.");
      setPhase("intro");
    }
  }

  async function submit(answer: string) {
    if (busy || fb) return;
    setBusy(true);
    try {
      const r = await fetch("/api/quiz/answer", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ attemptId, index: i, answer }),
      });
      const d = await r.json();
      if (!r.ok) throw new Error(d.error);
      const say = d.correct ? pick(PRAISE) : pick(COMFORT);
      setFb({ correct: d.correct, answer: d.answer, why: d.why, say });
      setOks((o) => o.map((v, k) => (k === i ? d.correct : v)));
      if (d.correct) sfxCorrect();
      else sfxWrong();
      setTimeout(() => speak(say), d.correct ? 350 : 450);
    } catch (e: any) {
      setError(e.message || "Có lỗi, em thử lại nhé.");
    } finally {
      setBusy(false);
    }
  }

  async function next() {
    if (i + 1 < qs.length) {
      setI(i + 1);
      setFb(null);
      setPicked(null);
      setText("");
      return;
    }
    setBusy(true);
    try {
      const r = await fetch("/api/quiz/finish", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ attemptId }) });
      const d = await r.json();
      if (!r.ok) throw new Error(d.error);
      setResult(d);
      setPhase("result");
      sfxFinish();
      const msg = d.points >= 9 ? "Xuất sắc! Em đạt điểm rất cao!" : d.points >= 7 ? "Giỏi lắm! Em làm bài tốt!" : d.points >= 5 ? "Khá lắm! Em cố gắng thêm nhé!" : "Không sao đâu, em làm lại sẽ tốt hơn!";
      setTimeout(() => speak(msg), 700);
    } catch (e: any) {
      setError(e.message || "Có lỗi, em thử lại nhé.");
    } finally {
      setBusy(false);
    }
  }

  /* ----------------------------- intro */
  if (phase === "intro" || phase === "loading") {
    return (
      <div className="quiz">
        <Link className="crumb btn white small" href="/hoc">← Danh sách bài</Link>
        <div className="card" style={{ marginTop: 16 }}>
          <h1 style={{ fontSize: "2rem" }}>Bài {lessonId}. {title}</h1>
          <div className="warn" style={{ marginTop: 16 }}>
            <b>Em cần nhớ: </b>
            <Inline text={intro} />
          </div>
          <p className="note" style={{ marginTop: 14 }}>
            Mỗi lần làm có {Math.min(10, hasQuestions)} câu, chọn ngẫu nhiên trong ngân hàng {hasQuestions} câu của bài này. Làm lại nhiều lần để lấy điểm cao nhất nhé.
          </p>
          {error && <p className="err" role="alert" style={{ marginTop: 12 }}>{error}</p>}
          <div className="row" style={{ marginTop: 18 }}>
            <button className="btn blue" onClick={start} disabled={phase === "loading"}>
              {phase === "loading" ? "Đang chuẩn bị…" : "Bắt đầu làm bài"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ----------------------------- result */
  if (phase === "result" && result) {
    const stars = starsOf(result.points);
    const confetti = result.points >= 7;
    const msg =
      result.points >= 9 ? "Xuất sắc! Em làm gần như hoàn hảo." : result.points >= 7 ? "Giỏi lắm! Em nắm bài rất chắc." : result.points >= 5 ? "Khá lắm! Làm lại một lần nữa sẽ cao hơn." : "Đừng buồn nhé. Em đọc lại phần cần nhớ rồi làm lại, chắc chắn sẽ tiến bộ.";
    const wrong = result.review.filter((r) => !r.ok);
    return (
      <div className="quiz">
        <div className="card result">
          {confetti && (
            <div className="confetti" aria-hidden>
              {Array.from({ length: 36 }, (_, k) => (
                <i
                  key={k}
                  style={{
                    left: `${(k * 97) % 100}%`,
                    background: ["#ffc83d", "#e4474d", "#2f5fd0", "#1f9d62"][k % 4],
                    animationDuration: `${2.2 + ((k * 7) % 10) / 6}s`,
                    animationDelay: `${((k * 13) % 10) / 12}s`,
                  }}
                />
              ))}
            </div>
          )}
          <h2>Bài {lessonId} · {title}</h2>
          <div className="stars-big" aria-label={`${stars} trên 3 sao`}>
            {[0, 1, 2].map((s) => (
              <span key={s} className={s < stars ? "" : "off"}>⭐</span>
            ))}
          </div>
          <div className="score-big">{fmt(result.points)} <span style={{ fontSize: "0.4em" }}>điểm</span></div>
          <p style={{ marginTop: 6, fontWeight: 700 }}>Đúng {result.correct}/{result.total} câu</p>
          <p style={{ marginTop: 8 }}>{msg}</p>
          <div className="row" style={{ justifyContent: "center", marginTop: 20 }}>
            <button className="btn blue" onClick={start}>Làm lại bài này</button>
            <Link className="btn white" href="/hoc">Chọn bài khác</Link>
            <Link className="btn white" href={`/xep-hang?lesson=${lessonId}`}>Xem xếp hạng</Link>
          </div>

          <div className="review">
            <h3>{wrong.length ? `Em cần xem lại ${wrong.length} câu` : "Em trả lời đúng tất cả các câu!"}</h3>
            {wrong.map((r, k) => (
              <div className="rv no" key={k}>
                <div className="q"><Inline text={r.q.replace(/\[\[[^\]]*\]\]\s*/g, "")} /></div>
                <div className="a">
                  Em trả lời: <b>{r.given ? <Inline text={r.given} /> : "(chưa trả lời)"}</b> · Đáp án đúng: <b><Inline text={r.correct} />{r.unit ? ` ${r.unit}` : ""}</b>
                </div>
                {r.why && <div className="a">Gợi ý: <Inline text={r.why} /></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* ----------------------------- quiz */
  const q = qs[i];
  if (!q) return null;
  return (
    <div className="quiz">
      <Link className="crumb btn white small" href="/hoc" aria-label="Thoát bài, về danh sách">← Thoát</Link>
      <div className="card" style={{ marginTop: 16 }}>
        <div className="row" style={{ justifyContent: "space-between" }}>
          <b>Bài {lessonId}</b>
          <b>Câu {i + 1}/{qs.length}</b>
        </div>
        <div className="dots" aria-hidden>
          {qs.map((_, k) => (
            <span key={k} className={`dot ${k === i ? "cur" : oks[k] === true ? "ok" : oks[k] === false ? "no" : ""}`} />
          ))}
        </div>

        <Rich text={q.q} />

        {q.t === "mc" ? (
          <div className="options" role="group" aria-label="Các đáp án">
            {q.options!.map((o, k) => {
              const cls = fb ? (o === fb.answer ? "right" : o === picked ? "wrong" : "") : "";
              return (
                <button
                  key={o}
                  className={`opt ${cls}`}
                  disabled={!!fb || busy}
                  onClick={() => {
                    setPicked(o);
                    void submit(o);
                  }}
                >
                  <span className="key">{KEYS[k]}</span>
                  <span><Inline text={o} /></span>
                </button>
              );
            })}
          </div>
        ) : (
          <form
            className="answer-row"
            onSubmit={(e) => {
              e.preventDefault();
              if (text.trim()) void submit(text.trim());
            }}
          >
            <input
              ref={inputRef}
              className="input"
              inputMode="numeric"
              autoComplete="off"
              value={text}
              onChange={(e) => setText(e.target.value)}
              disabled={!!fb || busy}
              aria-label="Đáp án của em"
              placeholder="Đáp án"
            />
            {q.unit && <span className="unit">{q.unit}</span>}
            {!fb && (
              <button className="btn blue" type="submit" disabled={busy || !text.trim()}>
                Trả lời
              </button>
            )}
          </form>
        )}

        {error && <p className="err" role="alert" style={{ marginTop: 12 }}>{error}</p>}

        {fb && (
          <div className={`feedback pop ${fb.correct ? "good" : "bad"}`} role="status" aria-live="polite">
            <span className="face" aria-hidden>{fb.correct ? "🌟" : "🤗"}</span>
            <span className="say">{fb.say}</span>
            {!fb.correct && (
              <span className="fix">
                Đáp án đúng là: <Inline text={fb.answer} />
                {q.unit ? ` ${q.unit}` : ""}
              </span>
            )}
            {fb.why && <span className="note"><Inline text={fb.why} /></span>}
          </div>
        )}

        {fb && (
          <div className="row" style={{ marginTop: 16, justifyContent: "flex-end" }}>
            <button className="btn blue" onClick={next} disabled={busy} autoFocus>
              {i + 1 < qs.length ? "Câu tiếp theo" : "Xem kết quả"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
