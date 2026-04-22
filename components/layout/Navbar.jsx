"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          scrolled
            ? "bg-white/98 backdrop-blur-xl shadow-[0_4px_25px_rgba(0,0,0,0.1)] py-0"
            : "bg-transparent py-2"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex items-center justify-between h-[80px]">
            
            {/* 🔷 BRANDING */}
            <div className="flex-shrink-0 -ml-2 md:-ml-4 cursor-pointer">
              <img
                src="/logo.png"
                className="h-20 md:h-24 object-contain"
                alt="Pro Coatings Logo"
              />
            </div>

            {/* 🖥️ DESKTOP NAVIGATION */}
            <div className="hidden md:flex flex-grow justify-center items-center">
              <div className="flex items-center gap-4">
                {["Home", "About", "Services", "Gallery", "Contact"].map((item, i) => (
                  <a
                    key={i}
                    href={`#${item.toLowerCase()}`}
                    className="relative px-4 py-2 text-[#0F3250] font-medium text-[15px] uppercase tracking-[0.12em] group transition-colors duration-300"
                  >
                    <span className="relative z-10">{item}</span>
                    
                    {/* Hover Gold Underline - Persistent line removed from Home */}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2.5px] w-0 bg-[#EAA33F] transition-all duration-300 group-hover:w-full" />
                  </a>
                ))}
              </div>
            </div>

            {/* 🔥 PREMIUM CTA */}
            <div className="hidden md:block flex-shrink-0">
              <button className="relative group px-10 py-4 bg-[#EAA33F] overflow-hidden rounded-sm transition-all duration-300 hover:shadow-[6px_6px_0px_#0F3250]">
                <span className="relative z-10 text-[#0F3250] font-bold text-[12px] tracking-[0.15em] transition-colors duration-300">
                  GET QUOTE
                </span>
                <div className="absolute inset-0 bg-[#0F3250] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold text-[12px] tracking-[0.15em] z-20">
                   GET QUOTE
                </span>
              </button>
            </div>

            {/* 📱 MOBILE TOGGLE */}
            <button
              className="md:hidden flex flex-col justify-center items-end gap-1.5 w-10 h-10 group"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className={`h-0.5 bg-[#0F3250] transition-all duration-300 ${menuOpen ? "w-8 rotate-45 translate-y-2 bg-white" : "w-8"}`} />
              <span className={`h-0.5 bg-[#EAA33F] transition-all duration-300 ${menuOpen ? "opacity-0" : "w-5"}`} />
              <span className={`h-0.5 bg-[#0F3250] transition-all duration-300 ${menuOpen ? "w-8 -rotate-45 -translate-y-2 bg-white" : "w-8"}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* 📱 MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[90] bg-[#0F3250]/98 backdrop-blur-2xl transition-all duration-500 md:hidden flex flex-col justify-center px-10 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="space-y-6">
          {["Home", "About", "Services", "Gallery", "Contact"].map((item, i) => (
            <a
              key={i}
              href="#"
              onClick={() => setMenuOpen(false)}
              className="block text-4xl font-light text-white hover:text-[#EAA33F] transition-colors tracking-widest uppercase"
            >
              {item}<span className="text-[#EAA33F]">.</span>
            </a>
          ))}
          <div className="h-px w-full bg-white/10 my-8" />
          <button className="w-full bg-[#EAA33F] py-6 text-[#0F3250] font-bold tracking-[0.2em] text-base rounded-sm shadow-xl uppercase">
            GET QUOTE
          </button>
        </div>
      </div>

      {/* 🧱 CONTENT SPACER */}
      <div className="h-[80px]" />
    </>
  );
}