"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Item = {
    id: string;
    image: string;
    title?: string;
};

export default function CoverflowAdjacent({
    items,
    startIndex = 4, // #5 centrada
}: {
    items: Item[];
    startIndex?: number;
}) {
    const [active, setActive] = useState(() =>
        Math.min(Math.max(startIndex, 0), items.length - 1)
    );

    const tfs = useMemo(() => {
        // Ajustes (finos)
        const xStep = 320;     // Aumento espacio para evitar solapamiento (ancho img ~280px)
        const zStep = 150;     // profundidad
        const faceMax = 45;    // Giro fuerte para que "miren" al centro
        const sideOpacity = 0.55;

        return items.map((_, i) => {
            const d = i - active;
            const ad = Math.abs(d);

            // Mostramos solo 7 elementos: centro (1) + 3 izquierda + 3 derecha
            if (ad > 3) {
                return {
                    visible: false,
                    transform: "",
                    opacity: 0,
                    zIndex: 0,
                    clickable: false,
                };
            }

            const x = d * xStep;

            // “pared” curva: cuanto más lejos, más atrás
            const z = -ad * zStep;

            // Giro progresivo:
            // ad=0 -> 0
            // ad=1 -> 10 (muy leve)
            // ad=2 -> 45 (fuerte)
            // ad=3 -> 60 (muy fuerte)
            const rotationVal = ad === 0 ? 0 : ad === 1 ? 10 : 45 + (ad - 2) * 15;
            const ry = d === 0 ? 0 : d > 0 ? -rotationVal : rotationVal;

            // Opacidad: centro 1, adyacentes 0.55, resto baja más
            const opacity =
                ad === 0 ? 1 : ad === 1 ? sideOpacity : Math.max(0.18, 0.55 - ad * 0.12);

            const zIndex = 100 - ad;

            return {
                visible: true,
                transform: `translate3d(${x}px, 0px, ${z}px) rotateY(${ry}deg)`, // Removed trailing translate
                opacity,
                zIndex,
                clickable: true, // Allow clicking all items
            };
        });
    }, [items, active]);

    const select = (i: number) => {
        setActive(i);
    };

    return (
        <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">

            <div className="relative h-[420px] md:h-[540px] overflow-visible">
                {/* Viñeta */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_55%,rgba(0,0,0,0.9)_100%)]" />
                    <div className="absolute left-0 inset-y-0 w-32 bg-gradient-to-r from-black/85 to-transparent" />
                    <div className="absolute right-0 inset-y-0 w-32 bg-gradient-to-l from-black/85 to-transparent" />
                    <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-black/85 to-transparent" />
                    <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-black/75 to-transparent" />
                </div>

                {/* Escena 3D */}
                <div
                    className="absolute inset-0 pointer-events-none" // 👈 Changed: added pointer-events-none
                    style={{
                        perspective: "1500px",
                        perspectiveOrigin: "50% 50%",
                    }}
                >
                    <div
                        className="absolute inset-0"
                        style={{
                            transformStyle: "preserve-3d",
                            transform: "rotateX(0deg)", // Remove skew completely to align heights
                        }}
                    >
                        {items.map((item, i) => {
                            const t = tfs[i];
                            if (!t.visible) return null;

                            return (
                                <div
                                    key={item.id}
                                    className="absolute left-1/2 top-1/2"
                                    style={{
                                        marginLeft: "12px", // Shift RIGHT to close right gap and open left gap
                                        transformStyle: "preserve-3d",
                                        transformOrigin: "center center",
                                        transform: t.transform,
                                        zIndex: t.zIndex,
                                        transition: "transform 420ms cubic-bezier(.2,.85,.2,1)",
                                        cursor: "pointer",
                                        pointerEvents: "auto", // 👈 Ensure this receives clicks
                                    }}
                                    onClick={() => select(i)} // 👈 Handler is here
                                >
                                    <div
                                        className="relative -translate-x-1/2 -translate-y-1/2 w-[235px] h-[335px] md:w-[280px] md:h-[400px] rounded-[26px] overflow-hidden transition-all duration-300"
                                        style={{
                                            opacity: t.opacity,
                                            // pointerEvents and cursor moved up
                                        }}
                                    >
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
                            );
                        })}
                    </div>
                </div>

                {/* Flechas (opcionales, pero útiles) */}
                <button
                    type="button"
                    onClick={() => setActive((a) => Math.max(0, a - 1))}
                    className="absolute left-6 top-1/2 -translate-y-1/2 z-30
                     h-11 w-11 rounded-full bg-white/10 hover:bg-white/20
                     text-white backdrop-blur disabled:opacity-30"
                    disabled={active === 0}
                    aria-label="Anterior"
                >
                    ‹
                </button>
                <button
                    type="button"
                    onClick={() => setActive((a) => Math.min(items.length - 1, a + 1))}
                    className="absolute right-6 top-1/2 -translate-y-1/2 z-30
                     h-11 w-11 rounded-full bg-white/10 hover:bg-white/20
                     text-white backdrop-blur disabled:opacity-30"
                    disabled={active === items.length - 1}
                    aria-label="Siguiente"
                >
                    ›
                </button>
            </div>
        </section>
    );
}
