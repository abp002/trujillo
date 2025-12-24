"use client";

import { motion } from "framer-motion";

const items = [
    { type: "poster", src: "/img/posters/poster1.png", span: "row-span-2" },
    { type: "archive", src: "/img/archivos/img1.png", span: "col-span-1" },
    { type: "archive", src: "/img/archivos/img2.png", span: "col-span-1" },
    { type: "poster", src: "/img/posters/poster2.png", span: "row-span-2" },
    { type: "archive", src: "/img/archivos/img3.png", span: "col-span-1 row-span-1" },
    { type: "archive", src: "/img/archivos/img4.png", span: "col-span-1 row-span-1" },
    { type: "poster", src: "/img/posters/poster3.png", span: "row-span-2" },
    // Wide item
    { type: "archive", src: "/img/archivos/img6.png", span: "col-span-1" },
    { type: "poster", src: "/img/posters/poster4.png", span: "row-span-2" },
    { type: "archive", src: "/img/archivos/img7.png", span: "col-span-1" },
    { type: "archive", src: "/img/archivos/img19.png", span: "col-span-1" },
        { type: "archive", src: "/img/archivos/img15.png", span: "col-span-1" },

];

export default function MasonryGridV3() {
    return (
        <section className="py-24 relative">
            <div className="text-center mb-16">
                <h2 className="text-sm font-bold tracking-[0.2em] text-cyan-400 uppercase mb-4">
                    The Collection
                </h2>
                <h3 className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter uppercase">
                    Some of our <br className="hidden md:block" /> works
                </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
                {items.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: i * 0.05 }}
                        className={`relative group overflow-hidden rounded-xl border border-white/5 bg-neutral-900 ${item.span}`}
                    >
                        <img
                            src={item.src}
                            alt={`Gallery item ${i}`}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <span className="text-cyan-400 text-xs font-mono font-bold uppercase tracking-widest">
                                    {item.type === "poster" ? "Tipo 1" : "Tipo 2"}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
