"use client";

import { motion } from "framer-motion";
import { HardHat, Cpu, ShieldCheck, Users } from "lucide-react";

const highlights = [
  {
    title: "Proven Expertise",
    desc: "Delivering high-performance waterproofing and coating solutions across complex industrial landscapes.",
    icon: <HardHat className="w-6 h-6" />,
    id: "SYS-01"
  },
  {
    title: "Advanced Tech",
    desc: "Using precision-grade polymers and cutting-edge application techniques for long-lasting protection.",
    icon: <Cpu className="w-6 h-6" />,
    id: "SYS-02"
  },
  {
    title: "Quality Assurance",
    desc: "Strict multi-stage quality control protocols ensuring maximum durability in extreme environments.",
    icon: <ShieldCheck className="w-6 h-6" />,
    id: "SYS-03"
  },
  {
    title: "Client Centric",
    desc: "Trusted by industry leaders for consistent results, timely execution, and technical reliability.",
    icon: <Users className="w-6 h-6" />,
    id: "SYS-04"
  },
];

export default function Stats() {
  return (
    <section className="relative py-32 bg-white overflow-hidden text-[#0F3250]">
      
      {/* 🧩 Blueprint Grid Overlay (Light Theme) */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(#0F3250 1px, transparent 1px), linear-gradient(90deg, #0F3250 1px, transparent 1px)', 
          backgroundSize: '50px 50px' 
        }} 
      />

      {/* 🎨 Subtle Warm Glow */}
      <div className="absolute top-0 left-[-10%] w-[40%] h-[40%] bg-[#EAA33F]/10 blur-[120px] rounded-full" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">

        {/* 🔷 DYNAMIC HEADER */}
        <div className="max-w-3xl mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[2px] w-12 bg-[#EAA33F]" />
            <span className="text-[#EAA33F] text-[10px] font-black uppercase tracking-[0.6em]">The Pro Advantage</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase mb-8"
          >
            Quality at <br />
            {/* 🎨 Single Theme Color Fill Applied Here */}
            <span className="text-[#EAA33F]">
              Every Scale.
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-slate-500 font-medium text-lg max-w-xl leading-relaxed"
          >
            Our commitment to innovation and precision makes us a trusted partner in industrial coating and structural protection.
          </motion.p>
        </div>

        {/* 🔥 DARK CARDS ON LIGHT BG */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Unique Shape Dark Container */}
              <div 
                className="relative bg-[#0F172A] p-8 h-full min-h-[380px] flex flex-col justify-between transition-all duration-500 overflow-hidden shadow-2xl"
                style={{ clipPath: 'polygon(15% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%, 0% 15%)' }}
              >
                {/* Subtle internal glow on hover */}
                <div className="absolute inset-0 bg-[#EAA33F]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Laser line animation */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#EAA33F] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-14">
                    <div className="w-14 h-14 bg-slate-800 border border-white/10 flex items-center justify-center text-white group-hover:bg-[#EAA33F] group-hover:text-[#0F172A] transition-all duration-500 shadow-[0_0_20px_rgba(234,163,63,0.2)]">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-black text-slate-500 tracking-widest uppercase">
                      {item.id}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-white uppercase tracking-tight mb-4 group-hover:text-[#EAA33F] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 text-sm font-medium leading-relaxed group-hover:text-slate-200 transition-colors">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Status Bar */}
                <div className="relative z-10 pt-6 border-t border-white/5 flex items-center justify-between">
                   <div className="flex gap-1.5">
                      {[1,2,3].map(dot => (
                        <div key={dot} className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-[#EAA33F] transition-colors" />
                      ))}
                   </div>
                   <span className="text-[8px] font-bold text-slate-500 tracking-widest group-hover:text-white transition-colors uppercase">Secured_System</span>
                </div>
              </div>

              {/* Decorative shadow layer for the unique shape */}
              <div 
                className="absolute inset-0 bg-[#0F172A]/20 -z-10 translate-x-2 translate-y-2 blur-sm group-hover:translate-x-0 group-hover:translate-y-0 transition-transform" 
                style={{ clipPath: 'polygon(15% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%, 0% 15%)' }}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}