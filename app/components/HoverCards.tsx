type HoverCardItem = {
  id: string;
  image: string;
  title?: string;
  subtitle?: string;
  href?: string;
};

export default function HoverCards({
  items,
  columns = 3,
}: {
  items: HoverCardItem[];
  columns?: 2 | 3 | 4;
}) {
  const gridCols =
    columns === 2
      ? "md:grid-cols-2"
      : columns === 4
      ? "md:grid-cols-4"
      : "md:grid-cols-3";

  return (
    <div className={`grid grid-cols-1 ${gridCols} gap-6`}>
      {items.map((it) => {
        const Wrapper: any = it.href ? "a" : "div";

        return (
          <Wrapper
            key={it.id}
            href={it.href}
            className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-sm transition-transform duration-300 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            <div className="relative aspect-[4/5] w-full">
              <img
                src={it.image}
                alt={it.title ?? "Poster"}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.07] group-focus-visible:scale-[1.07]"
                loading="lazy"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />

              {/* brillo/borde sutil */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                <div className="absolute inset-0 ring-1 ring-white/20" />
                <div className="absolute -inset-16 bg-white/10 blur-3xl" />
              </div>

              {/* texto reveal */}
              {(it.title || it.subtitle) && (
                <div className="absolute inset-x-0 bottom-0 p-5 translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                  {it.title && (
                    <div className="text-base font-semibold text-white">
                      {it.title}
                    </div>
                  )}
                  {it.subtitle && (
                    <div className="mt-1 text-sm text-white/70">
                      {it.subtitle}
                    </div>
                  )}
                </div>
              )}
            </div>
          </Wrapper>
        );
      })}
    </div>
  );
}
