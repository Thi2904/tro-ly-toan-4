import type { ReactNode } from "react";

const INK = "var(--ink)";
const RED = "var(--red)";
const BLUE = "var(--blue)";
const SUN = "var(--sun)";

function Svg({ w, h, label, children }: { w: number; h: number; label: string; children: ReactNode }) {
  return (
    <svg viewBox={`0 0 ${w} ${h}`} role="img" aria-label={label} className="figure" style={{ maxWidth: w }}>
      {children}
    </svg>
  );
}

const rad = (d: number) => (d * Math.PI) / 180;

export function AngleFigure({ deg }: { deg: number }) {
  const cx = 100, cy = 105, len = 78, r = 26;
  const ex = cx + len * Math.cos(rad(deg));
  const ey = cy - len * Math.sin(rad(deg));
  const ax = cx + r * Math.cos(rad(deg));
  const ay = cy - r * Math.sin(rad(deg));
  return (
    <Svg w={200} h={125} label="Hình một góc">
      <line x1={cx} y1={cy} x2={cx + len} y2={cy} stroke={INK} strokeWidth={3} strokeLinecap="round" />
      <line x1={cx} y1={cy} x2={ex} y2={ey} stroke={INK} strokeWidth={3} strokeLinecap="round" />
      {deg === 90 ? (
        <path d={`M ${cx + 16} ${cy} V ${cy - 16} H ${cx}`} fill="none" stroke={RED} strokeWidth={2.5} />
      ) : (
        <path d={`M ${cx + r} ${cy} A ${r} ${r} 0 0 0 ${ax} ${ay}`} fill="none" stroke={RED} strokeWidth={2.5} />
      )}
      <circle cx={cx} cy={cy} r={4} fill={BLUE} />
    </Svg>
  );
}

export function ClockFigure({ h, m }: { h: number; m: number }) {
  const cx = 70, cy = 70;
  const hand = (deg: number, len: number, w: number, color: string) => (
    <line
      x1={cx}
      y1={cy}
      x2={cx + len * Math.sin(rad(deg))}
      y2={cy - len * Math.cos(rad(deg))}
      stroke={color}
      strokeWidth={w}
      strokeLinecap="round"
    />
  );
  return (
    <Svg w={140} h={140} label={`Đồng hồ chỉ ${h} giờ${m ? ` ${m} phút` : ""}`}>
      <circle cx={cx} cy={cy} r={64} fill="#fffdf6" stroke={INK} strokeWidth={4} />
      {Array.from({ length: 12 }, (_, i) => {
        const a = rad((i + 1) * 30);
        return (
          <text key={i} x={cx + 50 * Math.sin(a)} y={cy - 50 * Math.cos(a) + 5} fontSize={14} fontWeight={700} textAnchor="middle" fill={INK}>
            {i + 1}
          </text>
        );
      })}
      {hand((h % 12) * 30 + m * 0.5, 34, 5, INK)}
      {hand(m * 6, 50, 3, RED)}
      <circle cx={cx} cy={cy} r={4.5} fill={INK} />
    </Svg>
  );
}

export function LinesFigure({ kind }: { kind: string }) {
  if (kind === "parallel") {
    return (
      <Svg w={200} h={110} label="Hai đường thẳng song song">
        <line x1={14} y1={36} x2={186} y2={36} stroke={INK} strokeWidth={3.5} strokeLinecap="round" />
        <line x1={14} y1={76} x2={186} y2={76} stroke={RED} strokeWidth={3.5} strokeLinecap="round" />
      </Svg>
    );
  }
  if (kind === "perp") {
    return (
      <Svg w={200} h={130} label="Hai đường thẳng vuông góc">
        <line x1={20} y1={78} x2={180} y2={78} stroke={INK} strokeWidth={3.5} strokeLinecap="round" />
        <line x1={100} y1={10} x2={100} y2={120} stroke={RED} strokeWidth={3.5} strokeLinecap="round" />
        <path d="M 100 62 H 116 V 78" fill="none" stroke={BLUE} strokeWidth={2.5} transform="translate(0 0)" />
      </Svg>
    );
  }
  return (
    <Svg w={200} h={130} label="Hai đường thẳng cắt nhau">
      <line x1={24} y1={100} x2={176} y2={34} stroke={INK} strokeWidth={3.5} strokeLinecap="round" />
      <line x1={46} y1={22} x2={150} y2={116} stroke={RED} strokeWidth={3.5} strokeLinecap="round" />
    </Svg>
  );
}

