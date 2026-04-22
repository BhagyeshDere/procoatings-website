"use client";

import { motion } from "framer-motion";
import { Phone, Mail, ArrowRight, ShieldCheck } from "lucide-react";

export default function ContactCTA() {
  const BRAND_GOLD = "#EAA33F";
  const BRAND_NAVY = "#0D2B45";

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden flex items-center justify-center">
      
      {/* 🧩 Subtle Grid */}
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
            Industrial-grade protection for your infrastructure. Connect with our engineering team for a technical consultation.
          </p>
        </motion.div>

        {/* 🛠️ Improved Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary Action */}
          <a
            href="tel:08999925373"
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-4 bg-[#0D2B45] text-white rounded-full font-bold text-xs uppercase tracking-widest transition-all hover:bg-[#EAA33F] hover:shadow-xl hover:shadow-orange-500/20 active:scale-95 shadow-lg shadow-slate-200"
          >
            <Phone size={14} />
            Call Experts
          </a>

          {/* Improved Secondary Action: Higher visibility with background fill and hover border */}
          <a
            href="mailto:procoatings2122@gmail.com"
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-4 bg-slate-100/80 border border-transparent text-[#0D2B45] rounded-full font-bold text-xs uppercase tracking-widest transition-all hover:bg-white hover:border-[#0D2B45] hover:shadow-md active:scale-95"
          >
            <Mail size={14} />
            Email Us
            <ArrowRight size={14} className="opacity-40 group-hover:translate-x-1 transition-transform" />
          </a>
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