import logoImg from "@/assets/images/logo.jpg";

interface LogoProps {
  height?: number;
  className?: string;
}

export function Logo({ height = 12, className = "" }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="h-12 w-12 mr-3">
        <img 
          src={logoImg} 
          alt="СТРОИТЕЛЬНАЯ ИНДУСТРИЯ" 
          className="h-full w-full object-contain" 
        />
      </div>
      <h1 className="text-gold font-playfair text-xl md:text-2xl font-bold leading-tight">
        СТРОИТЕЛЬНАЯ<br/>
        <span className="text-lg md:text-xl">ИНДУСТРИЯ</span>
      </h1>
    </div>
  );
}
