"use client";

import { useId, useMemo } from "react";

type Props = {
  className?: string;
  accent?: string;
};

function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export default function GeometricLinesBgV2({
  className = "",
  accent = "124,58,237",
}: Props) {
  const uid = useId();

  const paths = useMemo(() => {
    const rand = mulberry32(42);
    const out: { d: string; dur: number; delay: number; w: number; o: number }[] = [];

    const W = 1200;
    const H = 700;

    for (let i = 0; i < 14; i++) {
      const y = 80 + i * 40 + (rand() - 0.5) * 12;
      const amp = 70 + rand() * 110;
      const phase = rand() * Math.PI * 2;

      const p1x = 0;
      const p1y = y;

      const c1x = W * 0.25 + (rand() - 0.5) * 120;
      const c1y = y - amp * Math.sin(phase) + (rand() - 0.5) * 40;

      const c2x = W * 0.55 + (rand() - 0.5) * 140;
      const c2y = y + amp * Math.cos(phase) + (rand() - 0.5) * 50;

      const p2x = W;
      const p2y = y + (rand() - 0.5) * 10;

      const d = `M ${p1x} ${p1y} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${p2x} ${p2y}`;

      const dur = 18 + rand() * 26;
      const delay = -rand() * dur;
      const w = 0.9 + rand() * 1.2;
      const o = 0.10 + rand() * 0.16;

      out.push({ d, dur, delay, w, o });
    }

    return out;
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 700"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id={`${uid}-grad`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={`rgba(${accent},0.00)`} />
            <stop offset="20%" stopColor={`rgba(${accent},0.20)`} />
            <stop offset="50%" stopColor={`rgba(${accent},0.30)`} />
            <stop offset="80%" stopColor={`rgba(${accent},0.20)`} />
            <stop offset="100%" stopColor={`rgba(${accent},0.00)`} />
          </linearGradient>

          <filter id={`${uid}-soft`}>
            <feGaussianBlur stdDeviation="0.35" />
          </filter>
        </defs>

        <g
          style={{
            transformOrigin: "50% 50%",
            animation: `v2Spin_${uid} 48s linear infinite`,
          }}
        >
          {paths.map((p, i) => (
            <path
              key={i}
              d={p.d}
              fill="none"
              stroke={`url(#${uid}-grad)`}
              strokeWidth={p.w}
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity={p.o}
              filter={`url(#${uid}-soft)`}
              style={{
                strokeDasharray: "14 18 160 22",
                animation: `v2Dash_${uid} ${p.dur}s linear infinite`,
                animationDelay: `${p.delay}s`,
              }}
            />
          ))}

          <g
            style={{
              transformOrigin: "50% 50%",
              animation: `v2Wobble_${uid} 9s ease-in-out infinite`,
            }}
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <path
                key={`poly-${i}`}
                d={`M 600 140
                    L 720 240
                    L 680 390
                    L 520 390
                    L 480 240 Z`}
                fill="none"
                stroke={`rgba(${accent},0.10)`}
                strokeWidth="1"
                strokeLinejoin="round"
                style={{
                  transformOrigin: "50% 50%",
                  transform: `rotate(${i * 18}deg) scale(${0.70 + i * 0.03})`,
                  animation: `v2Poly_${uid} ${14 + i * 1.3}s ease-in-out infinite`,
                  animationDelay: `${-i * 1.2}s`,
                  strokeDasharray: "6 18",
                }}
              />
            ))}
          </g>
        </g>

        <rect x="0" y="0" width="1200" height="700" fill="white" opacity="0.04" />
      </svg>

      <style>{`
        @keyframes v2Dash_${uid} {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -900; }
        }
        @keyframes v2Spin_${uid} {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes v2Wobble_${uid} {
          0%,100% { transform: rotate(-1.2deg) scale(1); }
          50% { transform: rotate(1.2deg) scale(1.01); }
        }
        @keyframes v2Poly_${uid} {
          0%,100% { opacity: 0.10; }
          50% { opacity: 0.22; }
        }
      `}</style>
    </div>
  );
}
