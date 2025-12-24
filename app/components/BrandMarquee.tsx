 "use client";

type Props = {
  items?: string[];
  speedSeconds?: number;
  className?: string;
};

export default function BrandMarquee({
  items = ["Branding", "Posters", "Editorial", "Social Media", "Motion"],
  speedSeconds = 26,
  className = "",
}: Props) {
  const row = items;

  return (
    <div className={`relative w-full overflow-hidden ${className}`} aria-label="Servicios">
      {/* Fade lateral para que entre/salga suave */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />

      <div
        className="flex w-max gap-7 py-4 will-change-transform hover:[animation-play-state:paused]"
        style={{
          animation: `marquee ${speedSeconds}s linear infinite`,
        }}
      >
        {/* Duplicamos para loop perfecto */}
        <MarqueeRow items={row} />
        <MarqueeRow items={row} />
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

function MarqueeRow({ items }: { items: string[] }) {
  return (
    <div className="flex items-center gap-7">
      {items.map((t, idx) => (
        <div key={`${t}-${idx}`} className="flex items-center gap-7">
          <span className="brand-chip">{t}</span>
          <span className="brand-dot" aria-hidden="true">•</span>
        </div>
      ))}
    </div>
  );
}
