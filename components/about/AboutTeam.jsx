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
    <section className="py-24 md:py-40 bg-white relative overflow-hidden">
      {/* 🧩 BACKGROUND DECORATIVE ELEMENTS */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-0 items-stretch bg-[#0D2B45] rounded-[3rem] overflow-hidden shadow-2xl">
          
          {/* 🚀 LEFT SIDE: THE "ENGINEERING IDENTITY" CARD */}
          <div className="lg:col-span-5 relative p-10 md:p-16 flex flex-col justify-between overflow-hidden group">
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
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-[#F5A623] flex items-center justify-center text-[#0D2B45] shadow-[0_0_50px_rgba(245,166,35,0.3)] mb-10">
                <HardHat size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-6">
                Our <br /> <span className="text-[#F5A623]">Expert</span> <br /> Core.
              </h3>
            </motion.div>

            <div className="relative z-10 pt-12 border-t border-white/10">
               <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 block mb-2">Technical Unit</span>
               <p className="text-white text-lg font-bold">Certified Surface Technicians</p>
            </div>
          </div>

          {/* 🛠️ RIGHT SIDE: THE CONTENT & METRICS GRID */}
          <div className="lg:col-span-7 bg-slate-50/5 p-10 md:p-16 flex flex-col justify-center border-l border-white/10 relative">
            <div className="max-w-xl space-y-8">
              <div className="space-y-6">
                <h4 className="text-[#F5A623] text-xs font-black uppercase tracking-[0.4em] flex items-center gap-3">
                  <span className="w-8 h-px bg-[#F5A623]"></span> Human Intelligence
                </h4>
                <p className="text-white text-xl md:text-2xl font-bold leading-relaxed">
                  Our team combines <span className="text-slate-400 italic">decades of field experience</span> with advanced material science to deliver coatings that outperform global industrial standards.
                </p>
                <p className="text-white/40 text-sm font-bold leading-relaxed">
                  From moisture mapping to final DFT audits, every step is executed by specialists trained in climate-specific application methodologies.
                </p>
              </div>

              {/* Advanced Metric Bars */}
              <div className="grid sm:grid-cols-3 gap-4 pt-8">
                {qualities.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="p-6 bg-white/5 border border-white/10 rounded-2xl group hover:border-[#F5A623]/50 transition-all"
                  >
                    <div className="text-[#F5A623] mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                      {item.icon}
                    </div>
                    <div className="text-2xl font-black text-white tracking-tighter mb-1">{item.val}</div>
                    <div className="text-[9px] uppercase font-black tracking-widest text-white/30 group-hover:text-[#F5A623] transition-colors">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Subtle Diagonal Accents */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <div className="absolute top-0 right-0 w-px h-full bg-white rotate-45 origin-top translate-x-10" />
                <div className="absolute top-0 right-0 w-px h-full bg-white rotate-45 origin-top translate-x-20" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}