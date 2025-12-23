import Link from "next/link";

export default function LandingSelector() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10 gap-10 bg-neutral-950 text-white">
      <h1 className="text-5xl font-bold tracking-tighter">Selecciona una Demo</h1>
      <p className="text-neutral-400 max-w-md text-center">
        Como no tengo una idea de como hacer la pagina te he echo 3 págs con diferente estilo cada unA.
        Podríamos coger componentes de cada una y hacer una a tu gusto, y si me das indicaciones o cosas concretas ps mejor. 
        Las paletas de colores son generadas con ia (pURPLE emerald cyan ) Si tuvieses algunos colores que definan tu marca o alguna paleta cocnreta q te guste podría ser más sencicllo hacer el mockup con cocherencia 
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {/* V1 */}
        <Link href="/v1" className="group relative h-64 border border-white/10 bg-neutral-900 rounded-3xl overflow-hidden hover:border-indigo-500 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
          <div className="absolute bottom-0 p-6">
            <h2 className="text-2xl font-bold">Versión 1</h2>
            <p className="text-sm text-neutral-400">Diseño (Purple)</p>
          </div>
        </Link>

        {/* V2 */}
        <Link href="/v2" className="group relative h-64 border border-white/10 bg-neutral-900 rounded-3xl overflow-hidden hover:border-emerald-500 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
          <div className="absolute bottom-0 p-6">
            <h2 className="text-2xl font-bold text-emerald-400">Versión 2</h2>
            <p className="text-sm text-neutral-400">Diseño Emerald</p>
          </div>
        </Link>

        {/* V3 */}
        <Link href="/v3" className="group relative h-64 border border-white/10 bg-neutral-900 rounded-3xl overflow-hidden hover:border-cyan-500 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
          <div className="absolute bottom-0 p-6">
            <h2 className="text-2xl font-bold text-cyan-400">Versión 3</h2>
            <p className="text-sm text-neutral-400">Diseño Ocean</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
