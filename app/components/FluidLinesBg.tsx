"use client";

import React from "react";

export default function FluidLinesBg({
    className = "",
    intensity = 1,
}: {
    className?: string;
    intensity?: number; // 0.6..1.4 aprox
}) {
    const stroke1 = `rgba(255, 255, 255, 0.6)`; // White
    const stroke2 = `rgba(34, 211, 238, 0.5)`; // Cyan-400
    const stroke3 = `rgba(186, 230, 253, 0.4)`; // Blue-300

    return (
        <div className={`pointer-events-none absolute inset-0 ${className}`}>
            <svg
                className="h-full w-full"
                viewBox="0 0 1200 800"
                preserveAspectRatio="none"
            >
                <defs>
                    <filter id="softBlur">
                        <feGaussianBlur stdDeviation="0.8" />
                    </filter>

                    <linearGradient id="fadeTop" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(0,0,0,0)" />
                        <stop offset="25%" stopColor="rgba(0,0,0,1)" />
                        <stop offset="80%" stopColor="rgba(0,0,0,1)" />
                        <stop offset="100%" stopColor="rgba(0,0,0,0)" />
                    </linearGradient>

                    <mask id="softMask">
                        <rect width="1200" height="800" fill="url(#fadeTop)" />
                    </mask>
                </defs>

                <g filter="url(#softBlur)" mask="url(#softMask)">
                    {/* Grupo 1: líneas largas */}
                    <g fill="none" strokeWidth="2">
                        <path stroke={stroke1} d="M-40 120 C 180 40, 360 220, 560 140 S 940 40, 1260 160">
                            <animate
                                attributeName="d"
                                dur="10s"
                                repeatCount="indefinite"
                                values="
                M-40 120 C 180 40, 360 220, 560 140 S 940 40, 1260 160;
                M-40 150 C 200 240, 360 60, 560 170 S 940 260, 1260 120;
                M-40 120 C 180 40, 360 220, 560 140 S 940 40, 1260 160
              "
                            />
                        </path>

                        <path stroke={stroke2} d="M-60 210 C 220 90, 360 300, 620 220 S 980 120, 1280 260">
                            <animate
                                attributeName="d"
                                dur="12s"
                                repeatCount="indefinite"
                                values="
                M-60 210 C 220 90, 360 300, 620 220 S 980 120, 1280 260;
                M-60 250 C 220 340, 360 140, 620 260 S 980 360, 1280 210;
                M-60 210 C 220 90, 360 300, 620 220 S 980 120, 1280 260
              "
                            />
                        </path>

                        <path stroke={stroke3} d="M-50 320 C 240 220, 420 420, 640 330 S 980 240, 1260 360">
                            <animate
                                attributeName="d"
                                dur="11s"
                                repeatCount="indefinite"
                                values="
                M-50 320 C 240 220, 420 420, 640 330 S 980 240, 1260 360;
                M-50 350 C 240 440, 420 260, 640 360 S 980 460, 1260 330;
                M-50 320 C 240 220, 420 420, 640 330 S 980 240, 1260 360
              "
                            />
                        </path>
                    </g>

                    {/* Grupo 2: muchas líneas finas (densidad) */}
                    <g fill="none" strokeWidth="1.5" opacity="0.9">
                        {Array.from({ length: 10 }).map((_, i) => {
                            const y = 380 + i * 34;
                            const dur = 9 + (i % 4) * 2;
                            const s = i % 3 === 0 ? stroke1 : i % 3 === 1 ? stroke2 : stroke3;

                            const a = `M-80 ${y} C 220 ${y - 90}, 420 ${y + 70}, 640 ${y - 20} S 980 ${y - 80}, 1280 ${y + 10}`;
                            const b = `M-80 ${y + 18} C 220 ${y + 80}, 420 ${y - 60}, 640 ${y + 10} S 980 ${y + 90}, 1280 ${y - 30}`;

                            return (
                                <path key={i} stroke={s} d={a}>
                                    <animate
                                        attributeName="d"
                                        dur={`${dur}s`}
                                        repeatCount="indefinite"
                                        values={`${a};${b};${a}`}
                                    />
                                </path>
                            );
                        })}
                    </g>

                    {/* Grupo 3: líneas diagonales suaves (parallax falso) */}
                    <g fill="none" strokeWidth="1.2" opacity="0.7">
                        <path stroke={stroke2} d="M-120 640 C 140 540, 420 820, 700 650 S 1080 540, 1320 690">
                            <animate
                                attributeName="d"
                                dur="14s"
                                repeatCount="indefinite"
                                values="
                M-120 640 C 140 540, 420 820, 700 650 S 1080 540, 1320 690;
                M-120 600 C 140 720, 420 540, 700 680 S 1080 760, 1320 620;
                M-120 640 C 140 540, 420 820, 700 650 S 1080 540, 1320 690
              "
                            />
                        </path>
                    </g>
                </g>
            </svg>

            {/* Velo para que nunca moleste */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/0 to-background/5" />
        </div>
    );
}
