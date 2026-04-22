"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Icons wrapped in Fragments to prevent parsing errors in arrays
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
    <footer className="relative bg-[#051626] text-white pt-24 overflow-hidden">
      {/* 🧩 Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none" 
        style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }} 
      />

      {/* 🎨 Ambient Lighting */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#EAA33F]/10 blur-[100px] rounded-full" />
      
      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 pb-20">
          
          {/* 🔷 BRAND BLOCK */}
          <div className="lg:col-span-4 space-y-10">
            <div className="space-y-4">
              <h2 className="text-4xl font-black tracking-tighter uppercase leading-none">
                PRO<span className="text-[#EAA33F]">COATINGS</span>
              </h2>
              <div className="h-1 w-12 bg-[#EAA33F]" />
              <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-xs">
                Setting the gold standard in industrial protection. We preserve structural integrity with precision-engineered coating systems.
              </p>
            </div>

            {/* Professional Socials */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#EAA33F] hover:text-[#0F3250] transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="w-5 h-5"
                  >
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* 🔷 LINKS & CONTACT GRID */}
          <div className="lg:col-span-8 grid md:grid-cols-3 gap-12 lg:pl-12">
            
            <div className="space-y-8">
              <h4 className="text-xs font-black uppercase tracking-[0.4em] text-[#EAA33F]">Sitemap</h4>
              <ul className="space-y-4 text-sm font-bold uppercase tracking-widest text-slate-400">
                {['Home', 'About', 'Services', 'Contact'].map(link => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="hover:text-white transition-all hover:translate-x-1 inline-block">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="text-xs font-black uppercase tracking-[0.4em] text-[#EAA33F]">Location</h4>
              <div className="space-y-4">
                <p className="text-slate-300 text-sm leading-relaxed">
                  Office No.1, Mangalmurti Complex,<br />
                  Narhe-Dhayari Road, Pune<br />
                  Maharashtra - 411041
                </p>
                <div className="pt-2">
                  <p className="text-[10px] uppercase font-bold text-slate-500 mb-1">General Inquiries</p>
                  <a href="mailto:procoatings2122@gmail.com" className="text-sm font-bold hover:text-[#EAA33F] transition-colors border-b border-white/10 pb-1">
                    procoatings2122@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h4 className="text-xs font-black uppercase tracking-[0.4em] text-[#EAA33F]">Support</h4>
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Project Manager</span>
                  <p className="text-lg font-black text-white hover:text-[#EAA33F] cursor-pointer transition-colors">+91 89999 25373</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Technical Head</span>
                  <p className="text-lg font-black text-white hover:text-[#EAA33F] cursor-pointer transition-colors">+91 77578 71617</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 🔷 BOTTOM SECTION */}
        <div className="pt-8 pb-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#EAA33F]/10 flex items-center justify-center border border-[#EAA33F]/20">
              <div className="w-2 h-2 bg-[#EAA33F] rounded-full animate-pulse" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-400">© {currentYear} PRO COATINGS.</p>
              <p className="text-[9px] uppercase tracking-widest text-slate-600 font-bold">Industrial Grade Integrity</p>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#EAA33F]/20 to-transparent blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative px-5 py-2.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full flex items-center gap-4">
              <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Developed By</span>
              <span className="text-[10px] font-black text-[#EAA33F] uppercase tracking-tighter">
                QIRO TECH INNOVATION PVT. LTD.
              </span>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}