"use client";

import { useState } from "react";
import ProductCard from "../../components/ProductCard";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

// Generating 22 products with sequential images img1...img22
const products = Array.from({ length: 22 }, (_, i) => {
    const id = i + 1;
    return {
        id: id,
        name: `Design Asset Vol. ${id}`,
        price: `${10 + (id % 20)}€`,
        image: `/img/archivos/img${id}.png`,
    };
});

export default function ShopPageV1() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen pt-32 px-6 pb-20 max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="text-center space-y-4 mb-16">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
                    Discover our products
                </h1>
                <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
                    Explora nuestra colección selecta de recursos digitales diseñada para elevar tu creatividad.
                </p>

                {/* Search Bar */}
                <div className="relative max-w-md mx-auto mt-8">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MagnifyingGlassIcon className="h-5 w-5 text-neutral-400" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-10 pr-3 py-3 border border-neutral-800 rounded-xl leading-5 bg-neutral-900/50 text-neutral-300 placeholder-neutral-500 focus:outline-none focus:bg-neutral-900 focus:border-white/20 transition-colors sm:text-sm"
                        placeholder="Search assets..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {filteredProducts.length === 0 && (
                <div className="text-center py-20 text-neutral-500">
                    No products found matching "{searchTerm}"
                </div>
            )}
        </div>
    );
}
