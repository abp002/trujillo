import Link from "next/link";

export default function LandingSelector() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white px-6 py-20">
      <div className="mx-auto max-w-5xl space-y-16">

        {/* Header */}
        <header className="text-center space-y-4">
          <h1 className="text-5xl font-bold tracking-tight">
README          </h1>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Estas páginas son <strong>mockups </strong>.
            No es ni mucho menos nada final, es para definir el diseño,
            las secciones y el estilo de la web. La idea es que cambie mucho.</p>
            <br></br>
            <p>
Dentro de cada demo podrás navegar a las otras demos (arriba en el header a la derecha)
          </p>
        </header>

        {/* Demos */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-center">Elige una demo</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/v1" className="group relative h-56 rounded-3xl border border-white/10 bg-neutral-900 hover:border-indigo-500 transition">
              <div className="absolute bottom-0 p-6">
                <h3 className="text-xl font-semibold">Versión 1</h3>
                <p className="text-sm text-neutral-400">Estilo oscuro </p>
              </div>
            </Link>

            <Link href="/v2" className="group relative h-56 rounded-3xl border border-white/10 bg-neutral-900 hover:border-emerald-500 transition">
              <div className="absolute bottom-0 p-6">
                <h3 className="text-xl font-semibold text-emerald-400">Versión 2</h3>
                <p className="text-sm text-neutral-400">Estilo claro</p>
              </div>
            </Link>

            <Link href="/v3" className="group relative h-56 rounded-3xl border border-white/10 bg-neutral-900 hover:border-cyan-500 transition">
              <div className="absolute bottom-0 p-6">
                <h3 className="text-xl font-semibold text-cyan-400">Versión 3</h3>
                <p className="text-sm text-neutral-400">Estilo oscuro y cyan </p>
              </div>
            </Link>
          </div>
        </section>

        {/* Qué es esto */}
        <section className="grid md:grid-cols-2 gap-10">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold">V1,v2,v3</h2>
            <p className="text-neutral-400">
              V1 tiene algunos bugs, como el fondo no es limpia la transicion final, tiene un corte (se corrige facil)
            </p>
            <ul className="list-disc list-inside text-neutral-400 space-y-1">
              <li>V1. Es un fondo entero animado a la página, (en las demás el fondo solo se aplica a una sección) a mi me parece mejor que sea por secciones pero por cambiar de estilo lo he probado así</li>
              <li>V2 es mas como una landing page, la idea es contacto rápido y visualizar productos rápidos, mas como una tienda web </li>
              <li>          V2/SHOP              Este banner es muy feo, pero se podría poner algo wapo, aunq alomejor no es necesario. Luego abajo se podria poner filtros/buscador
</li>
       
       
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold">Varios</h2>
            <p className="text-neutral-400">
Necesito saber que se puede incluir, en cuanto a textos/titulos.             </p>
            <p className="text-neutral-400">
            </p>
            <ul className="list-disc list-inside text-neutral-400 space-y-1">
              <li>Esto está hecho ráapido, habrá muchos fallos,detalles y cosas a pulir, esas memeces no las tengas en cuenta </li>
              <li>Busca alguna tipografia (2 o incluso 3) que te guste</li>
              <li>También una paleta de colores molaría (la web podría tener un botón modo claro/oscuro)</li>
            </ul>
          </div>
        </section>

        {/* Tu papel */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Lo idóneo</h2>
          <p className="text-neutral-400 max-w-3xl">
            Lo ideal sería que tú mismo diseñes o dibujes ideas en Photoshop /
            lápiz o lo que sea (secciones, componentes, layouts…).
          </p>
          <p className="text-neutral-400 max-w-3xl">
            Y ya me encargon yo de pintarlas en codigo o lo que sea necesario
          </p>
        </section>

        {/* Contenido e imágenes */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Sobre imágenes y trabajos</h2>
          <p className="text-neutral-400 max-w-3xl">
            Ahora mismo he usado imágenes recortadas de tu Instagram y material genérico.
          </p>
          <p className="text-neutral-400 max-w-3xl">
            Para evitar problemas de derechos, lo ideal sería que me pases
            <strong> tus propios trabajos</strong>, mejor si son genéricos
            (sin marcas ni escudos).
          </p>
        </section>

        {/* Páginas */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold">Páginas planteadas</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 p-5 bg-neutral-900">
              <h3 className="font-semibold mb-2">Home</h3>
              <p className="text-sm text-neutral-400">
                Presentación +  trabajos destacados /podría ser tb una especie de portfolio 
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-5 bg-neutral-900">
              <h3 className="font-semibold mb-2">shop</h3>
              <p className="text-sm text-neutral-400">
                Grid estilo Behance/freepik con tarjetas.
                Cada producto puede tener una segunda imagen al hacer hover, una generica o simplemente un sombreado con icono de megusta o añadir al carrito (como behance).
                Luego esta seccion podría tener un hero/slider y ahora mismo no le veo mucho sentido pero a la larga y escalable alomejor una seccion de filtros y buscado con autocompletado
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-5 bg-neutral-900">
              <h3 className="font-semibold mb-2">Contacto</h3>
              <p className="text-sm text-neutral-400">
                Formulario simple para explicar la idea del proyecto.
                Posible email automático de confirmación.(incluso precios o algo +)
              </p>
            </div>
          </div>
        </section>

        {/* Inspiración */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Animaciones</h2>
          <p className="text-neutral-400 max-w-3xl">
            Mira en Freepik o Behance
            y guardes animaciones, fondos o efectos que te gusten.
          </p>
          <p className="text-neutral-400 max-w-3xl">
Y ya luego yo lo adapto al codigo 

          </p>
        </section>



      </div>
    </div>
  );
}
