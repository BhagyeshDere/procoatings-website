"use client";

import { motion } from "framer-motion";

const services = [
  {
    id: "01",
    title: "Waterproofing Solutions",
    desc: "Advanced multi-layer protection for structural integrity, ensuring zero-permeability for industrial foundations.",
    img: "/images/waterproofing/main.png",
    // Tighter staggering for better vertical flow
    position: "lg:translate-y-0"
  },
  {
    id: "02",
    title: "Epoxy Flooring",
    desc: "High-grade, seamless chemical-resistant resin systems engineered for heavy-duty manufacturing environments.",
    img: "/images/flooring/floor1.png",
    position: "lg:translate-y-8"
  },
  {
    id: "03",
    title: "Industrial Coatings",
    desc: "Specialized anti-corrosive treatments designed to withstand extreme thermal and chemical stress.",
    img: "/images/hero/bg2.png",
    position: "lg:translate-y-16"
  },
];

export default function Services() {
  return (
    <section id="services" className="relative pt-24 pb-24 md:pt-32 md:pb-32 bg-white overflow-hidden text-[#0F3250]">
      
      {/* 🧩 Blueprint Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#0F3250 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
      
      {/* Ambient Glows */}
      <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-[#EAA33F]/5 blur-[120px] rounded-full animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* 🔷 HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-[2px] bg-[#EAA33F]"></span>
              <span className="text-[#EAA33F] text-xs font-black uppercase tracking-[0.4em]">Core Capabilities</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter uppercase">
              Engineered <br />
              <span className="text-slate-300">Protection.</span>
            </h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-slate-500 font-medium max-w-sm border-l-2 border-slate-100 pl-6"
          >
            Delivering high-performance industrial solutions designed to extend the life of critical infrastructure.
          </motion.p>
        </div>

        {/* 🔥 OPTIMIZED GRID: Increased card height, reduced gaps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className={`group relative h-[550px] md:h-[650px] overflow-hidden rounded-sm bg-slate-900 ${service.position}`}
            >
              {/* Image Layer */}
              <div className="absolute inset-0 z-0">
                <motion.img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover opacity-80 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10" />
              </div>

              {/* Technical ID Overlay */}
              <div className="absolute top-8 left-8 z-20">
                <span className="text-7xl font-black text-white/10 tracking-tighter group-hover:text-[#EAA33F]/20 transition-colors duration-500">
                  {service.id}
                </span>
              </div>

              {/* Content Box */}
              <div className="absolute bottom-0 left-0 w-full p-10 z-20">
                <div className="overflow-hidden">
                   <motion.h3 className="text-3xl font-black text-white uppercase tracking-tight mb-4 transition-transform duration-500 group-hover:-translate-y-1">
                    {service.title}
                  </motion.h3>
                </div>
                
                <p className="text-slate-300 text-base leading-relaxed mb-8 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  {service.desc}
                </p>

                {/* Animated Line */}
                <div className="relative h-[2px] w-full bg-white/10 overflow-hidden">
                  <div className="absolute top-0 left-0 h-full w-full bg-[#EAA33F] -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                </div>
              </div>

              {/* Border Glow */}
              <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 transition-colors duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* 🛠️ FOOTER: Reduced top margin for a tighter fit */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 md:mt-24 pt-10 border-t border-slate-100 flex flex-wrap items-center justify-between gap-6"
        >
          <div className="flex gap-12">
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Standard</span>
                <span className="text-sm font-bold">ISO 9001:2015</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Coverage</span>
                <span className="text-sm font-bold">Pan India Service</span>
              </div>
          </div>
          <button className="text-[11px] font-black uppercase tracking-[0.3em] text-[#0F3250] flex items-center gap-4 group">
            Explore All Solutions 
            <span className="w-10 h-[1px] bg-[#0F3250] group-hover:w-16 transition-all duration-500"></span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}