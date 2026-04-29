"use client";

import { motion } from "framer-motion";

const serviceHighlights = [
  {
    title: "Structural Waterproofing",
    desc: "Precision multi-layer moisture barriers.",
    video: "/video/v1.mp4",
    id: "SRV-01"
  },
  {
    title: "High-Performance Flooring",
    desc: "Heavy-duty seamless epoxy resin systems.",
    video: "/video/v2.mp4",
    id: "SRV-02"
  },
  {
    title: "Anti-Corrosive Coatings",
    desc: "Extreme environment protective layering.",
    video: "/video/hero.mp4",
    id: "SRV-03"
  }
];

export default function VideoServices() {
  return (
    <section className="relative py-16 md:py-24 bg-[#F8FAFC] overflow-hidden text-[#0F3250]">
      
      {/* 🧩 Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.06] pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(#0F3250 1px, transparent 1px)', 
          backgroundSize: '30px 30px' 
        }} 
      />

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">

        {/* 🔷 HEADER SECTION */}
        <div className="max-w-4xl mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[2px] w-12 bg-[#EAA33F]" />
            <span className="text-[#EAA33F] text-[11px] font-black uppercase tracking-[0.6em]">Service Divisions</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter uppercase"
          >
            Industrial <br />
            <span className="text-slate-300">Specializations.</span>
          </motion.h2>
        </div>

        {/* 🔥 SYMMETRIC SERVICE VIDEO CARDS - TEXT REMOVED */}
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {serviceHighlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="group relative h-[500px] md:h-[650px] overflow-hidden bg-slate-900 rounded-sm shadow-2xl"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
              >
                <source src={item.video} type="video/mp4" />
              </video>

              {/* Decorative Accent Border (Optional, appears on hover) */}
              <div className="absolute inset-0 border-[0px] group-hover:border-[12px] border-[#EAA33F]/20 transition-all duration-700 pointer-events-none z-20" />
            </motion.div>
          ))}
        </div>

        {/* 🛠️ SERVICE STATUS FOOTER */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-wrap justify-between items-center gap-8 opacity-60">
            <div className="flex gap-12">
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Standard</span>
                <span className="text-sm font-bold">ASME / ASTM Compliant</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Response</span>
                <span className="text-sm font-bold">24/7 Field Tech Support</span>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="text-right">
                <span className="block text-[10px] font-black uppercase tracking-widest">Global Reach</span>
                <span className="text-xs font-bold text-[#EAA33F]">Pan-India Service Network</span>
              </div>
              <div className="w-10 h-10 border border-[#0F3250]/20 flex items-center justify-center animate-spin-slow">
                  <div className="w-2 h-2 bg-[#EAA33F]" />
              </div>
            </div>
        </div>

      </div>
    </section>
  );
}