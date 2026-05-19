import React from "react";

const Header = () => {
  return (
    <header className="flex-between sticky top-0 z-50 px-6 md:px-12 py-4 backdrop-blur-md bg-black/70 border-b border-white/5">
      <code className="text-sm tracking-wide font-medium text-white/90">Jesse.Olisa</code>
      <a
        href="https://drive.google.com/file/d/1lWRCUrXcypSLrQTZZH_Xmg9VdVvT8iw7/view?usp=sharing"
        download="Jesse_Ogbonna_CV"
        target="_blank"
        className="relative text-sm font-medium px-4 py-2 rounded-lg bg-linear-to-r from-[#3e2a98] to-[#BF40BF] hover:opacity-90 transition-opacity text-white"
      >
        My Resume
      </a>
    </header>
  );
};

export default Header;
