"use client";

/**
 * Âm thanh cho bài làm.
 * - Tiếng "ting"/"ồ" luôn phát được bằng Web Audio (không cần tệp âm thanh).
 * - Lời khen / lời an ủi tiếng Việt đọc bằng giọng đọc của trình duyệt (vi-VN) nếu máy có.
 *   Máy không có giọng tiếng Việt thì chỉ phát hiệu ứng âm thanh.
 */

let ctx: AudioContext | null = null;
let voice: SpeechSynthesisVoice | null | undefined;

export function isMuted(): boolean {
  try {
    return localStorage.getItem("tl-muted") === "1";
  } catch {
    return false;
  }
}

export function setMuted(m: boolean) {
  try {
    localStorage.setItem("tl-muted", m ? "1" : "0");
  } catch {}
  if (m && typeof speechSynthesis !== "undefined") speechSynthesis.cancel();
}

function audio(): AudioContext | null {
  if (typeof window === "undefined") return null;
  try {
    const AC = window.AudioContext || (window as any).webkitAudioContext;
    if (!AC) return null;
    ctx ??= new AC();
    if (ctx.state === "suspended") void ctx.resume();
    return ctx;
  } catch {
    return null;
  }
}

/** Gọi trong sự kiện bấm nút đầu tiên để trình duyệt cho phép phát âm thanh. */
export function unlockAudio() {
  audio();
  findVoice();
}

function note(freq: number, start: number, dur: number, type: OscillatorType = "sine", gain = 0.18) {
  const c = audio();
  if (!c) return;
  const o = c.createOscillator();
  const g = c.createGain();
  o.type = type;
  o.frequency.setValueAtTime(freq, c.currentTime + start);
  g.gain.setValueAtTime(0.0001, c.currentTime + start);
  g.gain.exponentialRampToValueAtTime(gain, c.currentTime + start + 0.02);
  g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + start + dur);
  o.connect(g).connect(c.destination);
  o.start(c.currentTime + start);
  o.stop(c.currentTime + start + dur + 0.05);
}

export function sfxCorrect() {
  if (isMuted()) return;
  note(659.25, 0, 0.16, "triangle");
  note(783.99, 0.1, 0.16, "triangle");
  note(1046.5, 0.2, 0.32, "triangle");
}

export function sfxWrong() {
  if (isMuted()) return;
  // hai nốt đi xuống nhẹ nhàng, nghe như "ồ…"
  note(392, 0, 0.22, "sine", 0.2);
  note(311.13, 0.2, 0.4, "sine", 0.2);
}

export function sfxFinish() {
  if (isMuted()) return;
  [523.25, 659.25, 783.99, 1046.5, 1318.5].forEach((f, i) => note(f, i * 0.11, 0.25, "triangle"));
}

function findVoice(): SpeechSynthesisVoice | null {
  if (voice !== undefined && voice !== null) return voice;
  if (typeof speechSynthesis === "undefined") return (voice = null);
  const list = speechSynthesis.getVoices();
  voice = list.find((v) => v.lang.toLowerCase().startsWith("vi")) ?? null;
  return voice;
}

export function canSpeakVietnamese(): boolean {
  return !!findVoice();
}

export function speak(text: string) {
  if (isMuted() || typeof speechSynthesis === "undefined") return;
  const v = findVoice();
  if (!v) return; // không có giọng tiếng Việt: chỉ dùng hiệu ứng âm thanh
  try {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.voice = v;
    u.lang = v.lang || "vi-VN";
    u.rate = 0.95;
    u.pitch = 1.15;
    speechSynthesis.speak(u);
  } catch {}
}

export const PRAISE = [
  "Giỏi quá! Em làm đúng rồi!",
  "Tuyệt vời! Chính xác!",
  "Xuất sắc! Em tính rất nhanh!",
  "Hoan hô! Đúng rồi nè!",
  "Em thật thông minh!",
  "Chính xác! Cứ phát huy nhé!",
  "Đúng rồi! Em làm tốt lắm!",
  "Quá đỉnh! Thêm một câu đúng!",
];

export const COMFORT = [
  "Không sao đâu, em thử lại câu sau nhé!",
  "Tiếc quá! Em xem lại cách làm nhé.",
  "Sai một chút thôi, em cố lên!",
  "Đừng buồn nha, ai cũng có lúc nhầm mà.",
  "Chưa đúng rồi, nhưng em sắp làm được rồi!",
  "Cố lên em, câu sau sẽ đúng thôi!",
];

export const pick = <T,>(a: T[]): T => a[Math.floor(Math.random() * a.length)];
