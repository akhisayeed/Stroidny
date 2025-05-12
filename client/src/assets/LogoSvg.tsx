interface LogoSvgProps {
  className?: string;
  alt?: string;
}

export function LogoSvg({ className, alt = "СТРОИТЕЛЬНАЯ ИНДУСТРИЯ" }: LogoSvgProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 240"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={alt}
    >
      <title>{alt}</title>
      <defs>
        <radialGradient
          id="logoGradient"
          cx="50%"
          cy="50%"
          r="50%"
          fx="50%"
          fy="50%"
        >
          <stop offset="0%" stopColor="#f5e7a3" />
          <stop offset="100%" stopColor="#d4af37" />
        </radialGradient>
      </defs>
      <g fill="none" stroke="url(#logoGradient)" strokeWidth="2">
        {/* Construction crane outline */}
        <path d="M120 40 L200 40 L200 60 L180 60 L180 140 L120 140 L120 40" />
        <path d="M140 60 L140 120 L160 120 L160 60 L140 60" />
        <path d="M120 40 L120 20 L140 20 L140 40" />
        <path d="M180 60 L220 20" />
        <path d="M220 20 L220 40 L200 60" />
        <path d="M220 30 L200 30" />
        
        {/* Factory building */}
        <path d="M40 180 L40 140 L100 140 L100 180 L40 180" />
        <path d="M50 160 L60 160 L60 170 L50 170 L50 160" />
        <path d="M70 160 L80 160 L80 170 L70 170 L70 160" />
        <path d="M90 160 L90 170" />
        
        {/* Smokestacks */}
        <path d="M50 140 L50 120" />
        <path d="M70 140 L70 110" />
        <path d="M90 140 L90 130" />
        
        {/* Foundation/Platform */}
        <path d="M30 180 L110 180 L110 190 L30 190 L30 180" />
        
        {/* Zigzag connection (stylized electricity/energy) */}
        <path d="M100 160 L110 150 L100 140 L110 130 L100 120" />
      </g>
    </svg>
  );
}
