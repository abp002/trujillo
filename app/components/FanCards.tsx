"use client";

import { useMemo, useState } from "react";

type Item = {
  id: string;
  image: string;
  alt?: string;
};

export default function FanHoverCards({
  items,
  cardW = 250,
  cardH = 360,
}: {
  items: Item[];
  cardW?: number;
  cardH?: number;
}) {
  const [activeId, setActiveId] = useState<string | null>(null);

  const positions = useMemo(() => {
    const n = items.length;

    // Ajusta estos para clavar el look
    const maxRotate = 30;     // inclinación laterales
    const spreadX = 390;      // separación horizontal
    const arcLift = 120;       // cuánto suben los lados (curvatura)
    const sideScale = 0.92;   // tamaño laterales

    return items.map((it, i) => {
      const t = n === 1 ? 0 : i / (n - 1);     // 0..1
      const xN = t * 2 - 1;                    // -1..1

      const rotate = xN * maxRotate;

const curve = 2.2; // 1.4 suave | 1.8 fuerte | 2.2 muy fuerte
const y = Math.pow(Math.abs(xN), curve) * arcLift;



      // separación horizontal
      const x = xN * spreadX;

      // centro un pelín mayor
      const scale = 1 - (Math.abs(xN) * (1 - sideScale));

      // zIndex: centro por encima
      const zIndex = 100 - Math.round(Math.abs(xN) * 50);

      return { id: it.id, x, y, rotate, scale, zIndex };
    });
  }, [items]);

  return (
    <div className="relative mx-auto w-full max-w-6xl" style={{ height: cardH + 120 }}>
      {items.map((it) => {
        const p = positions.find((pp) => pp.id === it.id)!;
        const isActive = activeId === it.id;

        // Hover: se eleva, se pone más frontal, y se acerca al centro un pelín
        const hoverLift = -26;
        const hoverScale = 1.06;

        const transform = isActive
          ? `translate(-50%, -50%) translate(${p.x}px, ${p.y + hoverLift}px) rotate(${p.rotate * 0.25}deg) scale(${p.scale * hoverScale})`
          : `translate(-50%, -50%) translate(${p.x}px, ${p.y}px) rotate(${p.rotate}deg) scale(${p.scale})`;

        return (
          <div
            key={it.id}
            className="absolute left-1/2 top-1/2"
            style={{
              width: cardW,
              height: cardH,
              transform,
              zIndex: isActive ? 999 : p.zIndex,
              transition: "transform 260ms ease, z-index 0ms linear",
            }}
            onMouseEnter={() => setActiveId(it.id)}
            onMouseLeave={() => setActiveId(null)}
          >
            <div className="relative h-full w-full overflow-hidden rounded-[2.7rem] shadow-2xl">
              <img
                src={it.image}
                alt={it.alt ?? "card"}
                className="h-full w-full object-cover"
                draggable={false}
              />

              {/* Sombra para profundidad (se reduce en hover) */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.35), rgba(0,0,0,0) 45%)",
                  opacity: isActive ? 0.35 : 0.7,
                  transition: "opacity 260ms ease",
                }}
              />

              {/* borde suave al hover */}
              <div
                className="pointer-events-none absolute inset-0 ring-1"
                style={{
                  color: "transparent",
                  boxShadow: isActive ? "0 0 0 1px rgba(255,255,255,0.25) inset" : "0 0 0 1px rgba(0,0,0,0.08) inset",
                  transition: "box-shadow 260ms ease",
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
