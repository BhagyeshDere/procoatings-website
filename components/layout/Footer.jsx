"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      name: "LinkedIn", 
      href: "#", 
      icon: (
        <>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
          <circle cx="4" cy="4" r="2"/>
        </>
      ) 
    },
    { 
      name: "Instagram", 
      href: "#", 
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
      href: "#", 
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
          
          {/* 🔷 BRAND BLOCK */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight uppercase leading-none">
                PRO<span className="text-[#EAA33F]">COATINGS</span>
              </h2>
              <div className="h-1 w-14 bg-[#EAA33F]" />
              <p className="text-slate-400 text-base md:text-lg font-medium leading-relaxed max-w-md">
                Setting the gold standard in industrial protection. We preserve structural integrity with precision-engineered coating systems across India.
              </p>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.href}
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
                {['Home', 'About', 'Services', 'Gallery', 'Contact'].map(link => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-sm font-bold text-slate-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-[11px] font-black uppercase tracking-[0.25em] text-[#EAA33F]">Expertise</h4>
              <ul className="space-y-4">
                {['Waterproofing', 'Epoxy Flooring', 'PU Coating', 'Densification'].map(item => (
                  <li key={item} className="text-sm font-bold text-slate-500 hover:text-[#EAA33F] cursor-pointer transition-colors leading-tight">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8 col-span-2 sm:col-span-1">
              <h4 className="text-[11px] font-black uppercase tracking-[0.25em] text-[#EAA33F]">Support</h4>
              <div className="space-y-6">
                <div>
                  <span className="text-[9px] font-bold text-slate-600 uppercase tracking-widest block mb-1">Projects</span>
                  <p className="text-base font-black text-white hover:text-[#EAA33F] transition-colors cursor-pointer">+91 89999 25373</p>
                </div>
                <div>
                  <span className="text-[9px] font-bold text-slate-600 uppercase tracking-widest block mb-1">Technical</span>
                  <p className="text-base font-black text-white hover:text-[#EAA33F] transition-colors cursor-pointer">+91 77578 71617</p>
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
              <span className="text-[11px] font-black text-[#EAA33F] uppercase tracking-widest">
                QIRO TECH INNOVATION
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}