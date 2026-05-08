"use client";

import { Layers, ShieldCheck, Sparkles, Droplets } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const benefits = [
  {
    icon: <Layers size={26} />,
    title: "Industrial-Grade 5-Layer Epoxy & Coating Systems",
  },
  {
    icon: <ShieldCheck size={26} />,
    title: "High-Performance Waterproofing & Surface Protection",
  },
  {
    icon: <Sparkles size={26} />,
    title: "Chemical Resistant, Seamless & Professional Finishes",
  },
  {
    icon: <Droplets size={26} />,
    title: "Anti-slip, Crack Resistant & Long-Term Durability",
  },
];

export default function WhyPro() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-white">
      
      {/* Background Marble / Texture */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none"
        style={{
          backgroundImage: "url('/images/whypro/marble-bg.png')",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6">
        
        {/* HEADER SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-[72px] font-[1000] leading-[0.9] text-[#0D2B45] uppercase tracking-tighter">
            AVERAGE COATINGS FAIL. <br />
            <span className="text-[#F5A623]">PRO COATINGS PERFORM.</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl font-medium text-gray-700 max-w-2xl">
            We don’t use shortcut coating systems. Our solutions are engineered for long-term industrial protection.
          </p>
          
          <Link href="/contact" className="inline-block mt-8">
            <button className="bg-[#F5A623] text-[#0D2B45] px-10 py-4 rounded-full font-black text-sm hover:scale-105 transition shadow-xl uppercase tracking-wider">
              Get a Free Quote
            </button>
          </Link>
        </motion.div>

        {/* CONTENT GRID: Larger Image and Cards */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* PRODUCT IMAGE - LEFT (Size Improved) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full lg:w-[45%] flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-[550px] lg:max-w-none">
                <img
                src="/images/whypro/product1.png"
                alt="Pro Coatings Products"
                className="w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] hover:scale-105 transition-transform duration-700"
                />
            </div>
          </motion.div>

          {/* BENEFIT CARDS - RIGHT */}
          <div className="w-full lg:w-[55%] flex flex-col gap-5">
            {benefits.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="
                  bg-white 
                  rounded-full 
                  shadow-[0_10px_30px_rgba(13,43,69,0.06)] 
                  border border-gray-100/50
                  px-8 py-5 md:py-6
                  flex items-center gap-6
                  w-full
                  hover:shadow-[0_15px_40px_rgba(13,43,69,0.12)]
                  transition-shadow duration-300
                "
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#0D2B45] text-white flex items-center justify-center shrink-0 shadow-inner">
                  {item.icon}
                </div>

                <h3 className="text-base md:text-[22px] font-bold text-[#0D2B45] tracking-tight leading-snug">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}