export function ShapeFigure({ kind }: { kind: string }) {
  const pts: Record<string, string> = {
    parallelogram: "50,95 150,95 180,35 80,35",
    rhombus: "100,10 160,60 100,110 40,60",
    rectangle: "30,30 170,30 170,95 30,95",
  };
  const names: Record<string, string> = { parallelogram: "hình bình hành", rhombus: "hình thoi", rectangle: "hình chữ nhật" };
  return (
    <Svg w={200} h={120} label={`Hình ${names[kind] ?? ""}`}>
      <polygon points={pts[kind] ?? pts.rectangle} fill="var(--sun-soft)" stroke={INK} strokeWidth={3.5} strokeLinejoin="round" />
    </Svg>
  );
}

export function FracFigure({ a, b }: { a: number; b: number }) {
  const cx = 60, cy = 60, r = 52;
  const slices = Array.from({ length: b }, (_, i) => {
    const a0 = rad((i * 360) / b - 90);
    const a1 = rad(((i + 1) * 360) / b - 90);
    const d = `M ${cx} ${cy} L ${cx + r * Math.cos(a0)} ${cy + r * Math.sin(a0)} A ${r} ${r} 0 ${360 / b > 180 ? 1 : 0} 1 ${cx + r * Math.cos(a1)} ${cy + r * Math.sin(a1)} Z`;
    return <path key={i} d={d} fill={i < a ? "var(--blue-soft)" : "#fff"} stroke={INK} strokeWidth={2.5} strokeLinejoin="round" />;
  });
  return (
    <Svg w={120} h={120} label={`Hình tròn chia ${b} phần bằng nhau, tô màu ${a} phần`}>
      {slices}
    </Svg>
  );
}

function niceStep(max: number): number {
  const steps = [1, 2, 5, 10, 15, 20, 25, 30, 50, 100, 200, 250, 500];
  return steps.find((s) => max / s <= 6) ?? 500;
}

export function BarFigure({ title, items, unit }: { title: string; items: { label: string; value: number }[]; unit: string }) {
  const W = 320, H = 190, left = 36, top = 26, bottom = 32, right = 10;
  const max = Math.max(...items.map((i) => i.value), 1);
  const step = niceStep(max);
  const top_v = Math.ceil(max / step) * step;
  const ph = H - top - bottom;
  const pw = W - left - right;
  const slot = pw / items.length;
  const bw = Math.min(46, slot * 0.6);
  const ticks: number[] = [];
  for (let v = 0; v <= top_v; v += step) ticks.push(v);
  const y = (v: number) => top + ph - (v / top_v) * ph;
  return (
    <Svg w={W} h={H} label={`Biểu đồ cột: ${title}`}>
      <text x={W / 2} y={14} textAnchor="middle" fontSize={11.5} fontWeight={700} fill={INK}>
        {title}
      </text>
      <text x={4} y={top - 6} fontSize={9.5} fill="var(--muted)">
        ({unit})
      </text>
      {ticks.map((v) => (
        <g key={v}>
          <line x1={left} x2={W - right} y1={y(v)} y2={y(v)} stroke="var(--rule)" strokeWidth={1} />
          <text x={left - 5} y={y(v) + 3.5} textAnchor="end" fontSize={9.5} fill="var(--muted)">
            {v}
          </text>
        </g>
      ))}
      {items.map((it, i) => {
        const x = left + slot * i + (slot - bw) / 2;
        return (
          <g key={it.label}>
            <rect x={x} y={y(it.value)} width={bw} height={Math.max(0, y(0) - y(it.value))} rx={3} fill={BLUE} stroke={INK} strokeWidth={1.8} />
            <text x={x + bw / 2} y={y(it.value) - 4} textAnchor="middle" fontSize={10.5} fontWeight={700} fill={INK}>
              {it.value}
            </text>
            <text x={x + bw / 2} y={H - 14} textAnchor="middle" fontSize={slot < 56 ? 9 : 10.5} fill={INK}>
              {it.label.length > 10 ? it.label.replace(/^(Thứ|Tháng|Đội)\s/, "$1 ") : it.label}
            </text>
          </g>
        );
      })}
    </Svg>
  );
}

export function Figure({ kind, arg }: { kind: string; arg: string }): ReactNode {
  switch (kind) {
    case "angle":
      return <AngleFigure deg={Number(arg)} />;
    case "clock": {
      const [h, m] = arg.split(":").map(Number);
      return <ClockFigure h={h} m={m || 0} />;
    }
    case "lines":
      return <LinesFigure kind={arg} />;
    case "shape":
      return <ShapeFigure kind={arg} />;
    case "frac": {
      const [a, b] = arg.split("/").map(Number);
      return <FracFigure a={a} b={b} />;
    }
    case "bar": {
      const [title, rest, unit] = arg.split("|");
      const items = (rest ?? "").split(",").map((p) => {
        const [label, v] = p.split("=");
        return { label: label.trim(), value: Number(v) };
      });
      return <BarFigure title={title} items={items} unit={unit ?? ""} />;
    }
    default:
      return null;
  }
}
