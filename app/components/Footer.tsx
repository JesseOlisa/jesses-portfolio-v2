import React from "react";
import Link from "next/link";
import { BsTwitter, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="relative flex-center flex-col w-full gap-6 bg-zinc-800/20 py-16 px-8 overflow-hidden">
      {/* Gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#BF40BF]/40 to-transparent" />

      <p className="text-xs uppercase tracking-widest text-[#BF40BF] font-medium">Contact</p>
      <h2 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-profile-bg drop-shadow-[0_0_0.5rem_#BF40BF40]">
        Send me a message.
      </h2>
      <p className="opacity-70 max-w-md text-center text-sm leading-relaxed">
        I&apos;m currently looking to join a team of creative developers and designers to build
        amazing products. If you have any proposals, ideas or just want to say hello, hit any of
        these icons and let&apos;s connect.
      </p>

      <div className="flex items-center gap-3 mt-2">
        <Link
          href="mailto:jessesamuel84@gmail.com"
          target="_blank"
          className="flex-center p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200 group"
          aria-label="Email"
        >
          <AiOutlineMail
            size={20}
            fill="#ffffff"
            className="opacity-60 group-hover:opacity-100 transition-opacity"
          />
        </Link>
        <Link
          href="https://twitter.com/JesseOGBO"
          className="flex-center p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200 group"
          target="_blank"
          aria-label="Twitter"
        >
          <BsTwitter
            size={20}
            className="opacity-60 group-hover:opacity-100 transition-opacity"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/jesse-ogbonna-6a591a107/"
          className="flex-center p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200 group"
          target="_blank"
          aria-label="LinkedIn"
        >
          <BsLinkedin
            size={20}
            className="opacity-60 group-hover:opacity-100 transition-opacity"
          />
        </Link>
        <Link
          href="https://www.instagram.com/ogbonnajesse"
          className="flex-center p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200 group"
          target="_blank"
          aria-label="Instagram"
        >
          <BsInstagram
            size={20}
            className="opacity-60 group-hover:opacity-100 transition-opacity"
          />
        </Link>
        <Link
          href="https://www.github.com/JesseOlisa"
          className="flex-center p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200 group"
          target="_blank"
          aria-label="GitHub"
        >
          <BsGithub
            size={20}
            className="opacity-60 group-hover:opacity-100 transition-opacity"
          />
        </Link>
      </div>

      <p className="text-xs opacity-40 mt-2">
        Built by Jesse Ogbonna. &copy;{new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
