"use client";

import { motion } from "framer-motion";
import { Zap, Shield } from "lucide-react";

export default function AboutIdentity() {
  return (
    // Reduced vertical padding to remove extra gaps (py-12 md:py-16)
    <section className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10 md:gap-16 items-start">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-[#F5A623] text-xs font-black uppercase tracking-[0.3em] flex items-center gap-3"
              >
                <span className="w-10 h-px bg-[#F5A623]"></span> Our Story
              </motion.h3>
              <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none text-[#0D2B45]">
                Trusted <br /> Partners.
              </h2>
            </div>

            <div className="space-y-6 text-slate-600 text-lg font-bold leading-relaxed">
              <p>
                Pro Coatings delivers specialized <span className="text-[#0D2B45] font-black underline decoration-[#F5A623] decoration-2 underline-offset-4">waterproofing, epoxy, and industrial protective coatings</span> across diverse high-stakes sectors.
              </p>
              <p className="text-base text-slate-500 font-bold">
                Our commitment to quality, precision, and reliability has earned us the trust of leading clients nationwide, establishing Pro Coatings as a reliable partner.
              </p>
            </div>

            <div className="pt-2">
              <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 text-slate-700 text-lg relative">
                <span className="absolute -top-4 left-8 text-6xl text-[#F5A623]/20 font-black">“</span>
                <p className="font-bold relative z-10">
                  The strength of the team is each individual member. The strength of each member is the team.
                </p>
                <footer className="mt-4 text-sm font-black uppercase tracking-widest text-[#0D2B45]">— Phil Jackson</footer>
              </div>
            </div>
          </div>

          {/* Right Column: Image & Feature Grid */}
          <div className="lg:col-span-7 grid md:grid-cols-2 gap-6 items-start">
            <div className="space-y-6">
              <div className="h-[280px] md:h-[350px] rounded-[2.5rem] overflow-hidden shadow-xl bg-slate-200">
                <img 
                  src="/images/about/epoxy.png" 
                  className="w-full h-full object-cover" 
                  alt="Industrial Coating" 
                />
              </div>
              <div className="p-8 bg-[#0D2B45] rounded-[2rem] text-white">
                <Zap className="text-[#F5A623] mb-4" size={32} />
                <h4 className="text-xl font-black uppercase mb-2">Efficiency</h4>
                <p className="text-white/50 text-sm font-bold leading-snug">
                  Advanced technology and high-grade materials for energy-efficient solutions.
                </p>
              </div>
            </div>

            {/* Reduced pt-12 to pt-8 to keep bottom gap minimal */}
            <div className="space-y-6 md:pt-8">
              <div className="p-8 bg-[#F5A623] rounded-[2rem] text-[#0D2B45]">
                <Shield className="mb-4" size={32} />
                <h4 className="text-xl font-black uppercase mb-2">Durability</h4>
                <p className="text-[#0D2B45]/70 text-sm font-bold leading-snug">
                  Ensuring long-lasting and environment-friendly protection systems.
                </p>
              </div>
              <div className="h-[280px] md:h-[350px] rounded-[2.5rem] overflow-hidden shadow-xl bg-slate-200">
                <img 
                  src="/images/about/external-walls.jpeg" 
                  className="w-full h-full object-cover" 
                  alt="Waterproofing Application" 
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}