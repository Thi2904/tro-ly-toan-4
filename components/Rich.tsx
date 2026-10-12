import { Fragment, type ReactNode } from "react";
import { Figure } from "./Figures";

const FRAC = /\{([^{}/]+)\/([^{}/]+)\}/g;

/** Hiển thị phân số {a/b} dạng xếp chồng và các biểu thức văn bản. */
export function Inline({ text }: { text: string }): ReactNode {
  const out: ReactNode[] = [];
  let last = 0;
  let k = 0;
  for (const m of text.matchAll(FRAC)) {
    const i = m.index ?? 0;
    if (i > last) out.push(<Fragment key={k++}>{text.slice(last, i)}</Fragment>);
    out.push(
      <span className="frac" key={k++} role="math" aria-label={`${m[1].trim()} phần ${m[2].trim()}`}>
        <span className="num">{m[1].trim()}</span>
        <span className="den">{m[2].trim()}</span>
      </span>,
    );
    last = i + m[0].length;
  }
  if (last < text.length) out.push(<Fragment key={k++}>{text.slice(last)}</Fragment>);
  return <>{out}</>;
}

/** Hiển thị đề bài: tách hình minh hoạ [[loại:giá trị]] và các dòng văn bản. */
export function Rich({ text }: { text: string }) {
  const figs: { kind: string; arg: string }[] = [];
  const rest = text.replace(/\[\[([a-z]+):([^\]]*)\]\]\s*/g, (_, kind: string, arg: string) => {
    figs.push({ kind, arg });
    return "";
  });
  return (
    <>
      {figs.map((f, i) => (
        <div className="figure-wrap" key={i}>
          <Figure kind={f.kind} arg={f.arg} />
        </div>
      ))}
      <p className="q-text">
        <Inline text={rest.trim()} />
      </p>
    </>
  );
}
