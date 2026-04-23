"use client";

import { motion } from "framer-motion";
import { Users, ShieldCheck, Cpu, Zap, ChevronRight } from "lucide-react";

const features = [
  {
    title: "Expert Team",
    desc: "Highly skilled professionals with industry experience in coatings and waterproofing.",
    icon: <Users className="w-6 h-6" />,
    id: "01"
  },
  {
    title: "Premium Materials",
    desc: "We use high-grade materials ensuring durability and long-term protection.",
    icon: <ShieldCheck className="w-6 h-6" />,
    id: "02"
  },
  {
    title: "Modern Technology",
    desc: "Advanced tools and techniques for precision and efficiency in every project.",
    icon: <Cpu className="w-6 h-6" />,
    id: "03"
  },
  {
    title: "Reliable Service",
    desc: "On-time project delivery with consistent quality and client satisfaction.",
    icon: <Zap className="w-6 h-6" />,
    id: "04"
  },
];

export default function WhyChoose() {
  const BRAND_ORANGE = "#EAA33F";

  return (
    <section className="relative min-h-screen py-24 flex items-center overflow-hidden bg-[#0A0C10]">
      
      {/* 🖼️ IMMERSIVE FULL-SIZE BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-full h-full bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/images/flooring/esd.png')" }}
        />
        
        {/* 🌑 OPTIMIZED VISIBILITY LAYER */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0C10]/95 via-[#0A0C10]/50 to-transparent z-10" />
        <div className="absolute inset-0 bg-black/20 z-10" />
      </div>

      {/* 🧩 TECHNICAL HUD OVERLAY */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-10">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#EAA33F] to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#EAA33F] to-transparent" />
        <div className="h-full w-full" style={{ 
          backgroundImage: `radial-gradient(circle, ${BRAND_ORANGE} 1px, transparent 1px)`, 
          backgroundSize: '60px 60px' 
        }} />
      </div>

      <div className="relative z-20 max-w-[1440px] mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row gap-16 lg:items-center">
          
          {/* 🔷 LEFT: STRATEGIC HEADER */}
          <div className="lg:w-2/5">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[2px] bg-[#EAA33F]" />
                <p className="text-[#EAA33F] text-xs font-black uppercase tracking-[0.5em]">Why Choose Us</p>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter uppercase mb-8 drop-shadow-2xl">
                Built for <span style={{ color: BRAND_ORANGE }}>Performance</span> & Trust
              </h2>
              
              <p className="text-white text-lg font-bold leading-relaxed max-w-md border-l-4 border-[#EAA33F] pl-6 drop-shadow-xl opacity-90">
                Delivering excellence through innovation, quality materials, and a commitment to long-lasting results.
              </p>

              <div className="mt-12 flex items-center gap-10">
                 <div className="drop-shadow-lg">
                   <p className="text-white text-4xl font-black">100%</p>
                   <p className="text-[10px] font-bold text-[#EAA33F] uppercase tracking-widest">Quality Assurance</p>
                 </div>
                 <div className="w-[1px] h-10 bg-white/30" />
                 <div className="drop-shadow-lg">
                   <p className="text-white text-4xl font-black">24/7</p>
                   <p className="text-[10px] font-bold text-[#EAA33F] uppercase tracking-widest">Client Support</p>
                 </div>
              </div>
            </motion.div>
          </div>

          {/* 🔷 RIGHT: TRANSPARENT LIGHT THEME GRID */}
          <div className="lg:w-3/5 grid sm:grid-cols-2 gap-6">
            {features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                /* Updated to Transparent Light Theme: bg-white/10 and high blur */
                className="group relative bg-white/10 backdrop-blur-xl border border-white/20 p-8 hover:bg-white/20 hover:border-white/40 transition-all duration-500 overflow-hidden rounded-sm shadow-2xl"
              >
                {/* ID Counter - Ghosted White */}
                <span className="absolute top-4 right-6 text-white/5 text-5xl font-black italic transition-colors group-hover:text-white/10">
                  {item.id}
                </span>

                <div className="relative z-10">
                  <div className="w-14 h-14 flex items-center justify-center bg-white/10 text-white mb-6 group-hover:bg-[#EAA33F] group-hover:text-[#0A0C10] transition-all duration-300 rounded-lg">
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-black text-white uppercase tracking-tight mb-3 drop-shadow-md">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed font-semibold mb-6 group-hover:text-white transition-colors">
                    {item.desc}
                  </p>

                  <div className="flex items-center gap-2 group/btn cursor-pointer">
                    <span className="text-[10px] font-black text-[#EAA33F] uppercase tracking-widest drop-shadow-sm">Explore More</span>
                    <ChevronRight className="w-4 h-4 text-[#EAA33F] group-hover/btn:translate-x-2 transition-transform" />
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white/20 group-hover:border-[#EAA33F] transition-colors" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white/20 group-hover:border-[#EAA33F] transition-colors" />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}