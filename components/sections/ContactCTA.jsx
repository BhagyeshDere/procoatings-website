"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function ContactCTA() {
  const BRAND_GOLD = "#EAA33F";
  const BRAND_NAVY = "#0D2B45";

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden flex items-center justify-center">
      
      {/* 🧩 Subtle Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(${BRAND_NAVY} 1px, transparent 1px), linear-gradient(90deg, ${BRAND_NAVY} 1px, transparent 1px)`,
          backgroundSize: '40px 40px' 
        }} 
      />

      <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
        
        {/* 🚀 Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-black leading-tight uppercase text-[#0D2B45] tracking-tighter">
            Build with <span className="text-[#EAA33F]">Confidence.</span>
          </h2>
          
          <p className="mt-6 text-base md:text-lg text-slate-500 font-medium max-w-xl mx-auto leading-relaxed">
            Ready to protect your infrastructure? Start a technical consultation with our engineering team today.
          </p>
        </motion.div>

        {/* 🛠️ Single Contact Page Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10 flex justify-center"
        >
          <Link
            href="/contact"
            className="group w-full sm:w-auto flex items-center justify-center gap-4 px-12 py-5 bg-[#0D2B45] text-white rounded-full font-bold text-sm uppercase tracking-[0.2em] transition-all hover:bg-[#EAA33F] hover:shadow-2xl hover:shadow-orange-500/30 active:scale-95 shadow-xl shadow-slate-200"
          >
            <MessageSquare size={18} className="transition-transform group-hover:-rotate-12" />
            Get In Touch
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
          </Link>
        </motion.div>

        {/* 🛡️ Footer Accent */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex items-center justify-center gap-2"
        >
          <ShieldCheck size={16} className="text-[#EAA33F]" />
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            ISO 9001:2015 Certified
          </span>
        </motion.div>

      </div>
    </section>
  );
}