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

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-[100] flex justify-center transition-all duration-500 pt-3 px-4 pointer-events-none">
        <nav
          className={`pointer-events-auto flex items-center justify-between transition-all duration-500 ease-in-out ${
            scrolled
              ? "w-full max-w-[1200px] bg-white/85 backdrop-blur-xl rounded-2xl shadow-[0_12px_40px_rgba(15,50,80,0.12)] border border-white/40 px-8 h-16"
              : "w-full max-w-[1440px] bg-white/40 backdrop-blur-sm rounded-xl px-10 h-20"
          }`}
        >
          {/* 🔷 LOGO - Optimized Heights */}
          <div className="flex-shrink-0">
            <img
              src="/logo.png"
              className={`transition-all duration-500 ${
                scrolled ? "h-11 md:h-12" : "h-14 md:h-16"
              } w-auto object-contain`}
              alt="Pro Coatings"
            />
          </div>

          {/* 🖥️ CENTRAL LINKS */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-5 py-2 text-[15px] font-bold text-[#0F3250] group transition-colors duration-300"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#EAA33F] rounded-full transition-all duration-300 group-hover:w-2/3 opacity-0 group-hover:opacity-100" />
              </a>
            ))}
          </div>

          {/* 🔥 ACTION BUTTON */}
          <div className="hidden md:block">
            <button className="bg-[#0F3250] text-white px-7 py-2.5 rounded-xl text-[13px] font-black tracking-widest hover:bg-[#EAA33F] hover:text-[#0F3250] transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-blue-900/5">
              GET QUOTE
            </button>
          </div>

          {/* 📱 MOBILE TOGGLE */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-[#0F3250] p-2.5 bg-white/80 rounded-xl backdrop-blur-md shadow-sm border border-white/50"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-[#0F3250] rounded-full transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`w-full h-0.5 bg-[#EAA33F] rounded-full transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`w-full h-0.5 bg-[#0F3250] rounded-full transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
              </div>
            </button>
          </div>
        </nav>
      </div>

      {/* 📱 MOBILE OVERLAY MENU */}
      <div
        className={`fixed inset-0 z-[90] bg-[#0F3250]/40 backdrop-blur-md md:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className={`absolute top-24 right-4 left-4 bg-white rounded-[2rem] p-8 transition-all duration-500 shadow-2xl ${
            menuOpen ? "translate-y-0 scale-100" : "-translate-y-10 scale-95"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col space-y-4 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-black text-[#0F3250] py-2"
              >
                {link.name}
              </a>
            ))}
            <button className="w-full bg-[#EAA33F] text-[#0F3250] py-5 rounded-2xl font-black text-lg mt-2">
              GET QUOTE
            </button>
          </div>
        </div>
      </div>

      {/* 🧱 CONTENT SPACER - Reduced for smaller starting navbar */}
      <div className="h-24 md:h-24" />
    </>
  );
}