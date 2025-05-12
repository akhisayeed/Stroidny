import { LogoSvg } from "@/assets/LogoSvg";

interface LogoProps {
  height?: number;
  className?: string;
}

export function Logo({ height = 12, className = "" }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <LogoSvg className={`h-${height} mr-4`} alt="СТРОИТЕЛЬНАЯ ИНДУСТРИЯ" />
      <h1 className="text-gold font-playfair text-xl md:text-2xl font-bold leading-tight">
        СТРОИТЕЛЬНАЯ<br/>
        <span className="text-lg md:text-xl">ИНДУСТРИЯ</span>
      </h1>
    </div>
  );
}
