"use client";

import { motion } from "framer-motion";
import { Phone, Mail, ArrowUpRight, ShieldCheck, Globe, Zap } from "lucide-react";

export default function ContactCTA() {
  const BRAND_GOLD = "#EAA33F";
  const BRAND_NAVY = "#0D2B45";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <section className="relative py-24 md:py-44 bg-white overflow-hidden">
      
      {/* 🧩 Blueprint Grid Accents (Light) */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(${BRAND_NAVY} 1px, transparent 1px), linear-gradient(90deg, ${BRAND_NAVY} 1px, transparent 1px)`,
          backgroundSize: '60px 60px' 
        }} 
      />
      
      {/* 🎨 Subtle Ambient Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-slate-100 blur-[120px] rounded-full translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#EAA33F]/5 blur-[100px] rounded-full -translate-x-1/4 translate-y-1/4" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24"
        >
          
          {/* 🔷 LEFT: TEXTUAL CORE */}
          <div className="lg:w-3/5 space-y-10">
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <div className="h-[1px] w-12 bg-[#EAA33F]" />
              <p className="text-[#EAA33F] text-[11px] font-black uppercase tracking-[0.5em]">
                Project Consultation
              </p>
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase text-[#0D2B45]">
              Secure Your <br />
              <span className="text-transparent" style={{ WebkitTextStroke: `1.5px ${BRAND_NAVY}` }}>Structure’s</span> <br />
              <span className="text-[#EAA33F]">Future Now.</span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-xl text-slate-500 max-w-xl font-medium leading-relaxed">
              Deployment-ready engineering for industrial chemical barriers and high-performance waterproofing.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-6 pt-4">
              <a
                href="tel:08999925373"
                className="group relative px-10 py-6 bg-[#0D2B45] text-white rounded-full font-black text-xs tracking-widest uppercase overflow-hidden transition-all hover:shadow-2xl hover:shadow-[#0D2B45]/20 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Phone size={18} /> Call Experts
                </span>
                <div className="absolute inset-0 bg-[#EAA33F] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>

              <a
                href="mailto:procoatings2122@gmail.com"
                className="group px-10 py-6 border-2 border-slate-200 text-[#0D2B45] rounded-full font-black text-xs tracking-widest uppercase hover:bg-slate-50 transition-all flex items-center gap-3 active:scale-95"
              >
                <Mail size={18} /> Send Brief <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* 🔷 RIGHT: TECHNICAL SPEC LIST (Non-Boxed) */}
          <motion.div 
            variants={itemVariants}
            className="lg:w-2/5 w-full flex flex-col gap-10 lg:pt-20"
          >
            {[
              { label: "Durability", value: "25+ Years Coverage", icon: <ShieldCheck className="text-[#EAA33F]" /> },
              { label: "Network", value: "Pan-India Deployment", icon: <Globe className="text-[#EAA33F]" /> },
              { label: "Efficiency", value: "Rapid Response Tech", icon: <Zap className="text-[#EAA33F]" /> },
            ].map((stat, idx) => (
              <div key={idx} className="group flex items-start gap-6 border-b border-slate-100 pb-8">
                <div className="mt-1 transition-transform duration-500 group-hover:rotate-[360deg]">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">{stat.label}</p>
                  <p className="text-xl font-bold text-[#0D2B45]">{stat.value}</p>
                </div>
              </div>
            ))}
            
            <div className="mt-4 p-8 bg-slate-50 border-l-4 border-[#EAA33F] rounded-r-2xl">
              <p className="text-sm font-bold text-[#0D2B45] mb-1">Industrial Compliance Verified</p>
              <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">ISO 9001:2015 Standards</p>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Decorative Large Background Text */}
      <div className="absolute -bottom-10 left-10 pointer-events-none opacity-[0.02] select-none">
        <h3 className="text-[15rem] font-black leading-none uppercase">Contact</h3>
      </div>
    </section>
  );
}