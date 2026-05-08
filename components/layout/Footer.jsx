"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Unified link structure for better maintenance
  const sitemapLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const expertiseLinks = [
    { name: "Waterproofing", href: "/services/waterproofing" },
    { name: "Industrial Floor Coatings", href: "/services/industrial-floor-coatings" },
    { name: "Protective Coatings", href: "/services/protective-coatings" },
    { name: "Residential & Commercial Flooring", href: "/services/residential-commercial-flooring" },
    { name: "Floor Densification", href: "/services/floor-densification" },
  ];

  const socialLinks = [
    { 
      name: "LinkedIn", 
      href: "https://linkedin.com", 
      icon: (
        <>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
          <circle cx="4" cy="4" r="2"/>
        </>
      ) 
    },
    { 
      name: "Instagram", 
      href: "https://instagram.com", 
      icon: (
        <>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </>
      ) 
    },
    { 
      name: "Facebook", 
      href: "https://facebook.com", 
      icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/> 
    },
  ];

  return (
    <footer className="relative bg-[#051626] text-white pt-20 overflow-hidden border-t border-white/5">
      {/* 🧩 Grid & Background Effects */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '45px 45px' }} 
      />
      <div className="absolute -top-24 -left-24 w-[400px] h-[400px] bg-[#EAA33F]/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 pb-16">
          
          {/* 🔷 BRAND & ADDRESS BLOCK */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight uppercase leading-none">
                PRO<span className="text-[#EAA33F]">COATINGS</span>
              </h2>
              <div className="h-1 w-14 bg-[#EAA33F]" />
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 pt-2">
                  <svg className="w-5 h-5 text-[#EAA33F] mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-sm text-slate-400 font-medium leading-relaxed">
                    Office No.1, Mangalmurti Complex, Ground Floor, Behind Audumber Complex, 
                    Narhe-Dhayari Road, Narhe, Pune-411041
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#EAA33F] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:procoatings2122@gmail.com" className="text-sm text-slate-400 font-bold hover:text-white transition-colors">
                    procoatings2122@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#EAA33F] hover:text-[#051626] transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* 🔷 NAVIGATION & INFO */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-10">
            
            <div className="space-y-6">
              <h4 className="text-[11px] font-black uppercase tracking-[0.25em] text-[#EAA33F]">Sitemap</h4>
              <ul className="space-y-4">
                {sitemapLinks.map(link => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm font-bold text-slate-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-[11px] font-black uppercase tracking-[0.25em] text-[#EAA33F]">Expertise</h4>
              <ul className="space-y-4">
                {expertiseLinks.map(item => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm font-bold text-slate-400 hover:text-[#EAA33F] transition-colors leading-tight block">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8 col-span-2 sm:col-span-1">
              <h4 className="text-[11px] font-black uppercase tracking-[0.25em] text-[#EAA33F]">Support</h4>
              <div className="space-y-6">
                <div>
                  <span className="text-[9px] font-bold text-slate-600 uppercase tracking-widest block mb-1">Projects</span>
                  <a href="tel:+918999925373" className="text-base font-black text-white hover:text-[#EAA33F] transition-colors block">+91 89999 25373</a>
                </div>
                <div>
                  <span className="text-[9px] font-bold text-slate-600 uppercase tracking-widest block mb-1">Technical</span>
                  <a href="tel:+917757871617" className="text-base font-black text-white hover:text-[#EAA33F] transition-colors block">+91 77578 71617</a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 🔷 FOOTER BOTTOM */}
        <div className="py-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-5">
            <div className="w-12 h-12 rounded-2xl bg-[#EAA33F]/10 flex items-center justify-center border border-[#EAA33F]/20">
              <div className="w-2.5 h-2.5 bg-[#EAA33F] rounded-full animate-pulse" />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-bold text-slate-300">
                © {currentYear} PRO COATINGS. All Rights Reserved.
              </p>
              <p className="text-[10px] uppercase font-black tracking-[0.3em] text-slate-600">
                Industrial Integrity Verified
              </p>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#EAA33F]/20 to-transparent blur opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative px-6 py-3.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl flex items-center gap-4">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Developed By</span>
              <a 
                href="https://qirotec.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[11px] font-black text-[#EAA33F] uppercase tracking-widest hover:brightness-110"
              >
                QIRO TECH INNOVATION PVT. LTD.
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}