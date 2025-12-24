"use client";

import { useState } from "react";
import ProductCard from "../../components/ProductCard";
import { MagnifyingGlassIcon, FunnelIcon } from "@heroicons/react/24/outline";

// Generating 22 products with sequential images
const products = Array.from({ length: 22 }, (_, i) => {
    const id = i + 1;
    return {
        id: id,
        name: `Cyber Asset Vol. ${id}`,
        price: `${15 + (id % 25)}€`,
        image: `/img/archivos/img${id}.png`,
        category: id % 3 === 0 ? "3D Models" : id % 2 === 0 ? "Textures" : "Brushes"
    };
});

const categories = ["All", "3D Models", "Textures", "Brushes"];

export default function ShopPageV3() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 bg-[#020617] relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-white/5 pb-8">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-widest uppercase mb-2">
                            The <span className="text-cyan-400 text-glow">Marketplace</span>
                        </h1>
                        <p className="text-cyan-200/60 font-mono text-sm tracking-wider">
Lorem ipsun trujillo maricom                        </p>
                    </div>

                    {/* Controls */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        {/* Search */}
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <MagnifyingGlassIcon className="h-4 w-4 text-cyan-500/70 group-focus-within:text-cyan-400 transition-colors" />
                            </div>
                            <input
                                type="text"
                                className="block w-full sm:w-64 pl-9 pr-4 py-2 bg-neutral-900/50 border border-cyan-500/20 rounded text-sm text-cyan-100 placeholder-cyan-500/30 focus:outline-none focus:border-cyan-500/60 focus:bg-neutral-900/80 transition-all font-mono"
                                placeholder="SEARCH_DATABASE..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        {/* Filter Button (Mobile mainly, or visual trigger) */}
                        <button className="sm:hidden flex items-center justify-center gap-2 px-4 py-2 border border-cyan-500/20 rounded bg-neutral-900/50 text-cyan-400 text-sm">
                            <FunnelIcon className="h-4 w-4" />
                            Filters
                        </button>
                    </div>
                </div>

                {/* Categories Tabs */}
                <div className="flex flex-wrap gap-2 mb-10">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all border ${selectedCategory === cat
                                    ? "bg-cyan-500/10 border-cyan-500 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                                    : "bg-transparent border-white/5 text-white/40 hover:border-white/20 hover:text-white/70"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="group relative">
                            {/* Hover Glow Effect */}
                            <div className="absolute -inset-0.5 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg opacity-0 group-hover:opacity-30 blur transition duration-500" />

                            <div className="relative h-full bg-[#0a1124] border border-white/5 rounded-lg overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300">
                                {/* Image Area with Overlay */}
                                <div className="aspect-square relative overflow-hidden bg-[#050a16]">
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1124] to-transparent opacity-60 z-10" />
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="h-full w-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition duration-500"
                                    />

                                    {/* Tech Lines */}
                                    <div className="absolute top-0 right-0 p-2 z-20">
                                        <div className="flex gap-1">
                                            <div className="w-1 h-1 bg-cyan-500 rounded-full animate-pulse" />
                                            <div className="w-1 h-1 bg-cyan-500/30 rounded-full" />
                                        </div>
                                    </div>

                                    <div className="absolute bottom-3 left-3 z-20">
                                        <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/80 px-1.5 py-0.5 rounded border border-cyan-500/20">
                                            {product.id < 10 ? `00${product.id}` : `0${product.id}`}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-4 flex flex-col flex-1">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                                            {product.name}
                                        </h3>
                                    </div>
                                    <p className="text-xs text-white/40 font-mono mb-4 flex-1">
                                        {product.category.toUpperCase()}
                                    </p>

                                    <div className="flex items-center justify-between border-t border-white/5 pt-3 mt-auto">
                                        <span className="text-cyan-400 font-bold text-sm">
                                            {product.price}
                                        </span>
                                        <button className="text-[10px] uppercase font-bold tracking-wider text-white/50 hover:text-white transition-colors flex items-center gap-1 group/btn">
                                            Add Cart
                                            <span className="group-hover/btn:translate-x-0.5 transition-transform">→</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-32 text-center">
                        <div className="w-16 h-16 border border-white/10 rounded-full flex items-center justify-center mb-4">
                            <span className="text-2xl">?</span>
                        </div>
                        <p className="text-white/40 font-mono">NO_DATA_FOUND</p>
                    </div>
                )}
            </div>
        </div>
    );
}
