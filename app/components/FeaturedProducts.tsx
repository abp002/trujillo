"use client";

import ProductCard from "./ProductCard";

const products = [
    {
        id: 1,
        name: "Poster Collection Vol. 1",
        price: "25€",
        image: "/img/archivos/img5.png",
    },
    {
        id: 2,
        name: "Urban Textures Pack",
        price: "18€",
        image: "/img/archivos/img2.png",
    },
    {
        id: 3,
        name: "Glitch Effects",
        price: "30€",
        image: "/img/archivos/img3.png",
    },
    {
        id: 4,
        name: "Retro Gradient Set",
        price: "22€",
        image: "/img/archivos/img4.png",
    },
];

export default function FeaturedProducts() {
    return (
        <section className="bg-white py-20">
            <div className="mx-auto max-w-6xl px-6">
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
                        Featured Products
                    </h2>
                    <a
                        href="/v2/shop"
                        className="text-sm font-semibold text-neutral-500 hover:text-neutral-900 transition"
                    >
                        View all &rarr;
                    </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
