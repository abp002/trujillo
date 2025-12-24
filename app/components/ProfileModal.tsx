"use client";

import { Fragment } from "react";
import {
    ShoppingBagIcon,
    Cog6ToothIcon,
    MoonIcon,
    GlobeAltIcon,
    ArrowRightOnRectangleIcon,
    ChevronDownIcon
} from "@heroicons/react/24/outline";

type Variant = 'v1' | 'v2' | 'v3';

interface ProfileModalProps {
    isOpen: boolean;
    onClose: () => void;
    variant: Variant;
}

export default function ProfileModal({ isOpen, onClose, variant }: ProfileModalProps) {
    if (!isOpen) return null;

    // Style configurations based on variant
    const styles = {
        v1: {
            container: "bg-neutral-900 border border-white/10 text-white shadow-2xl shadow-neutral-950",
            header: "border-b border-white/10",
            hover: "hover:bg-white/5",
            textSecondary: "text-neutral-400",
            icon: "text-neutral-400",
            avatarBg: "bg-green-800 text-green-100",
        },
        v2: {
            container: "bg-white border border-neutral-200 text-neutral-900 shadow-xl",
            header: "border-b border-neutral-100",
            hover: "hover:bg-neutral-50",
            textSecondary: "text-neutral-500",
            icon: "text-neutral-500",
            avatarBg: "bg-violet-100 text-violet-700",
        },
        v3: {
            container: "bg-[#020617] border border-cyan-500/20 text-cyan-50 shadow-2xl shadow-cyan-950/50",
            header: "border-b border-cyan-500/10",
            hover: "hover:bg-cyan-500/10",
            textSecondary: "text-cyan-400/70",
            icon: "text-cyan-400",
            avatarBg: "bg-cyan-900/50 text-cyan-200",
        },
    };

    const currentStyle = styles[variant];

    return (
        <>
            {/* Backdrop to close on click outside - invisible */}
            <div className="fixed inset-0 z-[40]" onClick={onClose} />

            <div className={`absolute right-0 top-full mt-2 w-72 rounded-2xl p-2 z-[50] ${currentStyle.container}`}>
                {/* Header: User Info */}
                <div className={`flex items-center gap-4 px-3 py-4 mb-2 ${currentStyle.header}`}>
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center font-bold text-lg ${currentStyle.avatarBg}`}>
                        A
                    </div>
                    <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm truncate">Alejandro</h4>
                        <p className={`text-xs truncate ${currentStyle.textSecondary}`}>abp.0040@gmail.com</p>
                    </div>
                </div>

                {/* Menu Items */}
                <div className="space-y-1">
                    <button className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors ${currentStyle.hover}`}>
                        <ShoppingBagIcon className={`h-5 w-5 ${currentStyle.icon}`} />
                        <span className="flex-1 text-left">Mis pedidos</span>
                    </button>

                    <button className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors ${currentStyle.hover}`}>
                        <Cog6ToothIcon className={`h-5 w-5 ${currentStyle.icon}`} />
                        <span className="flex-1 text-left">Ajustes</span>
                    </button>

                    {/* Idioma - Dropdown simulator */}
                    <div className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm ${currentStyle.hover} cursor-pointer`}>
                        <div className="flex items-center gap-3">
                            <GlobeAltIcon className={`h-5 w-5 ${currentStyle.icon}`} />
                            <span>Idioma</span>
                        </div>
                        <div className={`flex items-center gap-2 text-xs font-medium ${currentStyle.textSecondary}`}>
                            Español
                            <ChevronDownIcon className="h-3 w-3" />
                        </div>
                    </div>

                    {/* Tema - Dropdown simulator */}
                    <div className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm ${currentStyle.hover} cursor-pointer`}>
                        <div className="flex items-center gap-3">
                            <MoonIcon className={`h-5 w-5 ${currentStyle.icon}`} />
                            <span>Tema</span>
                        </div>
                        <div className={`flex items-center gap-2 text-xs font-medium ${currentStyle.textSecondary}`}>
                            {variant === 'v1' ? 'Oscuro' : variant === 'v2' ? 'Claro' : 'Ocean'}
                            <ChevronDownIcon className="h-3 w-3" />
                        </div>
                    </div>

                    <div className={`my-2 border-t ${currentStyle.header}`} />

                    <button className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors ${currentStyle.hover}`}>
                        <ArrowRightOnRectangleIcon className={`h-5 w-5 ${currentStyle.icon}`} />
                        <span className="flex-1 text-left">Cerrar sesión</span>
                    </button>
                </div>
            </div>
        </>
    );
}
