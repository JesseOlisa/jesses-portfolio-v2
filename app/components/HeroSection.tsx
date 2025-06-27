import React, { useState } from "react";
import Image from "next/image";
import HeroImage from "../../public/hero_image.png";

const HeroSection = () => {
  const [loading, setloading] = useState(true);

  // const showHeroImage = loading ? 'opacity-0' : 'animate-fade-in';
  return (
    <section className="py-12 flex-start md:flex-center flex-col-reverse gap-y-10 md:gap-y-0 md:flex-row md:py-12 w-full min-h-[85vh] md:gap-x-36 bg-backdrop px-12">
      <div>
        <h1 className="flex flex-col font-semibold mb-8">
          <span>Hi.</span>
          <span>I&apos;m Jesse.</span>
          <span className="text-[#BF40BF] font-semibold relative drop-shadow-[0_0_0.3rem_#BF40BF60] max-w-[270px] md:max-w-[420px] md:text-[1.7rem] lg:text-4xl">
            Frontend Developer.
            <span className="block h-1 mt-1 bg-profile-bg max-w-[90%]"></span>
          </span>
        </h1>
        <p className="max-w-lg text-[0.9rem] md:text-[1.1rem] opacity-90 mb-3">
          I&apos;m passionate about building web applications that offer seamless user experiences
          and tackle real-world challenges.{" "}
        </p>
        <p className="max-w-lg text-[0.9rem] md:text-[1.1rem] opacity-90">
          Using various frontend tools, I turn ideas and designs into real, working websites.
        </p>
      </div>
      <div className="min-h-[100px]">
        <div className={`bg-profile-bg rounded-full p-2 animate-fade-in`}>
          <Image
            src={HeroImage}
            alt="Jesse's memoji"
            width={350}
            height={100}
            onLoadingComplete={() => setloading(false)}
            priority
            className="bg-black/95 rounded-full w-auto h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
