"use client";

import { motion } from "framer-motion";
import { HardHat, Users, Award, ShieldCheck } from "lucide-react";

export default function AboutTeam() {
  const qualities = [
    { label: "Precision", val: "100%", icon: <Award size={14} /> },
    { label: "Longevity", val: "Zero Decay", icon: <ShieldCheck size={14} /> },
    { label: "Scale", val: "Pan India", icon: <Users size={14} /> },
  ];

  return (
    <section className="py-12 md:py-20 bg-white relative overflow-hidden">
      {/* 🧩 BACKGROUND DECORATIVE ELEMENTS */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-0 items-stretch rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl relative border border-slate-200">
          
          {/* 🖼️ VIBRANT BACKGROUND IMAGE */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/hero/bg3.png" 
              alt="Industrial Background" 
              className="w-full h-full object-cover" // Full color image
            />
            {/* Subtle darkening layer just to pop the white text */}
            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* 🚀 LEFT SIDE: FROSTED GLASS IDENTITY */}
          <div className="lg:col-span-5 relative z-10 p-8 md:p-16 flex flex-col justify-between overflow-hidden group border-b lg:border-b-0 lg:border-r border-white/20 bg-black/20 backdrop-blur-md">
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity duration-700">
               <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(#F5A623 1px, transparent 0px)`, backgroundSize: '24px 24px' }} />
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl md:rounded-3xl bg-[#F5A623] flex items-center justify-center text-[#0D2B45] shadow-2xl mb-8 md:mb-10">
                <HardHat strokeWidth={1.5} className="w-10 h-10 md:w-12 md:h-12" />
              </div>
              <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-6 drop-shadow-xl">
                Our <br /> <span className="text-[#F5A623]">Expert</span> <br /> Core.
              </h3>
            </motion.div>

            <div className="relative z-10 pt-8 md:pt-12 border-t border-white/20">
               <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/70 block mb-2">Technical Unit</span>
               <p className="text-white text-lg font-bold">Certified Surface Technicians</p>
            </div>
          </div>

          {/* 🛠️ RIGHT SIDE: THE CONTENT & METRICS GRID */}
          <div className="lg:col-span-7 relative z-10 p-8 md:p-16 flex flex-col justify-center bg-white/10 backdrop-blur-sm">
            <div className="max-w-xl space-y-6 md:space-y-8">
              <div className="space-y-4 md:space-y-6">
                <h4 className="text-[#F5A623] text-xs font-black uppercase tracking-[0.4em] flex items-center gap-3">
                  <span className="w-8 h-px bg-[#F5A623]"></span> Human Intelligence
                </h4>
                <p className="text-white text-xl md:text-2xl font-bold leading-relaxed drop-shadow-lg">
                  Our team combines <span className="text-white italic underline decoration-[#F5A623]/40 underline-offset-4">decades of field experience</span> with advanced material science.
                </p>
                <div className="bg-black/40 p-4 rounded-xl border border-white/10 backdrop-blur-md">
                  <p className="text-white/90 text-sm font-medium leading-relaxed">
                    From moisture mapping to final DFT audits, every step is executed by specialists trained in climate-specific application methodologies.
                  </p>
                </div>
              </div>

              {/* Advanced Metric Bars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 md:pt-8">
                {qualities.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="p-5 md:p-6 bg-black/60 backdrop-blur-xl border border-white/20 rounded-2xl group hover:border-[#F5A623]/50 transition-all"
                  >
                    <div className="text-[#F5A623] mb-3 md:mb-4 opacity-100 transition-opacity">
                      {item.icon}
                    </div>
                    <div className="text-xl md:text-2xl font-black text-white tracking-tighter mb-1">{item.val}</div>
                    <div className="text-[9px] uppercase font-black tracking-widest text-[#F5A623] transition-colors">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Subtle Diagonal Accents */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-20 hidden md:block">
                <div className="absolute top-0 right-0 w-px h-full bg-white rotate-45 origin-top translate-x-10" />
                <div className="absolute top-0 right-0 w-px h-full bg-white rotate-45 origin-top translate-x-20" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}