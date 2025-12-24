"use client";

import Link from "next/link";
import { useEffect } from "react";
import { XMarkIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";

type Variant = "v1" | "v2" | "v3";

type Props = {
    open: boolean;
    onClose: () => void;
    variant?: Variant;
};

const STYLES: Record<Variant, { overlay: string; panel: string; header: string; iconBtn: string; primaryBtn: string; card: string; muted: string; text: string; accent: string }> = {
    v1: {
        overlay: "bg-black/50",
        panel: "bg-[#1c1917]/90 text-white border-l border-white/10 backdrop-blur-xl",
        header: "border-white/10",
        iconBtn: "text-white/70 hover:text-white hover:bg-white/10",
        primaryBtn: "bg-white text-[#1c1917] hover:bg-white/90",
        card: "border-white/10 bg-white/5",
        muted: "text-white/60",
        text: "text-white",
        accent: "text-orange-400",
    },
    v2: {
        overlay: "bg-black/40",
        panel: "bg-white text-neutral-900 border-l border-neutral-200 backdrop-blur-sm",
        header: "border-neutral-200",
        iconBtn: "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100",
        primaryBtn: "bg-neutral-900 text-white hover:bg-neutral-800",
        card: "border-neutral-200 bg-neutral-50",
        muted: "text-neutral-500",
        text: "text-neutral-900",
        accent: "text-violet-600",
    },
    v3: {
        overlay: "bg-black/55",
        panel: "bg-neutral-950/90 text-white border-l border-white/10 backdrop-blur-2xl",
        header: "border-white/10",
        iconBtn: "text-white/70 hover:text-white hover:bg-white/10",
        primaryBtn: "bg-violet-600 text-white hover:bg-violet-500",
        card: "border-white/10 bg-white/5",
        muted: "text-white/60",
        text: "text-white",
        accent: "text-violet-400",
    },
};

export default function CartDrawer({ open, onClose, variant = "v2" }: Props) {
    const s = STYLES[variant];

    useEffect(() => {
        if (!open) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", onKeyDown);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = "";
        };
    }, [open, onClose]);

    return (
        <div className={["fixed inset-0 z-[9999]", open ? "pointer-events-auto" : "pointer-events-none"].join(" ")} aria-hidden={!open}>
            <button
                type="button"
                onClick={onClose}
                className={["absolute inset-0 transition-opacity duration-200", s.overlay, open ? "opacity-100" : "opacity-0"].join(" ")}
                aria-label="Cerrar carrito"
            />

            <aside
                role="dialog"
                aria-modal="true"
                aria-label="Carrito"
                className={[
                    "absolute right-0 top-0 h-full w-full max-w-md shadow-2xl",
                    "transition-transform duration-300 ease-out",
                    s.panel,
                    open ? "translate-x-0" : "translate-x-full",
                ].join(" ")}
            >
                <div className={["h-16 px-5 border-b flex items-center justify-between", s.header].join(" ")}>
                    <div className="flex items-center gap-2">
                        <ShoppingBagIcon className={["h-5 w-5", s.text].join(" ")} />
                        <span className={["text-sm font-semibold", s.text].join(" ")}>Carrito</span>
                        <span className={["text-xs font-semibold", s.accent].join(" ")}>V</span>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className={["p-2 -mr-2 rounded-lg transition", s.iconBtn].join(" ")}
                        aria-label="Cerrar"
                    >
                        <XMarkIcon className="h-5 w-5" />
                    </button>
                </div>

                <div className="p-5 h-[calc(100%-64px-96px)] overflow-auto">
                    <div className={["rounded-xl border p-4", s.card].join(" ")}>
                        <div className="space-y-4">
                            <div className={["flex gap-4 rounded-xl border p-3", s.card].join(" ")}>
                                {/* Imagen */}
                                <div className="relative h-16 w-16 rounded-lg overflow-hidden bg-neutral-200">
                                    <img
                                        src="/img/archivos/img1.png"
                                        alt="PSD Poster Pack"
                                        className="h-full w-full object-cover"
                                    />
                                </div>

                                {/* Info */}
                                <div className="flex-1">
                                    <div className="flex items-start justify-between gap-2">
                                        <p className={["text-sm font-medium leading-tight", s.text].join(" ")}>
                                            PSD Poster Pack
                                        </p>
                                        <button
                                            type="button"
                                            className={["text-xs underline underline-offset-2", s.muted].join(" ")}
                                        >
                                            Eliminar
                                        </button>
                                    </div>

                                    <p className={["text-xs mt-1", s.muted].join(" ")}>
                                        Licencia personal
                                    </p>

                                    <p className={["text-sm font-semibold mt-2", s.text].join(" ")}>
                                        12,00 €
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                <div className={["h-24 px-5 border-t flex flex-col justify-center gap-3", s.header].join(" ")}>
                    <div className="flex items-center justify-between">
                        <span className={["text-sm", s.muted].join(" ")}>Subtotal</span>
                        <span className={["text-sm font-semibold", s.text].join(" ")}>0,00 €</span>
                    </div>

                    <button
                        type="button"
                        className={["w-full rounded-xl text-sm font-semibold py-3 transition disabled:opacity-50 disabled:cursor-not-allowed", s.primaryBtn].join(" ")}
                        disabled
                    >
                        Checkout
                    </button>
                </div>
            </aside>
        </div>
    );
}
