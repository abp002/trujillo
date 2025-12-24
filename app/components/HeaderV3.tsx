"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDownIcon, ShoppingBagIcon, UserIcon } from "@heroicons/react/24/outline";

import CartDrawer from "./CartDrawer";
import ProfileModal from "./ProfileModal";

export default function HeaderV3() {
    const [cartOpen, setCartOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-[1000]">
            <div className="border-b border-white/10 bg-[#020617]/80 backdrop-blur-md">
                <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
                    {/* Logo FND */}
                    <Link href="/v3" className="text-sm tracking-[0.25em] uppercase text-white/80 hover:text-white transition-colors">
                        FND
                    </Link>

                    {/* Nav V3 */}
                    <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
                        <Link href="/v3/shop" className="hover:text-cyan-400 transition-colors">Shop</Link>
                        <Link href="/v3/#work" className="hover:text-cyan-400 transition-colors">Works</Link>
                        <Link href="/v3/contact" className="hover:text-cyan-400 transition-colors">Contact</Link>
                    </nav>

                    <div className="flex items-center gap-4">
                        <div className="relative group">
                            <button className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-white/50 hover:text-white transition">
                                V3
                                <ChevronDownIcon className="h-3 w-3" />
                            </button>
                            <div className="absolute right-0 top-full mt-4 w-32 bg-[#020617] border border-white/10 rounded-xl shadow-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                <div className="flex flex-col py-1">
                                    <Link href="/" className="px-4 py-2 text-sm text-neutral-400 hover:text-white hover:bg-white/5 text-left">All Demos</Link>
                                    <Link href="/v1" className="px-4 py-2 text-sm text-white hover:bg-white/5 text-left">Go to V1</Link>
                                    <Link href="/v2" className="px-4 py-2 text-sm text-white hover:bg-white/5 text-left">Go to V2</Link>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <button
                                onClick={() => setProfileOpen(!profileOpen)}
                                className="rounded-full bg-white/10 p-2 text-white/80 hover:bg-white/20 hover:text-white transition"
                            >
                                <UserIcon className="h-5 w-5" />
                            </button>
                            <ProfileModal isOpen={profileOpen} onClose={() => setProfileOpen(false)} variant="v3" />
                        </div>

                        <button
                            onClick={() => setCartOpen(true)}
                            className="rounded-full bg-white/10 p-2 text-white/80 hover:bg-white/20 hover:text-white transition"
                        >
                            <ShoppingBagIcon className="h-5 w-5" />
                        </button>
                    </div>
                </div>

            </div>
            <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} variant="v3" />
        </header>
    );
}

