/**
 * Definite-integral visualization for the course hero:
 * curve f(x) with shaded area S(x) between x = a and a variable x.
 * Colors come from Mathh CSS variables (sage / deep teal brand).
 */
export function IntegralHeroGraphic() {
  return (
    <svg
      className="integral-hero"
      viewBox="0 0 720 520"
      role="img"
      aria-label="Integral visualization: area under a curve between two boundaries"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="shadeFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--accent-soft)" stopOpacity="0.72" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.18" />
        </linearGradient>
        <filter id="softGlow" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="1.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <marker id="arrowHead" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" className="integral-hero__area-arrow-head" />
        </marker>
      </defs>

      {/* Axes */}
      <line className="integral-hero__axis" x1="88" y1="40" x2="88" y2="430" />
      <line className="integral-hero__axis" x1="88" y1="430" x2="660" y2="430" />
      <polygon className="integral-hero__axis-fill" points="88,28 82,48 94,48" />
      <polygon className="integral-hero__axis-fill" points="672,430 652,424 652,436" />
      <text className="integral-hero__origin" x="72" y="448">
        0
      </text>

      {/* Shaded region under curve from a → x */}
      <path
        className="integral-hero__shade"
        d="M 210 430
           L 210 318
           C 260 295, 310 250, 360 210
           C 400 178, 440 155, 480 138
           L 480 430
           Z"
      />

      {/* Curve f(x) */}
      <path
        className="integral-hero__curve"
        filter="url(#softGlow)"
        fill="none"
        d="M 120 380
           C 170 360, 190 340, 210 318
           C 260 295, 310 250, 360 210
           C 420 162, 500 120, 600 78"
      />

      {/* Vertical guides at a and x */}
      <line className="integral-hero__guide" x1="210" y1="318" x2="210" y2="430" />
      <line className="integral-hero__guide integral-hero__guide--x" x1="480" y1="138" x2="480" y2="430" />

      {/* Horizontal dashed to y-axis */}
      <line className="integral-hero__dash" x1="88" y1="318" x2="210" y2="318" />
      <line className="integral-hero__dash integral-hero__dash--x" x1="88" y1="138" x2="480" y2="138" />

      {/* Labels */}
      <text className="integral-hero__label integral-hero__label--a" x="204" y="456">
        a
      </text>
      <text className="integral-hero__label integral-hero__label--x" x="474" y="456">
        x
      </text>
      <text className="integral-hero__label integral-hero__label--fa" x="48" y="324">
        f(a)
      </text>
      <text className="integral-hero__label integral-hero__label--fx" x="42" y="144">
        f(x)
      </text>
      <text className="integral-hero__label integral-hero__label--curve" x="610" y="72">
        f(x)
      </text>
      <text className="integral-hero__label integral-hero__label--area" x="520" y="300">
        S(x)
      </text>
      <path
        className="integral-hero__area-arrow"
        d="M 515 295 C 470 290, 420 285, 380 270"
        fill="none"
        markerEnd="url(#arrowHead)"
      />
    </svg>
  )
}
