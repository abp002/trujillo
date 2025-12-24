"use client";

import { useState } from "react";
import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid, ShoppingBagIcon as ShoppingBagIconSolid } from "@heroicons/react/24/solid";

export type Product = {
    id: number | string;
    name: string;
    price: string;
    image: string;
};

export default function ProductCard({ product }: { product: Product }) {
    const [liked, setLiked] = useState(false);
    const [inCart, setInCart] = useState(false);

    return (
        <div className="group relative">
            <div className="aspect-[3/4] w-full overflow-hidden rounded-lg bg-neutral-100 mb-4 relative">
                <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover object-center group-hover:opacity-90 transition"
                />

                {/* Icons container - Top Right */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            setLiked(!liked);
                        }}
                        className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition group/btn"
                        title="Add to wishlist"
                    >
                        {liked ? (
                            <HeartIconSolid className="w-5 h-5 text-red-500" />
                        ) : (
                            <HeartIcon className="w-5 h-5 text-white hover:text-red-500 transition" />
                        )}
                    </button>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            setInCart(!inCart);
                        }}
                        className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition group/btn"
                        title="Add to cart"
                    >
                        {inCart ? (
                            <ShoppingBagIconSolid className="w-5 h-5 text-white" />
                        ) : (
                            <ShoppingBagIcon className="w-5 h-5 text-white hover:text-white stroke-2" />
                        )}
                    </button>
                </div>
            </div>
            <div className="flex justify-between">
                <div>
                    <h3 className="text-lg font-medium text-foreground">
                        {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-foreground">Digital Asset</p>
                </div>
                <p className="text-lg font-semibold text-foreground">
                    {product.price}
                </p>
            </div>
        </div>
    );
}
