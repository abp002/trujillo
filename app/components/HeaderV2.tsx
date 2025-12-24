"use client";

import { useState } from "react";
import Link from "next/link";
import {
    ChevronDownIcon,
    ShoppingBagIcon,
    UserIcon,
} from "@heroicons/react/24/outline";

import ProfileModal from "./ProfileModal";
import CartDrawer from "./CartDrawer";

export default function HeaderV2() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-[1000]">
            <div className="bg-white/80 backdrop-blur-sm border-b border-neutral-200">
                <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/v2"
                        className="text-lg font-semibold tracking-tight text-neutral-900"
                    >
                        FTN<span className="text-violet-600">.</span>
                    </Link>

                    {/* Nav */}
                    <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
                        {[
                            { href: "/v2", label: "Home" },
                            { href: "/v2/shop", label: "Shop" },
                            { href: "/v2/contact", label: "Contact" },
                        ].map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="relative text-neutral-600 hover:text-neutral-900 transition"
                            >
                                {item.label}
                                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-violet-600 transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                        {/* Version selector */}
                        <div className="relative group">
                            <button
                                className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-neutral-500 hover:text-neutral-900 transition"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                V2
                                <ChevronDownIcon className="h-3 w-3" />
                            </button>

                            <div className="absolute right-0 top-full mt-4 w-32 bg-white border border-neutral-200 rounded-xl shadow-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                <div className="flex flex-col py-1">
                                    <Link href="/" className="px-4 py-2 text-sm text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 text-left">All Demos</Link>
                                    <Link href="/v1" className="px-4 py-2 text-sm text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 text-left">Go to V1</Link>
                                    <Link href="/v3" className="px-4 py-2 text-sm text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 text-left">Go to V3</Link>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <button
                                onClick={() => setProfileOpen(!profileOpen)}
                                className="rounded-full bg-neutral-100 p-2 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900 transition"
                            >
                                <UserIcon className="h-5 w-5" />
                            </button>
                            <ProfileModal isOpen={profileOpen} onClose={() => setProfileOpen(false)} variant="v2" />
                        </div>

                        <button
                            type="button"
                            onClick={() => setCartOpen(true)}
                            className="rounded-full bg-neutral-100 p-2 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900 transition"
                            aria-label="Abrir carrito"
                        >
                            <ShoppingBagIcon className="h-5 w-5" />
                        </button>
                    </div>
                </div>

            </div>
            <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} variant="v2" />
        </header>
    );
}
