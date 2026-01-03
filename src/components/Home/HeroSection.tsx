
"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
<>
  <div className="w-full overflow-hidden">

    {/* Mobile Image */}
    <Image
      src="/hero/mobile-banner.jpg"
      alt="Hero Banner Mobile"
      width={1200}
      height={700}
      className="w-full h-auto object-cover block lg:hidden"
      priority
    />

    {/* Desktop Image */}
    <Image
      src="/hero/car-drive-lg.jpg"
      alt="Hero Banner Desktop"
      width={1600}
      height={800}
      className="w-full h-auto object-cover hidden lg:block"
      priority
    />

  </div>
</>

  );
}
