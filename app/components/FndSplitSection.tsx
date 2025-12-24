"use client";

import { useMemo, useState } from "react";

export default function FndSplitSection() {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [inside, setInside] = useState(false);

  const maskStyle = useMemo(() => {
    const r = inside ? 140 : 0;
    return {
      WebkitMaskImage: `radial-gradient(${r}px at ${pos.x}% ${pos.y}%, #000 0%, #000 55%, transparent 70%)`,
      maskImage: `radial-gradient(${r}px at ${pos.x}% ${pos.y}%, #000 0%, #000 55%, transparent 70%)`,
      transition: "mask-image 120ms ease, -webkit-mask-image 120ms ease",
    } as React.CSSProperties;
  }, [pos, inside]);

  return (
    <section className=" relative mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-5 md:grid-cols-2 items-stretch">
        {/* IZQUIERDA */}
      <div className="relative overflow-hidden rounded-3xl  bg-[#070a12]">
  {/* Logo grande de fondo */}
  <div className="pointer-events-none absolute inset-0">
    <img
      src="/img/fnd1.png"
      alt=""
      className="absolute left-[-10%] top-[10%] w-[115%] opacity-[0.50] rotate-[-8deg]"
      draggable={false}
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-black/55 via-black/20 to-transparent" />
  </div>

  {/* Texto */}
  <div className="relative p-10 pb-44">
    <h3 className="text-4xl font-extrabold tracking-tight text-white">
      FND Graphic Desing
    </h3>
    <p className="mt-4 max-w-md text-white/70">
Lorem ipsum dolor sit amet consectetur adipiscing elit sagittis dapibus    </p>
  </div>

  {/* Tevez ANCLADO al fondo del bloque izquierdo */}
  <div
    className="absolute bottom-6 left-6 w-[260px] overflow-hidden rounded-[2.2rem] shadow-2xl"
    onMouseEnter={() => setInside(true)}
    onMouseLeave={() => setInside(false)}
    onMouseMove={(e) => {
      const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setPos({ x, y });
    }}
    style={{ aspectRatio: "4 / 5" }}
  >
    <img
      src="/img/archivos/img8.png"
      alt="Carlos Tevez - versión 1"
      className="absolute inset-0 h-full w-full object-cover"
      draggable={false}
    />
    <img
      src="/img/archivos/img8-2.png"
      alt="Carlos Tevez - versión 2"
      className="absolute inset-0 h-full w-full object-cover"
      style={maskStyle}
      draggable={false}
    />
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
    </div>
    {/* Mano creativa a la derecha */}


  </div>
  <div
  className="
    absolute
    bottom-60
    right-12
    w-[220px]
    pointer-events-none
    drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]
  "
>
  <img
    src="/img/png1.png"
    alt="Creative hand"
    className="w-full h-auto select-none"
    draggable={false}
  />
</div>
</div>

        {/* DERECHA */}
        <div className="overflow-hidden rounded-3xl  bg-black">
          <img
            src="/img/archivos/img2.png"
            alt="Obra destacada"
            className="h-full w-full object-cover"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}
