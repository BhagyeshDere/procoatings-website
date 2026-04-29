"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Users, ShieldCheck, Cpu, Zap, Activity, Crosshair } from "lucide-react";

const features = [
  {
    title: "Expert Team",
    desc: "Highly skilled professionals with industry experience in coatings and waterproofing.",
    icon: <Users className="w-5 h-5" />,
    id: "01"
  },
  {
    title: "Premium Materials",
    desc: "We use high-grade materials ensuring durability and long-term protection.",
    icon: <ShieldCheck className="w-5 h-5" />,
    id: "02"
  },
  {
    title: "Modern Technology",
    desc: "Advanced tools and techniques for precision and efficiency in every project.",
    icon: <Cpu className="w-5 h-5" />,
    id: "03"
  },
  {
    title: "Reliable Service",
    desc: "On-time project delivery with consistent quality and client satisfaction.",
    icon: <Zap className="w-5 h-5" />,
    id: "04"
  },
];

export default function WhyChoose() {
  const LOGO_GOLD = "#D98F07";
  const LOGO_NAVY = "#002B49"; 

  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section className="relative min-h-screen py-24 bg-[#F4F7FA] overflow-hidden flex items-center selection:bg-[#D98F07] selection:text-white">
      
      {/* 🌌 DYNAMIC BACKGROUND ARCHITECTURE */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-[#D98F07]/5 rounded-full blur-[120px]"
        />
        <motion.div 
          style={{ y: y1 }}
          className="absolute bottom-20 left-[-5%] w-[400px] h-[400px] bg-[#002B49]/5 rounded-full blur-[100px]"
        />
      </div>

      {/* 📟 REFINED HUD GRID (Active Overlay) */}
      <div className="absolute inset-0 opacity-[0.1] pointer-events-none z-10">
        <div className="h-full w-full" style={{ 
          backgroundImage: `radial-gradient(${LOGO_GOLD} 1.5px, transparent 1.5px)`, 
          backgroundSize: '40px 40px' 
        }} />
      </div>

      <div className="relative z-20 max-w-[1440px] mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center">
          
          {/* 🔷 LEFT SIDE: IMPROVED HEADLINE SECTION */}
          <div className="lg:w-2/5 flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Floating Header Tag */}
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white border-l-4 border-[#D98F07] shadow-sm mb-10">
                <Activity size={14} className="text-[#D98F07] animate-pulse" />
                <span className="text-[#002B49] text-[10px] font-black uppercase tracking-[0.4em]">Strategic Advantage</span>
              </div>
              
              {/* UPDATED HEADLINE: Why Choose Pro Coatings */}
              <h2 className="text-6xl md:text-[85px] font-black text-[#002B49] leading-[0.85] uppercase tracking-tighter mb-10">
                <span className="text-transparent" style={{ WebkitTextStroke: `1.5px ${LOGO_NAVY}` }}>WHY</span> <br /> 
                CHOOSE <br />
                <span className="text-[#D98F07]">PRO COATINGS</span>
              </h2>
              
              <div className="relative p-8 bg-white/40 backdrop-blur-xl border border-white/60 shadow-2xl overflow-hidden mb-12">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#D98F07]" />
                <p className="relative z-10 text-[#002B49]/80 text-lg font-bold leading-relaxed">
                  Engineered excellence in structural defense. We deliver high-performance coating solutions backed by precision technology and elite expertise.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-1">
                  <p className="text-[#002B49] text-5xl font-black tracking-tighter italic">100%</p>
                  <div className="flex items-center gap-2">
                    <div className="h-[2px] w-4 bg-[#D98F07]" />
                    <p className="text-[9px] font-black text-[#002B49]/40 uppercase tracking-widest">Consistency Matrix</p>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-[#002B49] text-5xl font-black tracking-tighter italic">24/7</p>
                  <div className="flex items-center gap-2">
                    <div className="h-[2px] w-4 bg-[#D98F07]" />
                    <p className="text-[9px] font-black text-[#002B49]/40 uppercase tracking-widest">Global Support</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 🧩 RIGHT SIDE: GEOMETRIC NODE GRID */}
          <div className="lg:w-3/5 grid gap-8 w-full">
            {features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 50 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Asymmetrical Shape Wrapper */}
                <div 
                  className="relative p-[1px] bg-gradient-to-r from-[#002B49]/20 to-transparent group-hover:from-[#D98F07] transition-all duration-500"
                  style={{ clipPath: "polygon(0% 0%, 95% 0%, 100% 50%, 95% 100%, 0% 100%)" }}
                >
                  <div 
                    className="relative flex flex-col md:flex-row items-center gap-8 bg-white p-8 md:pl-12 md:pr-16 group-hover:bg-[#002B49] transition-all duration-500"
                    style={{ clipPath: "polygon(0% 0%, 95% 0%, 100% 50%, 95% 100%, 0% 100%)" }}
                  >
                    
                    {/* Industrial Icon Node */}
                    <div className="relative shrink-0">
                      <div className="w-20 h-20 flex items-center justify-center bg-[#F4F7FA] text-[#002B49] group-hover:bg-[#D98F07] group-hover:text-white transition-all duration-500 relative">
                        {/* Scanning Bar Animation */}
                        <div className="absolute inset-0 bg-white/20 h-[2px] top-0 animate-[scan_2s_linear_infinite] group-hover:bg-[#002B49]/40" />
                        <div className="relative z-10 scale-125">
                            {item.icon}
                        </div>
                      </div>
                      <Crosshair className="absolute -top-2 -left-2 w-4 h-4 text-[#D98F07] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    {/* Content Section */}
                    <div className="flex-grow text-center md:text-left">
                      <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
                        <span className="font-mono text-[10px] text-[#D98F07]">[{item.id}]</span>
                        <h3 className="text-2xl font-black text-[#002B49] uppercase tracking-tight group-hover:text-white transition-colors">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-[#002B49]/60 text-sm font-bold leading-relaxed max-w-xl group-hover:text-white/60 transition-colors">
                        {item.desc}
                      </p>
                    </div>

                    {/* Arrow Icon removed from this section */}
                  </div>
                </div>

                {/* Technical Node Labels */}
                <div className="absolute -bottom-4 left-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[8px] font-black uppercase text-[#D98F07] tracking-[0.5em]">Protocol_Active</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      <style jsx global>{`
        @keyframes scan {
          0% { top: 0% }
          100% { top: 100% }
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}