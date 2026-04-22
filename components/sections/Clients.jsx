"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  { name: "Benfield Fodder", logo: "/logos/benfield.png" },
  { name: "Sarthanu Products", logo: "/logos/sarthanu.png" },
  { name: "Dynalec Controls", logo: "/logos/dynalec.png" },
  { name: "Pennant Engineering", logo: "/logos/pennant.png" },
  { name: "ABSource Biologics", logo: "/logos/absource.png" },
  { name: "Kaka Halwai Sweets", logo: "/logos/kaka-halwai.png" },
  { name: "K Krushnaa Infra", logo: "/logos/krushnaa.png" },
  { name: "Web Werk", logo: "/logos/web-werk.png" },
  { name: "Capgemini", logo: "/logos/capgemini.png" },
];

export default function Clients() {
  const BRAND_ORANGE = "#F5A623";
  const BRAND_NAVY = "#0D2B45";

  return (
    <section className="relative py-24 md:py-32 bg-[#F8FAFC] overflow-hidden">
      
      {/* 🧩 Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(${BRAND_NAVY} 1px, transparent 1px), linear-gradient(90deg, ${BRAND_NAVY} 1px, transparent 1px)`, 
          backgroundSize: '45px 45px' 
        }} 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* 🔷 HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-slate-300" />
            <p className="font-black text-[10px] md:text-xs uppercase tracking-[0.5em] text-[#F5A623]">
              Global Partners
            </p>
            <div className="h-[1px] w-12 bg-slate-300" />
          </div>

          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9]" style={{ color: BRAND_NAVY }}>
            Our Growing <span className="text-transparent" style={{ WebkitTextStroke: `1.5px ${BRAND_NAVY}` }}>Network</span>
          </h2>
        </motion.div>

        {/* 🔥 MARQUEE SLIDER */}
        <div className="relative">
          {/* Gradient Overlays for Smooth Fading */}
          <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-[#F8FAFC] to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-[#F8FAFC] to-transparent z-20 pointer-events-none" />

          <div className="flex overflow-hidden group">
            <motion.div 
              className="flex flex-nowrap gap-4 md:gap-8"
              animate={{ x: [0, -1920] }} // Adjust based on total width of cards
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 35,
                  ease: "linear",
                },
              }}
            >
              {[...clients, ...clients, ...clients].map((client, i) => (
                <div
                  key={i}
                  className="relative min-w-[200px] md:min-w-[280px] h-28 md:h-36 bg-white border border-slate-200/60 flex flex-col items-center justify-center p-6 transition-all duration-500 hover:border-[#F5A623]/40 group/card overflow-hidden shadow-sm hover:shadow-xl hover:shadow-orange-500/5"
                >
                  {/* Decorative Elements */}
                  <div className="absolute top-2 left-2 w-1.5 h-1.5 border-t border-l border-slate-300 group-hover/card:border-[#F5A623]" />
                  <div className="absolute bottom-2 right-2 w-1.5 h-1.5 border-b border-r border-slate-300 group-hover/card:border-[#F5A623]" />

                  {/* Logo Container */}
                  <div className="relative w-full h-full flex items-center justify-center transition-transform duration-500 group-hover/card:scale-110">
                    {/* Placeholder for actual Image component - logic handles missing logos */}
                    {client.logo ? (
                      <div className="relative w-full h-12 md:h-16 grayscale opacity-70 group-hover/card:grayscale-0 group-hover/card:opacity-100 transition-all duration-500 mix-blend-multiply">
                         <img 
                          src={client.logo} 
                          alt={client.name}
                          className="w-full h-full object-contain"
                          onError={(e) => (e.currentTarget.style.display = 'none')} 
                        />
                        {/* Fallback Text if image fails */}
                        <p className="absolute inset-0 flex items-center justify-center text-center font-bold text-[#0D2B45] text-xs md:text-sm tracking-tight px-2">
                           {client.name}
                        </p>
                      </div>
                    ) : (
                      <p className="text-center font-bold text-[#0D2B45] text-xs md:text-sm tracking-tight">
                        {client.name}
                      </p>
                    )}
                  </div>

                  {/* Bottom Highlight Line */}
                  <div 
                    className="absolute bottom-0 left-0 h-[3px] w-0 group-hover/card:w-full transition-all duration-700 ease-in-out"
                    style={{ backgroundColor: BRAND_ORANGE }}
                  />
                  
                  {/* Background Watermark */}
                  <span className="absolute -bottom-1 -right-1 text-2xl font-black text-slate-100 opacity-0 group-hover/card:opacity-40 transition-opacity pointer-events-none uppercase italic select-none">
                    LEADER
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* 📊 STATUS BAR */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-6 opacity-40">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-500">Infrastructure Verified</span>
          </div>
          <div className="h-[1px] flex-grow mx-8 bg-slate-200 hidden md:block" />
          <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-500">
            Precision • Integrity • Solutions
          </p>
        </div>

      </div>
    </section>
  );
}