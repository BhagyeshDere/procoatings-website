"use client";

import React from "react";
import Link from "next/link";
import {
  Building2,
  Car,
  ShieldCheck,
  Layers3,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Palette,
  ParkingCircle,
  ChevronRight,
  Maximize2
} from "lucide-react";

const systems = [
  {
    title: "Car Deck Systems",
    tag: "Traffic Deck",
    image: "/images/services/cardesk.png",
    icon: ParkingCircle,
    desc: "Heavy duty car park protection designed for high-traffic abrasion and waterproofing.",
  },
  {
    title: "Anti-Skid Flooring",
    tag: "Safety First",
    image: "/images/services/antiskid.png",
    icon: ShieldCheck,
    desc: "Slip resistant performance flooring solutions engineered for safety-critical zones.",
  },
  {
    title: "Textured PU Floor",
    tag: "Premium Decor",
    image: "/images/services/textured.png",
    icon: Layers3,
    desc: "Decorative polyurethane flooring with resilient finishes for premium commercial spaces.",
  }
];

export default function ResidentialCommercialPage() {
  return (
    <main className="bg-white text-[#0F3250] overflow-hidden">
      
      {/* 🟢 COMPACT ADVANCED HERO (NO IMAGE) */}
      <section className="relative pt-32 pb-20 bg-[#0F3250] overflow-hidden">
        {/* Subtle Geometric Pattern */}
        <div className="absolute inset-0 opacity-[0.05]" style={{ 
          backgroundImage: `radial-gradient(#EAA33F 1px, transparent 1px)`, 
          backgroundSize: '32px 32px' 
        }} />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#EAA33F]/30 bg-[#EAA33F]/5 text-[#EAA33F] text-[10px] font-black uppercase tracking-[0.4em] mb-6">
            <Maximize2 size={14} className="animate-spin-slow" />
            Premium Surface Grade
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight uppercase italic">
            Residential & <br />
            <span className="text-[#EAA33F] not-italic">Commercial</span>
          </h1>

          <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
            Architectural flooring systems that bridge the gap between 
            decorative aesthetics and industrial-grade durability.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <button className="bg-[#EAA33F] text-[#0F3250] px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl shadow-orange-500/10">
                Get Consultation
              </button>
            </Link>
            <button className="px-8 py-4 rounded-xl font-black text-white border border-white/20 hover:bg-white hover:text-[#0F3250] transition-all text-xs uppercase tracking-widest">
              Surface Matrix
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
                Specialized <span className="text-[#EAA33F]">Applications</span>
              </h2>
            </div>
            <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[3px]">Performance Flooring</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {systems.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-[32px] overflow-hidden border border-slate-100 hover:border-[#EAA33F]/50 transition-all duration-500 hover:shadow-2xl flex flex-col"
              >
                {/* Compact Card Image Height */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F3250]/90 to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 group-hover:bg-[#EAA33F] group-hover:text-[#0F3250] transition-colors">
                      <item.icon size={20} />
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-6">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#EAA33F]">
                      {item.tag}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col justify-between flex-grow">
                  <h3 className="text-xl font-black text-[#0F3250] uppercase mb-3 group-hover:text-[#EAA33F] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                    {item.desc}
                  </p>
                  
                  <div className="mt-6 pt-6 border-t border-slate-50">
                    <Link href="/contact" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#0F3250] hover:gap-4 transition-all">
                      View Details <ChevronRight size={14} className="text-[#EAA33F]" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔵 MINIMALIST MATRIX */}
      <section className="py-20 bg-[#0F3250]">
        <div className="max-w-7xl mx-auto px-6 text-white text-center">
          <h2 className="text-3xl font-black uppercase tracking-widest mb-12">Solution <span className="text-[#EAA33F]">Matrix</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              ["Traffic Systems", "Car Deck Protection"],
              ["Safety Floors", "Anti-Skid Texture"],
              ["Premium Finish", "PU Textured Decor"]
            ].map((item, i) => (
              <div key={i} className="group p-10 rounded-[32px] border border-white/10 bg-white/5 hover:border-[#EAA33F] transition-all">
                <span className="text-4xl font-black text-[#EAA33F] italic block mb-4 opacity-30">0{i+1}</span>
                <h4 className="text-white font-black uppercase text-lg tracking-widest mb-2">{item[0]}</h4>
                <p className="text-slate-400 text-xs uppercase font-bold tracking-widest">{item[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⚪ THE 4-STEP EXECUTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Surface Preparation",
              "Base Priming",
              "System Casting",
              "Technical Inspection"
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
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#EAA33F]/5 rounded-full blur-3xl" />
            
            <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-8">
              Transform Your <br /><span className="text-[#EAA33F]">Facility Surfaces</span>
            </h2>
            
            <Link href="/contact">
              <button className="bg-[#EAA33F] text-[#0F3250] px-10 py-5 rounded-xl font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:scale-105 transition-all">
                Request Site Visit
              </button>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}