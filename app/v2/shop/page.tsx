"use client";

import ProductCard from "../../components/ProductCard";

// Generating 22 products with sequential images img1...img22
const products = Array.from({ length: 22 }, (_, i) => {
    const id = i + 1;
    // Basic randomization for variety in name/price if desired, or simple static data
    return {
        id: id,
        name: `Design Asset Vol. ${id}`,
        price: `${10 + (id % 20)}€`,
        image: `/img/archivos/img${id}.png`,
    };
});

export default function ShopPage() {
    return (
        <div className="bg-white pt-15">
            {/* Banner Section */}
            <section className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden">
                <img
                    src="/img/archivos/bannerv2.jpg"
                    alt="Shop Banner"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                        Our Products
                    </h1>
                </div>
                
            </section>

            {/* Products Grid */}
            <section className="mx-auto max-w-7xl px-6 py-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>
        </div>
    );
}
