export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="rgba(255,255,255,0)" />
            <stop offset="0.5" stopColor="rgba(255,255,255,0.22)" />
            <stop offset="1" stopColor="rgba(255,255,255,0)" />
          </linearGradient>

          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <pattern
  id="movingLines"
  width="220"
  height="220"
  patternUnits="userSpaceOnUse"
  patternTransform="translate(0 0)"
>
  <animateTransform
    attributeName="patternTransform"
    type="translate"
    from="0 0"
    to="220 220"
    dur="16s"
    repeatCount="indefinite"
  />

  <path d="M-40 0 L220 260" stroke="url(#lineGrad)" strokeWidth="2" />
  <path d="M-120 0 L140 260" stroke="url(#lineGrad)" strokeWidth="1.6" />
  <path d="M40 0 L300 260" stroke="url(#lineGrad)" strokeWidth="1.2" />
</pattern>

        </defs>

        <g filter="url(#softGlow)">
          <rect className="bg-lines" x="0" y="0" width="1200" height="800" fill="url(#movingLines)" />
          <rect className="bg-lines2" x="0" y="0" width="1200" height="800" fill="url(#movingLines)" opacity="0.55" />
        </g>
      </svg>
    </div>
  );
}
