"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDownIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";

export default function Header({ variant }: { variant?: "v1" | "v2" | "v3" }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // If no variant, default to v1 or handling? 
    // Actually, distinct layouts might use different headers ideally, but generic is fine.
    const basePath = variant ? `/${variant}` : "";

    const navLinks = [
        { label: "Home", href: `${basePath}/` },
        { label: "Shop", href: `${basePath}/shop` },
        { label: "Contact", href: `${basePath}/contact` },
    ];

    return (
        <header className="fixed top-5 left-0 right-0 z-50">
            <div
                className="mx-auto max-w-6xl px-6 py-3
                   flex items-center justify-between
                   rounded-2xl border border-white/10
                   bg-neutral-900/80 backdrop-blur-md shadow-lg"
            >
                {/* Logo */}
                <Link href={basePath || "/"} className="text-lg font-semibold tracking-tight text-white">
                    FTN<span className={`text-${variant === "v2" ? "primary" : variant === "v3" ? "primary" : "indigo-400"}`}>.</span>
                </Link>

                {/* Nav desktop */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="hover:text-white transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    {/* Demos Dropdown */}
                    <div className="relative group">
                        <button
                            className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-white/50 hover:text-white transition"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {variant ? variant.toUpperCase() : "DEMOS"}
                            <ChevronDownIcon className="h-3 w-3" />
                        </button>

                        <div className="absolute right-0 top-full mt-4 w-32
                             bg-neutral-900 border border-white/10 rounded-xl shadow-xl overflow-hidden
                             opacity-0 invisible group-hover:opacity-100 group-hover:visible
                             transition-all duration-200 origin-top-right">
                            <div className="flex flex-col py-1">
                                <Link href="/" className="px-4 py-2 text-sm text-neutral-400 hover:text-white hover:bg-white/5 text-left">All Demos</Link>
                                <Link href="/v1" className="px-4 py-2 text-sm text-white hover:bg-white/5 text-left">Version 1</Link>
                                <Link href="/v2" className="px-4 py-2 text-sm text-white hover:bg-white/5 text-left">Version 2</Link>
                                <Link href="/v3" className="px-4 py-2 text-sm text-white hover:bg-white/5 text-left">Version 3</Link>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <Link
                        href={`${basePath}/shop`}
                        className="rounded-full bg-white/10 p-2 text-white/80 hover:bg-white/20 hover:text-white transition"
                        aria-label="Shop"
                    >
                        <ShoppingBagIcon className="h-5 w-5" />
                    </Link>
                </div>
            </div>
        </header>
    );
}
