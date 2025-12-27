import React from "react";

type HeroProps = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  bgImage?: string; 
  heightClass?: string; 
  overlayOpacity?: number; 
  className?: string;
};

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  bgImage = "/hero/bg-2.jpg",
  heightClass = "h-[260px] md:h-[180px]",
  overlayOpacity = 50,
  className = "",
}) => {
  const overlay = `bg-black/${overlayOpacity}`;
  return (
    <div className={`max-w-7xl mx-auto my-10 xxl:px-0 px-6 ${className}`}>
      <div
        className={`relative w-full ${heightClass} rounded-3xl overflow-hidden bg-cover bg-center`}
        style={{ backgroundImage: `url('${bgImage}')` }}
        role="img"
        aria-label={typeof title === "string" ? title : "Hero background"}
      >
        {/* Dark Overlay */}
        <div className={`absolute inset-0 ${overlay}`} />

        {/* Centered Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">{title}</h1>

          {subtitle ? (
            <div className="flex items-center gap-2 mt-3 text-white/80">
              <h4 className="text-lg md:text-2xl mt-2">{subtitle}</h4>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Hero;
