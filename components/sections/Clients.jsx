"use client";

import { motion } from "framer-motion";

const clients = [
  "Benfield Fodder",
  "Sarthanu Products Pvt. Ltd.",
  "Dynalec Controls Pvt. Ltd.",
  "Pennant Engineering Pvt. Ltd.",
  "ABSource Biologics Pvt. Ltd.",
  "Kaka Halwai Sweets",
  "K Krushnaa Infra Pvt. Ltd.",
  "Uniteq",
  "Web Werk",
  "Capgemini",
];

export default function Clients() {
  const BRAND_ORANGE = "#F5A623";
  const BRAND_NAVY = "#0D2B45";

  return (
    <section className="relative py-28 bg-[#F8FAFC] overflow-hidden">
      
      {/* 🧩 TECHNICAL GRID OVERLAY (Light Version) */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(${BRAND_NAVY} 1px, transparent 1px), linear-gradient(90deg, ${BRAND_NAVY} 1px, transparent 1px)`, 
          backgroundSize: '40px 40px' 
        }} 
      />

      {/* 🔥 BACKGROUND DECOR */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-slate-200/50 blur-[100px] rounded-full -mr-40 -mt-40"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#F5A623]/10 blur-[80px] rounded-full -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* 🔷 HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[2px] w-8" style={{ backgroundColor: BRAND_ORANGE }}></span>
            <p className="font-bold text-xs uppercase tracking-[0.4em]" style={{ color: BRAND_ORANGE }}>
              Trusted Partners
            </p>
            <span className="h-[2px] w-8" style={{ backgroundColor: BRAND_ORANGE }}></span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none" style={{ color: BRAND_NAVY }}>
            Our Growing <span className="text-transparent" style={{ WebkitTextStroke: `1px ${BRAND_NAVY}` }}>Network</span>
          </h2>

          <p className="text-slate-500 max-w-xl mx-auto mt-6 text-sm md:text-base font-medium">
            Collaborating with industry leaders to deliver precision-engineered 
            coating and waterproofing solutions.
          </p>
        </motion.div>

        {/* 🔥 ADVANCED MARQUEE SLIDER */}
        <div className="relative group">
          {/* Edge Masking for Smooth Fade */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#F8FAFC] to-transparent z-20 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#F8FAFC] to-transparent z-20 pointer-events-none"></div>

          <div className="flex overflow-hidden select-none gap-6">
            <motion.div 
              className="flex flex-nowrap gap-6 min-w-full"
              animate={{ x: [0, -1000] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {[...clients, ...clients, ...clients].map((client, i) => (
                <div
                  key={i}
                  className="relative min-w-[280px] h-24 bg-white border border-slate-200 flex items-center justify-center px-8 transition-all duration-500 hover:border-[#F5A623]/50 group/card overflow-hidden"
                  style={{ borderRadius: '4px' }}
                >
                  {/* Decorative corner '+' markers */}
                  <span className="absolute top-1 left-1 text-[10px] text-slate-300 transition-colors group-hover/card:text-[#F5A623]">+</span>
                  <span className="absolute bottom-1 right-1 text-[10px] text-slate-300 transition-colors group-hover/card:text-[#F5A623]">+</span>

                  {/* Subtle Background Text Effect */}
                  <span className="absolute -bottom-2 -right-2 text-4xl font-black text-slate-50 opacity-0 group-hover/card:opacity-100 transition-opacity pointer-events-none uppercase italic">
                    Partner
                  </span>

                  <p className="relative z-10 text-center font-bold text-[#0D2B45] text-sm tracking-tight group-hover/card:scale-105 transition-transform duration-500">
                    {client}
                  </p>

                  {/* Hover Bottom Bar */}
                  <div 
                    className="absolute bottom-0 left-0 h-[2px] w-0 group-hover/card:w-full transition-all duration-500"
                    style={{ backgroundColor: BRAND_ORANGE }}
                  ></div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* 📊 FOOTER STAT (Optional Visual Interest) */}
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4"
        >
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: BRAND_ORANGE }}></div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">System Live: Connection Secured</span>
            </div>
            <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                © 2026 Industrial Network Division
            </p>
        </motion.div>

      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}