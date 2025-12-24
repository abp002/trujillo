"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function GraffitiSplit() {
    const [isSwapped, setIsSwapped] = useState(false);

    // Define the two visual states using purely transform properties for fluidity
    const backState = {
        x: 40,
        y: -40,
        rotate: 6,
        scale: 0.9,
        opacity: 0.6,
        filter: "grayscale(100%)",
        zIndex: 10, // Lower z-index
    };

    const frontState = {
        x: -20,
        y: 20,
        rotate: -3,
        scale: 1,
        opacity: 1,
        filter: "grayscale(0%)",
        zIndex: 20, // Higher z-index
    };

    return (
        <section className="relative w-full max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12 sm:gap-20 overflow-hidden">

            {/* Left: Overlapping Images */}
            <div className="relative w-full md:w-1/2 min-h-[400px] flex items-center justify-center">

                {/* Image A (Starts at Back) */}
                <motion.div
                    className="absolute w-64 h-48 sm:w-80 sm:h-60 rounded-lg overflow-hidden border-2 border-white/5 shadow-2xl cursor-pointer bg-neutral-800"
                    animate={isSwapped ? frontState : backState}
                    transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }} // Smooth cubic-bezier
                    onClick={() => setIsSwapped(!isSwapped)}
                >
                    <img
                        src="/img/archivos/img5.png"
                        alt="Graffiti Art Background"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Image B (Starts at Front) */}
                <motion.div
                    className="absolute w-72 h-56 sm:w-96 sm:h-72 rounded-lg overflow-hidden border-2 border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] cursor-pointer bg-neutral-900"
                    animate={isSwapped ? backState : frontState}
                    transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                    onClick={() => setIsSwapped(!isSwapped)}
                >
                    <img
                        src="/img/archivos/img8.png"
                        alt="Graffiti Art Main"
                        className="w-full h-full object-cover"
                    />

                    {/* Overlay sticker - Fades out when moving to back */}
                    <motion.div
                        animate={{ opacity: isSwapped ? 0 : 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute bottom-4 right-4 bg-white px-3 py-1 rotate-[-6deg] shadow-lg"
                    >
                        <span className="text-black font-bold text-xs tracking-tighter uppercase font-mono">
                            Love & Share
                        </span>
                    </motion.div>
                </motion.div>

            </div>

            {/* Right: Text Content */}
            <motion.div
                className="w-full md:w-1/2 space-y-6 text-left relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                    hidden: { opacity: 0, x: 100 },
                    visible: {
                        opacity: 1,
                        x: 0,
                        transition: {
                            type: "spring",
                            stiffness: 50,
                            damping: 20,
                            staggerChildren: 0.1
                        }
                    }
                }}
            >
                <motion.div variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}>
                    <span className="inline-block text-cyan-400 font-bold tracking-widest text-sm uppercase skew-x-[-10deg] mb-2 transform">
                        About
                    </span>
                </motion.div>

                <motion.h2
                    className="text-6xl sm:text-7xl font-extrabold text-white tracking-tight leading-[0.9] uppercase italic"
                    style={{ fontFamily: 'var(--font-anton), sans-serif' }}
                    variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.12 }}
                >
                    Lorem Ipsum
                </motion.h2>

                <motion.p
                    className="text-neutral-400 text-lg leading-relaxed max-w-md"
                    variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}
                >
                    Pincha en la imagen de detras (izquierda) para que als dos imagenes roten ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sollicitudin
                    aliquam suscipit. Vestibulum ligula dolor, vehicula ac metus lobortis, lobortis
                    maximus mauris.
                </motion.p>

                {/* Decorative elements */}
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />
            </motion.div>
        </section>
    );
}
