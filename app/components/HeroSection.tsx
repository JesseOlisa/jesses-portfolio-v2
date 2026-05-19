import React, { useState } from "react";
import Image from "next/image";
import HeroImage from "../../public/hero_image.png";

const HeroSection = () => {
  const [loading, setLoading] = useState(true);

  return (
    <section className="relative py-12 flex-start md:flex-center flex-col-reverse gap-y-10 md:gap-y-0 md:flex-row md:py-16 w-full min-h-[85vh] md:gap-x-36 px-12 overflow-hidden dot-grid">
      {/* Ambient gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-float-slow absolute -top-20 -left-20 w-[420px] h-[420px] rounded-full bg-[#3e2a98]/25 blur-[80px]" />
        <div className="animate-float-slow-delay absolute bottom-0 right-0 w-[360px] h-[360px] rounded-full bg-[#BF40BF]/15 blur-[80px]" />
      </div>

      <div className="relative z-10">
        {/* Open to work badge */}
        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-xs text-green-400 font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          Available for new projects
        </div>

        <h1 className="flex flex-col font-bold mb-8 leading-tight">
          <span className="text-white/90">Hi.</span>
          <span className="text-white/90">I&apos;m Jesse.</span>
          <span className="text-[#BF40BF] font-bold relative drop-shadow-[0_0_0.4rem_#BF40BF60] max-w-[270px] md:max-w-[520px] md:text-[1.8rem] lg:text-[2.2rem] tracking-wide">
            Frontend & Mobile Dev.
            <span className="block h-[2px] mt-2 bg-profile-bg max-w-[85%] rounded-full" />
          </span>
        </h1>
        <p className="max-w-lg text-[0.9rem] md:text-[1.05rem] opacity-80 mb-3 leading-relaxed">
          I&apos;m passionate about building web and mobile applications that offer seamless user
          experiences and tackle real-world challenges.
        </p>
        <p className="max-w-lg text-[0.9rem] md:text-[1.05rem] opacity-80 leading-relaxed">
          From pixel-perfect web interfaces to smooth React Native mobile apps, I turn ideas and
          designs into real, working products.
        </p>
      </div>

      <div className="relative z-10 min-h-[100px]">
        {/* Pulsing outer ring */}
        <div className="animate-pulse-ring absolute inset-0 rounded-full bg-linear-to-br from-[#3e2a98] to-[#BF40BF] blur-xs opacity-60 scale-[1.08]" />
        <div className={`relative bg-profile-bg rounded-full p-[3px] animate-fade-in`}>
          <Image
            src={HeroImage}
            alt="Jesse's memoji"
            width={320}
            height={320}
            onLoad={() => setLoading(false)}
            priority
            className="bg-black/95 rounded-full w-auto h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
