"use client";

import { motion } from "framer-motion";
import { Eye, Target, Zap } from "lucide-react";

export default function AboutVisionMission() {
  return (
    // Reduced padding from py-24/40 to py-12/20 to tighten upper and bottom gaps
    <section className="py-12 md:py-20 bg-white relative overflow-hidden">
      
      {/* Dynamic Background Elements - Optimized positioning */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
        <div className="absolute top-0 right-[-5%] w-[400px] h-[400px] bg-[#F5A623]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-[-5%] w-[400px] h-[400px] bg-[#0D2B45]/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col gap-6">
          
          {/* Header Area - Reduced mb-12 to mb-8 */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#0D2B45] text-[#F5A623] text-[10px] font-black uppercase tracking-[0.3em]">
                Strategic Intent
              </span>
              <h2 className="text-5xl md:text-7xl font-black text-[#0D2B45] uppercase tracking-tighter leading-[0.85]">
                Core <br /> <span className="text-slate-300">Philosophies</span>
              </h2>
            </div>
            <p className="max-w-xs text-slate-500 font-bold text-sm leading-relaxed border-l-2 border-[#F5A623] pl-6">
              Engineering the future of industrial protection through clarity of sight and precision of action.
            </p>
          </div>

          {/* Unique Bento-Style Layout */}
          <div className="grid lg:grid-cols-12 gap-6">
            
            {/* VISION CARD - Large Focus */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 group relative bg-[#0D2B45] rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-14 overflow-hidden text-white"
            >
              {/* Abstract Icon Overlay */}
              <Eye className="absolute -right-10 -bottom-10 w-64 h-64 text-white/5 group-hover:text-[#F5A623]/10 transition-colors duration-700" />
              
              <div className="relative z-10 space-y-8">
                <div className="w-14 h-14 rounded-2xl bg-[#F5A623] flex items-center justify-center text-[#0D2B45] shadow-[0_0_30px_rgba(245,166,35,0.3)]">
                  <Eye size={32} strokeWidth={2.5} />
                </div>
                <div className="space-y-6">
                  <h3 className="text-[#F5A623] text-sm font-black uppercase tracking-[0.4em]">Our Vision</h3>
                  <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                    Redefining <br /> Global <br /> Standards.
                  </h2>
                  <p className="text-white/60 text-lg md:text-xl font-bold leading-relaxed max-w-md">
                    To lead the industrial landscape by pioneering <span className="text-white">sustainable coating technologies</span> that protect infrastructure for generations.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* MISSION CARD - Vertical Alignment */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-5 flex flex-col gap-6"
            >
              <div className="flex-1 bg-slate-50 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-10 border border-slate-100 hover:border-[#F5A623]/30 transition-colors group">
                <div className="flex justify-between items-start mb-8 md:mb-12">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#F5A623] group-hover:bg-[#F5A623] group-hover:text-white transition-all duration-500">
                    <Target size={32} strokeWidth={2.5} />
                  </div>
                  <Zap className="text-slate-200 group-hover:text-[#F5A623] transition-colors" />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-[#0D2B45]/40 text-xs font-black uppercase tracking-[0.4em]">Our Mission</h3>
                  <h2 className="text-3xl md:text-4xl font-black text-[#0D2B45] uppercase tracking-tighter leading-tight">
                    Precision In <br /> Every Layer.
                  </h2>
                  <p className="text-slate-500 text-base font-bold leading-relaxed">
                    Empowering industries with high-performance epoxy and waterproofing through technical mastery and absolute precision.
                  </p>
                </div>
              </div>

              {/* Bottom Mini-Card / Trust Bar */}
              <div className="bg-[#F5A623] rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 flex items-center justify-between group cursor-default">
                <div className="text-[#0D2B45]">
                  <p className="text-[10px] font-black uppercase tracking-widest mb-1 opacity-70">Focus Area</p>
                  <p className="text-xl font-black uppercase tracking-tighter">Indian Subcontinent</p>
                </div>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#0D2B45]/20 flex items-center justify-center group-hover:rotate-12 transition-transform">
                  <Zap size={20} className="text-[#0D2B45]" />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}