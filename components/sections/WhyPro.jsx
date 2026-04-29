"use client";

import { Layers, ShieldCheck, Sparkles, Droplets } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link"; // Added for routing

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
    <section className="relative overflow-hidden py-16 md:py-20 bg-white">
      
      {/* Background Marble / Texture */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none"
        style={{
          backgroundImage: "url('/images/whypro/marble-bg.png')",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6">
        
        {/* HEADER SECTION - Wider layout to match image */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          {/* Title updated with Brand Navy Blue */}
          <h2 className="text-4xl md:text-[68px] font-[1000] leading-[0.9] text-[#0D2B45] uppercase tracking-tighter">
            AVERAGE COATINGS FAIL. <br />
            <span className="text-[#F5A623]">PRO COATINGS PERFORM.</span>
          </h2>
          <p className="mt-6 text-lg font-medium text-gray-700 max-w-lg">
            We don’t use shortcut coating systems. Our solutions are engineered for long-term industrial protection.
          </p>
          
          {/* Button updated to Link for navigation */}
          <Link href="/contact" className="inline-block mt-6">
            <button className="bg-[#F5A623] text-[#0D2B45] px-8 py-3.5 rounded-full font-black text-sm hover:scale-105 transition shadow-lg uppercase tracking-wider">
              Get a Free Quote
            </button>
          </Link>
        </motion.div>

        {/* CONTENT GRID: Image and Cards side-by-side */}
        <div className="flex flex-col lg:flex-row items-center lg:items-end gap-10 lg:gap-16">
          
          {/* PRODUCT IMAGE - LEFT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/3 flex justify-center lg:justify-start"
          >
            <img
              src="/images/whypro/product.png"
              alt="Pro Coatings Products"
              className="w-full max-w-[420px] drop-shadow-2xl"
            />
          </motion.div>

          {/* BENEFIT CARDS - RIGHT (Long and Slim) */}
          <div className="w-full lg:w-2/3 flex flex-col gap-4">
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
                  shadow-[0_4px_25px_rgba(13,43,69,0.08)] 
                  border border-gray-100
                  px-8 py-4 md:py-5
                  flex items-center gap-6
                  w-full lg:max-w-[850px]
                "
              >
                {/* Icon Container updated with Brand Navy */}
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#0D2B45] text-white flex items-center justify-center shrink-0">
                  {item.icon}
                </div>

                {/* Title updated with Brand Navy */}
                <h3 className="text-base md:text-[20px] font-bold text-[#0D2B45] tracking-tight">
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