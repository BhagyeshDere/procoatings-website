"use client";

import React from "react";
import Link from "next/link";
import {
  Factory,
  Layers3,
  ShieldCheck,
  Zap,
  Gauge,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ChevronRight
} from "lucide-react";

const systems = [
  {
    title: "Epoxy Flooring",
    tag: "Heavy Duty",
    image: "/images/services/epoxy.png",
    desc: "Seamless high-performance epoxy systems for durability and chemical resistance.",
  },
  {
    title: "PU Flooring",
    tag: "Thermal Shock",
    image: "/images/services/pu.png",
    desc: "Polyurethane systems built for thermal resistance and hygienic environments.",
  },
  {
    title: "EPU Coating",
    tag: "Hybrid Tech",
    image: "/images/services/epu.png",
    desc: "Advanced hybrid flooring delivering superior impact and wear protection.",
  },
  {
    title: "Dielectric Epoxy",
    tag: "Safety",
    image: "/images/services/dielectric.png",
    desc: "Specialized insulating systems for high-risk electrical operational zones.",
  },
  {
    title: "ESD PU Flooring",
    tag: "Static Control",
    image: "/images/services/esd.png",
    desc: "ESD control flooring engineered for electronics and cleanroom apps.",
  }
];

export default function IndustrialFlooringPage() {
  return (
    <main className="bg-white text-[#0F3250] overflow-hidden">
      
      {/* 🟢 COMPACT HERO SECTION (NO IMAGE) */}
      <section className="relative pt-32 pb-20 bg-[#0F3250] overflow-hidden">
        {/* Subtle Technical Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ 
          backgroundImage: `radial-gradient(#EAA33F 0.5px, transparent 0.5px)`, 
          backgroundSize: '30px 30px' 
        }} />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center flex flex-col items-center">
          <span className="px-4 py-1.5 rounded-full border border-[#EAA33F]/30 bg-[#EAA33F]/5 text-[#EAA33F] text-[10px] font-black uppercase tracking-[0.4em] mb-6 animate-pulse">
            Precision Surface Engineering
          </span>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight uppercase italic">
            Industrial <br />
            <span className="text-[#EAA33F] not-italic">Floor Coatings</span>
          </h1>

          <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
            Engineered resin flooring for manufacturing, pharma, and high-traffic 
            industrial environments. Built for zero-failure performance.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <button className="bg-[#EAA33F] text-[#0F3250] px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl shadow-orange-500/10">
                Get Consultation
              </button>
            </Link>
            <button className="px-8 py-4 rounded-xl font-black text-white border border-white/20 hover:bg-white hover:text-[#0F3250] transition-all text-xs uppercase tracking-widest">
              View Matrix
            </button>
          </div>
        </div>
      </section>

      {/* 🟠 STREAMLINED SYSTEM CARDS (REDUCED HEIGHT) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl font-black text-[#0F3250] uppercase leading-none">
                Coating <span className="text-[#EAA33F]">Systems</span>
              </h2>
            </div>
            <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[3px]">High-Performance Grade</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {systems.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-[32px] overflow-hidden border border-slate-100 hover:border-[#EAA33F]/50 transition-all duration-500 hover:shadow-2xl flex flex-col"
              >
                {/* Reduced Card Image Height */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F3250]/90 to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <div className="px-3 py-1 bg-[#EAA33F] text-[#0F3250] text-[10px] font-black uppercase tracking-widest rounded-lg">
                      {item.tag}
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="text-xl font-black text-white uppercase tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="p-8 flex flex-col justify-between flex-grow">
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                    {item.desc}
                  </p>
                  
                  <div className="mt-6 pt-6 border-t border-slate-50 flex items-center justify-between">
                    <Link href="/contact" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#0F3250] hover:text-[#EAA33F] transition-colors">
                      Specifications <ChevronRight size={14} />
                    </Link>
                    <Layers3 size={18} className="text-slate-200" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔵 MINIMALIST MATRIX SECTION */}
      <section className="py-20 bg-[#0F3250]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {["Epoxy", "PU Systems", "Hybrid EPU", "Dielectric", "ESD Control"].map((item, i) => (
              <div key={i} className="group p-6 rounded-2xl border border-white/5 bg-white/5 hover:bg-[#EAA33F] transition-all text-center">
                <span className="block text-[9px] font-black text-[#EAA33F] group-hover:text-[#0F3250] mb-2 uppercase opacity-60">System 0{i+1}</span>
                <span className="text-white group-hover:text-[#0F3250] font-bold uppercase text-xs tracking-widest">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⚪ THE 4-STEP PROCESS (HORIZONTAL) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Surface Preparation",
              "System Priming",
              "Base Application",
              "Seal & Finish"
            ].map((step, i) => (
              <div key={i} className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                   <span className="text-3xl font-black text-[#EAA33F] italic">0{i+1}</span>
                   <div className="h-[1px] flex-grow bg-slate-100" />
                </div>
                <h4 className="text-sm font-black uppercase text-[#0F3250] tracking-wider">{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔥 FINAL COMPACT CTA */}
      <section className="pb-24 pt-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-[40px] bg-gradient-to-br from-[#0F3250] to-[#1a4a70] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#EAA33F]/5 rounded-full blur-3xl" />
            
            <h2 className="text-4xl font-black uppercase leading-tight mb-8">
              Reliable Industrial <br /><span className="text-[#EAA33F]">Coatings</span>
            </h2>
            
            <Link href="/contact">
              <button className="bg-[#EAA33F] text-[#0F3250] px-10 py-5 rounded-xl font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:scale-105 transition-all">
                Request Proposal
              </button>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}