"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, FileText } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  // Exact filename from your public folder
  const brochurePath = `/${encodeURIComponent("PROCOATINGSprofile.pdf")}`;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const serviceCategories = [
    { name: "Waterproofing", href: "/services/waterproofing" },
    { name: "Industrial Floor Coatings", href: "/services/industrial-flooring" },
    { name: "Protective Coatings", href: "/services/protective-coatings" },
    { name: "Residential & Commercial", href: "/services/residential-commercial" },
    { name: "Floor Densification", href: "/services/floor-densification" },
  ];

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "#", dropdown: serviceCategories },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-[100] flex justify-center transition-all duration-500 pt-3 px-4 pointer-events-none">
        <nav
          className={`pointer-events-auto flex items-center transition-all duration-500 ease-in-out ${
            scrolled
              ? "w-full max-w-[1200px] bg-white/85 backdrop-blur-xl rounded-2xl shadow-[0_12px_40px_rgba(15,50,80,0.12)] border border-white/40 px-8 h-16"
              : "w-full max-w-[1440px] bg-white/40 backdrop-blur-sm rounded-xl px-10 h-20"
          }`}
        >
          {/* 🔷 LOGO */}
          <div className="flex-1 flex items-center justify-start">
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
          <div className="hidden md:flex flex-grow-[2] items-center justify-center pl-12 space-x-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group py-4">
                {link.dropdown ? (
                  <div className="cursor-default relative px-5 py-2 text-[15px] font-bold text-[#0F3250] flex items-center gap-1 transition-colors duration-300 group-hover:text-[#EAA33F]">
                    <span className="relative z-10">{link.name}</span>
                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#EAA33F] rounded-full transition-all duration-300 group-hover:w-2/3 opacity-0 group-hover:opacity-100" />
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="relative px-5 py-2 text-[15px] font-bold text-[#0F3250] flex items-center gap-1 transition-colors duration-300 group-hover:text-[#EAA33F]"
                  >
                    <span className="relative z-10">{link.name}</span>
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#EAA33F] rounded-full transition-all duration-300 group-hover:w-2/3 opacity-0 group-hover:opacity-100" />
                  </Link>
                )}

                {link.dropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                    <div className="bg-white/95 backdrop-blur-xl border border-slate-100 rounded-2xl shadow-2xl p-3 w-64">
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block px-4 py-3 rounded-xl text-sm font-bold text-[#0F3250] hover:bg-[#0F3250] hover:text-white transition-all duration-200"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 🔥 ACTION BUTTONS - Centered text and nowrap fix applied here */}
          <div className="hidden md:flex flex-1 items-center justify-end space-x-3">
            <a 
              href={brochurePath} 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-bold text-[#0F3250] border border-[#0F3250]/10 bg-white/50 hover:bg-white hover:border-[#EAA33F] transition-all duration-300 shadow-sm whitespace-nowrap"
            >
              <FileText size={16} className="text-[#EAA33F] group-hover:scale-110 transition-transform flex-shrink-0" />
              <span>BROCHURE</span>
            </a>

            <Link href="/contact" className="flex-shrink-0">
              <button className="bg-[#0F3250] text-white px-6 py-2.5 rounded-xl text-[13px] font-black tracking-widest hover:bg-[#EAA33F] hover:text-[#0F3250] transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-blue-900/5 uppercase whitespace-nowrap">
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

      {/* 📱 MOBILE DRAWER */}
      <div className={`fixed inset-0 z-[110] md:hidden transition-visibility duration-500 ${menuOpen ? "visible" : "invisible"}`}>
        <div
          className={`absolute inset-0 bg-[#0F3250]/40 backdrop-blur-sm transition-opacity duration-500 ${menuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute top-0 left-0 h-full w-[85%] max-w-[340px] bg-white transition-transform duration-500 flex flex-col shadow-2xl ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="p-6 flex items-center justify-between border-b border-slate-50">
            <img src="/logo.png" className="h-14 w-auto object-contain" alt="Logo" />
            <button onClick={() => setMenuOpen(false)} className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 text-[#0F3250]">✕</button>
          </div>
          <nav className="flex-grow flex flex-col overflow-y-auto px-8 py-8 space-y-2">
            {navLinks.map((link, i) => (
              <div key={link.name} className="flex flex-col">
                <div className="flex items-center justify-between py-3">
                  {link.dropdown ? (
                    <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)} className={`text-left text-2xl font-black text-[#0F3250] uppercase tracking-tighter transition-all duration-500 ${menuOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"}`} style={{ transitionDelay: `${i * 100}ms` }}>{link.name}</button>
                  ) : (
                    <Link href={link.href} onClick={() => setMenuOpen(false)} className={`text-2xl font-black text-[#0F3250] uppercase tracking-tighter transition-all duration-500 ${menuOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"}`} style={{ transitionDelay: `${i * 100}ms` }}>{link.name}</Link>
                  )}
                  {link.dropdown && (
                    <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)} className="p-2 bg-slate-50 rounded-lg text-[#0F3250]"><ChevronDown className={`transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`} /></button>
                  )}
                </div>
                {link.dropdown && (
                  <div className={`overflow-hidden transition-all duration-500 ${mobileServicesOpen ? "max-h-[400px] opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
                    <div className="pl-4 space-y-1 border-l-2 border-[#EAA33F]/30 ml-1">
                      {link.dropdown.map((sub) => (
                        <Link key={sub.name} href={sub.href} onClick={() => setMenuOpen(false)} className="block py-3 px-3 text-sm font-bold text-[#0F3250]/70 hover:text-[#EAA33F]">{sub.name}</Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="p-8 space-y-4 border-t border-slate-50 bg-slate-50/50">
            <a href={brochurePath} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-bold text-[#0F3250] border-2 border-[#0F3250]/10 bg-white shadow-sm transition-active active:scale-95 whitespace-nowrap">
              <FileText size={20} className="text-[#EAA33F] flex-shrink-0" /> DOWNLOAD BROCHURE
            </a>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="block">
              <button className="w-full bg-[#0F3250] text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-[#0F3250]/20 uppercase tracking-widest active:scale-95 transition-all whitespace-nowrap">
                Get Quote
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="h-24 md:h-24" />
    </>
  );
}