"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDownIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";

export default function HeaderV2() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-5 left-0 right-0 z-50">
            <div className="mx-auto max-w-6xl px-6 py-3 flex items-center justify-between rounded-2xl border border-white/10 bg-[#1c1917]/80 backdrop-blur-md shadow-lg">
                {/* Logo V2 */}
                <Link href="/v2" className="text-lg font-semibold tracking-tight text-white">
                    FTN<span className="text-orange-400">.</span>
                </Link>

                {/* Nav V2 */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
                    <Link href="/v2" className="hover:text-white transition-colors">Home</Link>
                    <Link href="/v2/shop" className="hover:text-white transition-colors">Shop</Link>
                    <Link href="/v2/contact" className="hover:text-white transition-colors">Contact</Link>
                </nav>

                <div className="flex items-center gap-4">
                    <div className="relative group">
                        <button className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-white/50 hover:text-white transition">
                            V2
                            <ChevronDownIcon className="h-3 w-3" />
                        </button>
                        <div className="absolute right-0 top-full mt-4 w-32 bg-[#1c1917] border border-white/10 rounded-xl shadow-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                            <div className="flex flex-col py-1">
                                <Link href="/" className="px-4 py-2 text-sm text-neutral-400 hover:text-white hover:bg-white/5 text-left">All Demos</Link>
                                <Link href="/v1" className="px-4 py-2 text-sm text-white hover:bg-white/5 text-left">Go to V1</Link>
                                <Link href="/v3" className="px-4 py-2 text-sm text-white hover:bg-white/5 text-left">Go to V3</Link>
                            </div>
                        </div>
                    </div>

                    <Link href="/v2/shop" className="rounded-full bg-white/10 p-2 text-white/80 hover:bg-white/20 hover:text-white transition">
                        <ShoppingBagIcon className="h-5 w-5" />
                    </Link>
                </div>
            </div>
        </header>
    );
}
