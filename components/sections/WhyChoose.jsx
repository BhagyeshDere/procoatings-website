"use client";

import { motion } from "framer-motion";
import { Users, ShieldCheck, Cpu, Zap } from "lucide-react";

const features = [
  {
    title: "Expert Team",
    desc: "Highly skilled professionals with industry experience in coatings and waterproofing.",
    icon: <Users className="w-8 h-8" />,
  },
  {
    title: "Premium Materials",
    desc: "We use high-grade materials ensuring durability and long-term protection.",
    icon: <ShieldCheck className="w-8 h-8" />,
  },
  {
    title: "Modern Technology",
    desc: "Advanced tools and techniques for precision and efficiency in every project.",
    icon: <Cpu className="w-8 h-8" />,
  },
  {
    title: "Reliable Service",
    desc: "On-time project delivery with consistent quality and client satisfaction.",
    icon: <Zap className="w-8 h-8" />,
  },
];

export default function WhyChoose() {
  // Brand Color Constants for easy maintenance
  const BRAND_ORANGE = "#F5A623";
  const BRAND_NAVY = "#0D2B45";

  return (
    <section className="relative py-28 overflow-hidden bg-white">

      {/* 🔥 VIBRANT COLORFUL BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
        style={{ backgroundImage: "url('/images/hero/bg2.png')" }}
      ></div>

      {/* 🛡️ BRAND-THEMED PROTECTION LAYER */}
      {/* Blends the brand Navy with a dark scrim to let image colors peak through the top */}
      <div 
        className="absolute inset-0 transition-opacity duration-700" 
        style={{ 
          background: `linear-gradient(to bottom, rgba(13, 43, 69, 0.4) 0%, rgba(13, 43, 69, 0.7) 50%, rgba(13, 43, 69, 0.95) 100%)` 
        }}
      ></div>
      
      {/* 🧩 THEMED TECHNICAL GRID */}
      <div 
        className="absolute inset-0 opacity-[0.12] pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(${BRAND_ORANGE} 1px, transparent 1px), linear-gradient(90deg, ${BRAND_ORANGE} 1px, transparent 1px)`, 
          backgroundSize: '40px 40px' 
        }} 
      />

      {/* 🔥 CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* 🔷 HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[2px] w-12" style={{ backgroundColor: BRAND_ORANGE }} />
            <p 
              className="font-black text-sm uppercase tracking-[0.5em] drop-shadow-md"
              style={{ color: BRAND_ORANGE }}
            >
              Why Choose Us
            </p>
            <div className="h-[2px] w-12" style={{ backgroundColor: BRAND_ORANGE }} />
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter drop-shadow-xl">
            Built for <span style={{ color: BRAND_ORANGE }}>Performance</span> & Trust
          </h2>

          <p className="text-gray-100 max-w-2xl mx-auto mt-6 text-base md:text-lg font-bold leading-relaxed drop-shadow-lg">
            Delivering excellence through innovation, quality materials, and a commitment to long-lasting results.
          </p>
        </motion.div>

        {/* 🔥 THEMED GLASS CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative backdrop-blur-xl p-10 border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden shadow-2xl"
              style={{ 
                backgroundColor: 'rgba(13, 43, 69, 0.6)', // Semi-transparent Brand Navy
                borderRadius: '12px' 
              }} 
            >
              {/* BRAND COLOR ACCENT (Top border) */}
              <div 
                className="absolute top-0 left-0 w-full h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" 
                style={{ backgroundColor: BRAND_ORANGE }}
              />

              {/* 🔥 TECHNICAL ICON */}
              <div 
                className="relative w-16 h-16 flex items-center justify-center border transition-all duration-500 rounded-xl mb-8"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderColor: 'rgba(255, 255, 255, 0.1)' 
                }}
              >
                <div 
                  className="transition-colors duration-500 group-hover:text-white"
                  style={{ color: BRAND_ORANGE }}
                >
                    {item.icon}
                </div>
              </div>

              {/* 🔥 TITLE */}
              <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tight group-hover:text-white transition-colors drop-shadow-sm">
                {item.title}
              </h3>

              {/* 🔥 DESC */}
              <p className="text-gray-300 text-sm leading-relaxed font-semibold group-hover:text-white transition-colors">
                {item.desc}
              </p>

              {/* 🔥 BRAND DASH */}
              <div className="mt-8 flex items-center gap-2">
                <div 
                  className="h-[3px] w-8 transition-all duration-500 group-hover:w-full" 
                  style={{ backgroundColor: BRAND_ORANGE }}
                />
              </div>

              {/* Subtle Brand Glow inside card */}
              <div 
                className="absolute -bottom-12 -right-12 w-32 h-32 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full"
                style={{ backgroundColor: BRAND_ORANGE }}
              />

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}