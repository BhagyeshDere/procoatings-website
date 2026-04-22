"use client";

import { motion } from "framer-motion";

export default function About() {
  const revealVariants = {
    hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0 },
    visible: { 
      clipPath: "inset(0 0% 0 0)", 
      opacity: 1,
      transition: { duration: 1.2, ease: [0.77, 0, 0.175, 1] } 
    },
  };

  return (
    <section className="relative w-full py-16 md:py-24 bg-[#F8F9FA] overflow-hidden text-[#0F3250]">
      
      {/* 🧩 Background "Blueprint" Watermark */}
      <div className="absolute top-10 left-10 opacity-[0.02] pointer-events-none hidden lg:block">
        <svg width="400" height="400" viewBox="0 0 100 100" fill="none" stroke="currentColor">
          <circle cx="50" cy="50" r="48" strokeWidth="0.1" />
          <path d="M0 50H100M50 0V100" strokeWidth="0.1" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 items-center">
          
          {/* 🔷 LEFT: THE VISUAL ANCHOR (Height improved to match text content) */}
          <div className="lg:w-[45%] relative">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              /* Desktop: 4/4.5 ratio balances with the right-side text height */
              /* Mobile: 16/10 ratio prevents excessive scrolling */
              className="relative aspect-[16/10] lg:aspect-[4/4.5] overflow-hidden rounded-tr-[5rem] lg:rounded-tr-[10rem] shadow-2xl"
            >
              <img 
                src="/images/waterproofing/main.png" 
                className="w-full h-full object-cover scale-110" 
                alt="Industrial Infrastructure" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F3250]/60 via-transparent to-transparent" />
              
              {/* Floating Tech Stat Overlay */}
              <div className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10 lg:right-10 p-4 lg:p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-sm">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-[#EAA33F] text-[10px] font-bold uppercase tracking-[0.3em] mb-1">Standard Compliance</p>
                    <p className="text-white text-xl font-black">ISO 9001:2026</p>
                  </div>
                  <div className="w-10 h-10 lg:w-12 lg:h-12 border-2 border-dashed border-[#EAA33F]/50 rounded-full animate-spin-slow" />
                </div>
              </div>
            </motion.div>

            {/* Unique Vertical Label */}
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 -rotate-90 origin-left hidden xl:block">
              <span className="text-[10px] font-mono font-bold tracking-[1em] text-slate-300 uppercase whitespace-nowrap">
                ESTABLISHED // MULTI-SECTOR RELIABILITY
              </span>
            </div>
          </div>

          {/* 🔷 RIGHT: THE CONTENT FLOW */}
          <div className="lg:w-[55%] lg:pl-20 flex flex-col justify-center">
            
            <div className="absolute top-0 right-0 opacity-[0.03] select-none pointer-events-none hidden xl:block">
              <h1 className="text-[12rem] font-black leading-none tracking-tighter">COAT</h1>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="inline-block bg-[#EAA33F] px-4 py-1 mb-6">
                <span className="text-[#0F3250] text-[10px] font-black uppercase tracking-widest">About Pro Coatings</span>
              </div>

              <h2 className="text-5xl md:text-6xl font-black leading-[0.9] tracking-tighter uppercase mb-8">
                PRESERVING <br />
                <span className="text-[#EAA33F]">ASSETS</span> WITH <br />
                PRECISION.
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mt-10">
                <div className="space-y-5">
                  <p className="text-lg font-bold leading-tight text-slate-800">
                    National leadership in high-performance protective coating systems.
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    We specialize in delivering structural integrity where traditional methods fail, utilizing advanced chemical technologies that outperform industry benchmarks.
                  </p>
                </div>

                <div className="bg-[#0F3250] p-7 text-white rounded-bl-[3rem]">
                  <h4 className="text-[#EAA33F] text-xs font-black uppercase tracking-widest mb-4">Core Capabilities</h4>
                  <ul className="space-y-2.5 text-[12px] font-medium opacity-90">
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#EAA33F]" /> Structural Waterproofing</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#EAA33F]" /> Industrial Epoxy Flooring</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#EAA33F]" /> Anti-Corrosive Systems</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#EAA33F]" /> Thermal Insulation</li>
                  </ul>
                </div>
              </div>

              {/* 🛠️ Action & Stats */}
              <div className="mt-12 flex flex-col md:flex-row items-start md:items-center gap-10">
                <button className="group relative flex items-center gap-5">
                   <div className="w-14 h-14 bg-[#0F3250] flex items-center justify-center rounded-full transition-transform duration-500 group-hover:scale-110">
                     <svg className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                   </div>
                   <div className="flex flex-col text-left">
                     <span className="text-[10px] font-black uppercase tracking-widest text-[#EAA33F]">Action</span>
                     <span className="text-sm font-black uppercase">Explore Our Projects</span>
                   </div>
                </button>

                <div className="flex gap-10 border-l border-slate-200 pl-10">
                   <div>
                     <p className="text-4xl font-black mb-1">150+</p>
                     <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 italic">Success Ratio</p>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
}