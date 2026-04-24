"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/#services" },
    { name: "Gallery", href: "/#gallery" },
    { name: "Contact", href: "/contact" },
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
          {/* 🔷 LOGO (Maximized size within height) */}
          <div className="flex-shrink-0 h-full flex items-center">
            <Link href="/">
              <img
                src="/logo.png"
                className={`transition-all duration-500 ${
                  scrolled ? "h-[50px] md:h-[55px]" : "h-[75px] md:h-[85px]"
                } w-auto object-contain cursor-pointer scale-110 transform-gpu`} 
                alt="Pro Coatings"
              />
            </Link>
          </div>

          {/* 🖥️ CENTRAL LINKS */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-5 py-2 text-[15px] font-bold text-[#0F3250] group transition-colors duration-300"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#EAA33F] rounded-full transition-all duration-300 group-hover:w-2/3 opacity-0 group-hover:opacity-100" />
              </Link>
            ))}
          </div>

          {/* 🔥 ACTION BUTTON */}
          <div className="hidden md:block">
            <Link href="/contact">
              <button className="bg-[#0F3250] text-white px-7 py-2.5 rounded-xl text-[13px] font-black tracking-widest hover:bg-[#EAA33F] hover:text-[#0F3250] transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-blue-900/5 uppercase">
                Get Quote
              </button>
            </Link>
          </div>

          {/* 📱 MOBILE TOGGLE */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(true)}
              className="text-[#0F3250] p-2.5 bg-white/80 rounded-xl backdrop-blur-md shadow-sm border border-white/50"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className="w-full h-0.5 bg-[#0F3250] rounded-full" />
                <span className="w-2/3 h-0.5 bg-[#EAA33F] rounded-full" />
                <span className="w-full h-0.5 bg-[#0F3250] rounded-full" />
              </div>
            </button>
          </div>
        </nav>
      </div>

      {/* 📱 UNIQUE LEFT-SIDE DRAWER MENU */}
      <div
        className={`fixed inset-0 z-[110] md:hidden transition-visibility duration-500 ${
          menuOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-[#0F3250]/40 backdrop-blur-sm transition-opacity duration-500 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Sidebar Content */}
        <div
          className={`absolute top-0 left-0 h-full w-[85%] max-w-[340px] bg-white transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) flex flex-col shadow-2xl ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Drawer Header */}
          <div className="p-6 flex items-center justify-between border-b border-slate-50">
            <img src="/logo.png" className="h-14 w-auto object-contain" alt="Logo" />
            <button 
              onClick={() => setMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 text-[#0F3250]"
            >
              ✕
            </button>
          </div>

          {/* Navigation Links (Advanced Staggered Effect) */}
          <nav className="flex-grow flex flex-col justify-center px-8 space-y-2">
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`group flex items-center gap-4 py-4 transition-all duration-500 ${
                    menuOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="text-xs font-black text-[#EAA33F] opacity-40 group-hover:opacity-100 transition-opacity">
                  0{i + 1}
                </span>
                <span className="text-3xl font-black text-[#0F3250] tracking-tighter uppercase group-hover:translate-x-2 transition-transform">
                  {link.name}
                </span>
              </Link>
            ))}
          </nav>

          {/* Drawer Footer */}
          <div className="p-8 space-y-6">
            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              <button className="w-full bg-[#EAA33F] text-[#0F3250] py-5 rounded-2xl font-black text-lg shadow-xl shadow-orange-200 uppercase tracking-widest active:scale-95 transition-transform">
                Get Quote
              </button>
            </Link>
            <div className="flex justify-between items-center opacity-40">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0F3250]">Precision Coatings</span>
                <div className="h-[1px] w-12 bg-[#0F3250]" />
            </div>
          </div>
        </div>
      </div>

      {/* 🧱 CONTENT SPACER */}
      <div className="h-24 md:h-24" />
    </>
  );
}