"use client";

import FanHoverCards from "../components/FanCards";
import FeaturedProducts from "../components/FeaturedProducts";
import BrandMarquee from "@/app/components/BrandMarquee";


export default function PageV2() {
    const items = [
        { id: "1", image: "/img/posters/poster1.png" },
        { id: "2", image: "/img/posters/poster2.png" },
        { id: "3", image: "/img/posters/poster3.png" },
        { id: "4", image: "/img/posters/poster4.png" },
        { id: "5", image: "/img/posters/poster5.png" },
        { id: "6", image: "/img/posters/poster6.png" },
        { id: "7", image: "/img/posters/poster7.png" },
    ];

    return (
        <main className="bg-white ">
            {/* HERO (solo aquí hay vídeo) */}
            <section className="relative isolate min-h-[78vh] bg-white pt-10 ">
                {/* Video layer */}
                <div className="absolute inset-0 -z-10 overflow-hidden ">
                    <video
                        autoPlay
                        muted
                        playsInline
                        loop
                        preload="metadata"
                        className="h-full w-full object-cover scale-125"
                    >
                        <source src="/videos/herov2.mp4" type="video/mp4" />
                    </video>

                    {/* Overlay suave para legibilidad (evita negro raro) */}
                    <div className="absolute inset-0 bg-white/45" />
                    {/* Un toque de degradado SOLO en hero */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white" />
                </div>

                {/* Contenido */}
                <div className="mx-auto max-w-6xl px-30 pt-15 pb-20">
                    <div className="max-w-2xl">
                        <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                            FND  Creative                      </p>

                        <h1 className="mt-3 text-4xl md:text-6xl font-semibold tracking-tight text-neutral-900">
                            Diseño gráfico a medida
                        </h1>

                        <p className="mt-4 text-base md:text-lg text-neutral-600 leading-relaxed">
                            Posters, branding, creatividades para redes y recursos editables listos para proyectos reales.
                        </p>

                        {/* mini form */}
                        <div className="mt-10 rounded-2xl border border-neutral-200 bg-white/85 backdrop-blur-sm shadow-sm">
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3">
                                <input
                                    type="text"
                                    placeholder="Nombre"
                                    className="h-11 rounded-xl border border-neutral-200 bg-white px-4 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-violet-400/40"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="h-11 rounded-xl border border-neutral-200 bg-white px-4 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-violet-400/40"
                                />
                                <textarea
                                    placeholder="Mensaje"
                                    rows={2}
                                    className="md:col-span-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-violet-400/40 resize-none"
                                />
                                <button
                                    type="button"
                                    className="md:col-span-2 h-11 rounded-xl bg-neutral-900 px-5 text-sm font-semibold text-white hover:bg-neutral-800 transition w-full"
                                >
                                    Contactar
                                </button>
                            </form>
                        </div>

                        <div className="mt-6 flex items-center gap-6 text-xs text-neutral-500">
                            <span>Respuesta en al momento</span>
                            <span className="h-1 w-1 rounded-full bg-neutral-300" />
                            <span>Te enviaremos un email con presupuestos e información </span>
                        </div>
                    </div>
                </div>
            </section>
  {/* SECCIÓN APARTE (sin vídeo) */}
            <section className="bg-neutral-50">
                <div className="mx-auto max-w-6xl px-6 py-16">
                    <div className="flex items-end justify-between gap-6">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">
                                Our concepts       (Copiada lando norris)       </h2>

                        </div>

                    </div>

                    <div className="mt-10">
                        <FanHoverCards items={items} />
                    </div>

                </div>
            </section>

            <FeaturedProducts />
            <BrandMarquee
  className="mt-10"
  items={["Branding", "Posters", "Editorial", "Social Media", "Motion"]}
  speedSeconds={30}
/>
          
        </main>
    );
}
