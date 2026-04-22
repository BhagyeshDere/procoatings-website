"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sliderImages = [
  "/images/hero/bg1.png",
  "/images/hero/bg2.png",
  "/images/hero/bg3.png",
];

export default function About() {
  const [current, setCurrent] = useState(0);

  // Automatic Slider Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const revealVariants = {
    hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0 },
    visible: { 
      clipPath: "inset(0 0% 0 0)", 
      opacity: 1,
      transition: { duration: 1.2, ease: [0.77, 0, 0.175, 1] } 
    },
  };

  return (
    <section className="relative w-full py-12 md:py-16 bg-[#F8F9FA] overflow-hidden text-[#0F3250]">
      
      {/* 🧩 Background "Blueprint" Watermark */}
      <div className="absolute top-10 left-10 opacity-[0.02] pointer-events-none hidden lg:block">
        <svg width="300" height="300" viewBox="0 0 100 100" fill="none" stroke="currentColor">
          <circle cx="50" cy="50" r="48" strokeWidth="0.1" />
          <path d="M0 50H100M50 0V100" strokeWidth="0.1" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 items-center">
          
          {/* 🔷 LEFT: THE VISUAL ANCHOR */}
          <div className="lg:w-[45%] relative">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              className="relative aspect-[16/9] lg:aspect-[4/4] overflow-hidden rounded-tr-[4rem] lg:rounded-tr-[8rem] shadow-2xl bg-slate-200"
            >
              <AnimatePresence mode="wait">
                <motion.img 
                  key={current}
                  src={sliderImages[current]} 
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1.1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover" 
                  alt="Industrial Infrastructure" 
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-[#0F3250]/60 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            <div className="absolute -left-4 top-1/2 -translate-y-1/2 -rotate-90 origin-left hidden xl:block">
              <span className="text-[10px] font-mono font-bold tracking-[1em] text-slate-300 uppercase whitespace-nowrap">
                STRENGTH YOU SEE // TRUST YOU FEEL
              </span>
            </div>
          </div>

          {/* 🔷 RIGHT: THE CONTENT FLOW */}
          <div className="lg:w-[55%] lg:pl-16 flex flex-col justify-center">
            
            <div className="absolute top-0 right-0 opacity-[0.02] select-none pointer-events-none hidden xl:block">
              <h1 className="text-[10rem] font-black leading-none tracking-tighter">ABOUT</h1>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="inline-block bg-[#EAA33F] px-4 py-1 mb-4">
                <span className="text-[#0F3250] text-[10px] font-black uppercase tracking-widest">Established Reliability</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-black leading-[0.95] tracking-tighter uppercase mb-6">
                STRENGTH YOU <br />
                <span className="text-[#EAA33F]">SEE</span>, TRUST <br />
                YOU FEEL.
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="space-y-4">
                  <p className="text-lg font-bold leading-tight text-slate-800">
                    Delivering high-grade protective coatings across diverse nationwide sectors.
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Backed by highly qualified professionals, we combine advanced technology and efficient methodologies to ensure long-lasting, environment-friendly, and energy-efficient solutions.
                  </p>
                </div>

                <div className="bg-[#0F3250] p-6 text-white rounded-bl-[2.5rem]">
                  <h4 className="text-[#EAA33F] text-xs font-black uppercase tracking-widest mb-3">Core Expertise</h4>
                  <ul className="space-y-2 text-[12px] font-medium opacity-90">
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#EAA33F]" /> Specialized Waterproofing</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#EAA33F]" /> Industrial Epoxy Flooring</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#EAA33F]" /> Floor Densification</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#EAA33F]" /> Car Deck & ESD Flooring</li>
                  </ul>
                </div>
              </div>

              {/* 🛠️ Action & Stats */}
              <div className="mt-8 flex flex-col md:flex-row items-start md:items-center gap-8">
                <button className="group relative flex items-center gap-4">
                   <div className="w-12 h-12 bg-[#0F3250] flex items-center justify-center rounded-full transition-transform duration-500 group-hover:scale-110">
                     <svg className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                   </div>
                   <div className="flex flex-col text-left">
                     <span className="text-[9px] font-black uppercase tracking-widest text-[#EAA33F]">View Catalog</span>
                     <span className="text-sm font-black uppercase">Industrial Solutions</span>
                   </div>
                </button>

                <div className="flex gap-8 border-l border-slate-200 pl-8">
                   <div>
                     <p className="text-3xl font-black mb-0">ISO</p>
                     <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 italic">9001:2015 Verified</p>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}