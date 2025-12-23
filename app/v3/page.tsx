import FluidLinesBg from "../components/FluidLinesBg";

export default function PageV3() {
    return (

        <div className="min-h-screen bg-background text-foreground">
            <header className="sticky top-0 z-50 border-b border-border bg-background/30 backdrop-blur">
                <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
                    <div className="text-sm tracking-[0.25em] uppercase text-foreground/80">
                        FND

                    </div>
                    <nav className="text-sm text-foreground/70 flex gap-6">
                        <a className="hover:text-primary transition-colors" href="#work">Shop</a>
                        <a className="hover:text-primary transition-colors" href="#about">Works</a>
                        <a className="hover:text-primary transition-colors" href="#contact">Contact</a>
                    </nav>
                </div>
            </header>

            <main className="mx-auto max-w-7xl px-6 py-16">

                <section className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-primary/5 to-transparent">
                    <FluidLinesBg className="opacity-100 mix-blend-screen" intensity={1.5} />

                    <div className="relative min-h-[760px]">

                        <div className="absolute left-10 top-10 w-[360px]">
                            <img
                                src="/img/logo2.png"
                                alt="FND logo"
                                className="mb-4 w-[120px] select-none"
                                draggable={false}
                            />
                            <div className="inline-block rounded-xl border border-white/10 bg-card/60 px-6 py-5 shadow-[0_30px_80px_rgba(0,0,0,0.55)] backdrop-blur-md">

                                <h1 className="mt-3 text-5xl font-extrabold leading-[0.95] text-foreground">
                                    GRAPHIC <br /> <span className="text-primary">DESIGNER</span>
                                </h1>
                            </div>

                            <div className="mt-10 w-[340px] rounded-2xl border border-white/10 bg-card/60 p-7 shadow-[0_30px_80px_rgba(0,0,0,0.55)] backdrop-blur-md">
                                <p className="text-muted leading-relaxed">
                                    No se que carajo poner pero poner algo de tu identidad como diseñador o sepa dios el q sosio los bordes se podrian quitar
                                </p>
                                <div className="mt-6 flex gap-3">
                                    <button className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold hover:bg-primary/90 transition-colors">
                                        Works
                                    </button>
                                    <button className="rounded-xl border border-white/10 px-4 py-2 text-sm font-semibold text-foreground/80 hover:border-primary/50 hover:text-primary transition-colors">
                                        Contact
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="absolute right-10 top-24 w-[680px]">
                            <div className="relative h-[620px]">
                                <div className="absolute left-0 top-0 h-[520px] w-[520px] overflow-hidden rounded-3xl border border-white/10 bg-card shadow-[0_30px_100px_rgba(0,0,0,0.65)]">
                                    <img
                                        src="/img/archivos/malaga1.png"
                                        alt="IMG1"
                                        className="h-full w-full object-cover opacity-80 "
                                        draggable={false}
                                    />
                                    {/* Tint to match theme */}
                                    <div className="absolute inset-0 bg-primary/10 mix-blend-color" />
                                </div>

                                <div className="absolute left-0 bottom-0 h-[220px] w-[220px] overflow-hidden rounded-3xl border border-white/10 bg-card shadow-[0_30px_100px_rgba(0,0,0,0.65)]">
                                    <img
                                        src="/img/archivos/malaga2.png"
                                        alt="IMG2"
                                        className="h-full w-full object-cover opacity-80"
                                        draggable={false}
                                    />
                                </div>

                                <div className="absolute right-0 top-0 h-[320px] w-[280px] overflow-hidden rounded-3xl border border-white/10 bg-card shadow-[0_30px_100px_rgba(0,0,0,0.65)]">
                                    <img
                                        src="/img/archivos/malaga4.png"
                                        alt="IMG3"
                                        className="h-full w-full object-cover"
                                        draggable={false}
                                    />
                                </div>

                                <div className="absolute right-4 bottom-0 h-[210px] w-[360px] overflow-hidden rounded-3xl border border-white/10 bg-card shadow-[0_30px_100px_rgba(0,0,0,0.65)]">
                                    <img
                                        src="/img/archivos/malaga3.png"
                                        alt="IMG4"
                                        className="h-full w-full object-cover"
                                        draggable={false}
                                    />
                                </div>

                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent opacity-80" />
                            </div>
                        </div>

                        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
                    </div>
                </section>
            </main>
        </div>
    );
}
