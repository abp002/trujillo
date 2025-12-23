"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";

type Item = {
    id: string;
    image: string;
    title?: string;
};

export default function ArcCarouselFull({
    items,
}: {
    items: Item[];
}) {
    // 10 imágenes => índice 4 es la #5
    const [active, setActive] = useState(() =>
        Math.min(Math.max(4, 0), items.length - 1)
    );

    const dragStartX = useRef<number | null>(null);

    const prev = () => setActive((a) => Math.max(0, a - 1));
    const next = () => setActive((a) => Math.min(items.length - 1, a + 1));
    const select = (i: number) => setActive(i);

    const onPointerDown = (e: React.PointerEvent) => {
        dragStartX.current = e.clientX;
    };

    const onPointerUp = (e: React.PointerEvent) => {
        if (dragStartX.current == null) return;
        const dx = e.clientX - dragStartX.current;
        dragStartX.current = null;

        if (Math.abs(dx) < 35) return;
        if (dx > 0) prev();
        else next();
    };

    const tfs = useMemo(() => {
        const xStep = 300;      // antes ~235: separa más para que no solapen
        const zStep = 0;      // pared curva
        const faceMax = 40;     // antes ~28: más “mirar al centro”
        const opacityFall = 0.14;

        const maxXForFullTurn = xStep * 2.6; // giro más rápido (antes 3.2)


        return items.map((_, i) => {
            const d = i - active;
            const ad = Math.abs(d);

            const x = d * xStep;

            // Profundidad curva: cuanto más lejos del centro, más atrás
            const z = -ad * zStep;

            // MISMA ALTURA para todas (como en tu ejemplo)
            const y = 0;

            // rotación “mirando al centro”: proporcional a x (suave)
            const norm = Math.max(-1, Math.min(1, x / maxXForFullTurn));
            const ry = -norm * faceMax;
            const rotRatio = Math.abs(ry) / faceMax; // 0..1
            const scaleFix = 1 + rotRatio * 0.03;    // sube un 3% en los laterales


            const scale = 1;
            const opacity = Math.max(0.25, 1 - ad * opacityFall);

            return {
                x,
                y,
                z,
                ry,
                opacity,
                zIndex: 100 - ad,
                clickable: true, // 👈 AÑADE ESTO
            };

        });
    }, [items, active]);

    return (
        <section className="w-full relative">
            <div className="relative h-[420px] md:h-[540px] bg-black overflow-hidden">
                {/* Viñeta y sombras de borde (para que el recorte se vea como el ejemplo) */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_55%,rgba(0,0,0,0.9)_100%)]" />
                    <div className="absolute left-0 inset-y-0 w-44 bg-gradient-to-r from-black/85 to-transparent" />
                    <div className="absolute right-0 inset-y-0 w-44 bg-gradient-to-l from-black/85 to-transparent" />
                    <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-black/85 to-transparent" />
                    <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-black/75 to-transparent" />
                </div>

                <div
                    className="relative h-full"
                    onPointerDown={onPointerDown}
                    onPointerUp={onPointerUp}
                    style={{
                        perspective: "1500px",
                        userSelect: "none",
                        touchAction: "pan-y",
                    }}
                >
                    <div
                        className="absolute inset-0"
                        style={{
                            transformStyle: "preserve-3d",
                            // ligera inclinación como el ejemplo
                            transform: "rotateX(9deg)",
                        }}
                    >
                        {items.map((item, i) => {
                            const t = tfs[i];

                            return (
                                <div
                                    key={item.id}
                                    className="absolute left-1/2 top-1/2"
                                    style={{
                                        transform: "translate(-50%, -50%)", // ✅ centrado siempre igual
                                        opacity: t.opacity,
                                        zIndex: t.zIndex,
                                        transition:
                                            "transform 420ms cubic-bezier(.2,.85,.2,1), opacity 260ms ease",
                                        cursor: t.clickable ? "pointer" : "default",
                                        pointerEvents: t.clickable ? "auto" : "none",
                                    }}
                                    onClick={() => select(i)}
                                >
                                    <div
                                        style={{
                                            transformStyle: "preserve-3d",
                                            transform: `translate3d(${t.x}px, 0px, ${t.z}px) rotateY(${t.ry}deg)`, // ✅ aquí solo el 3D
                                            transition: "transform 420ms cubic-bezier(.2,.85,.2,1)",
                                            transformOrigin: "center center",
                                        }}
                                    >
                                        <div className="relative w-[235px] h-[335px] md:w-[280px] md:h-[400px] rounded-[26px] overflow-hidden">
                                            <Image
                                                src={item.image}
                                                alt={item.title ?? "Poster"}
                                                fill
                                                className="object-cover"
                                                sizes="280px"
                                                priority={i === active}
                                            />
                                        </div>
                                    </div>
                                </div>

                            );
                        })}
                    </div>

                    {/* Controles */}
                    <button
                        type="button"
                        onClick={prev}
                        className="absolute left-6 top-1/2 -translate-y-1/2 z-30
                       h-11 w-11 rounded-full bg-white/10 hover:bg-white/20
                       text-white backdrop-blur"
                        aria-label="Anterior"
                    >
                        ‹
                    </button>
                    <button
                        type="button"
                        onClick={next}
                        className="absolute right-6 top-1/2 -translate-y-1/2 z-30
                       h-11 w-11 rounded-full bg-white/10 hover:bg-white/20
                       text-white backdrop-blur"
                        aria-label="Siguiente"
                    >
                        ›
                    </button>
                </div>
            </div>
        </section>
    );
}
