"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Flame,
  Zap,
  Thermometer,
  Factory,
  Sparkles,
  ArrowRight,
  Layers3,
  ChevronRight,
  ShieldAlert
} from "lucide-react";

const coatings = [
  {
    title: "Heat Insulation",
    tag: "Thermal",
    image: "/images/services/heat.png",
    icon: Thermometer,
    desc: "Advanced thermal barrier coatings engineered to reduce heat transfer.",
  },
  {
    title: "Electrical Insulation",
    tag: "Safety",
    image: "/images/services/electrical.png",
    icon: Zap,
    desc: "Specialized insulating coatings for electrical safety and equipment protection.",
  },
  {
    title: "Anti-Corrosive",
    tag: "Defense",
    image: "/images/services/corrosion.png",
    icon: ShieldCheck,
    desc: "Heavy duty systems designed for harsh industrial and marine environments.",
  },
  {
    title: "Anti-Carbonation",
    tag: "Concrete",
    image: "/images/services/carbonation.png",
    icon: Layers3,
    desc: "Protective coatings designed to prevent concrete deterioration.",
  },
  {
    title: "Fire Resistant",
    tag: "Passive Fire",
    image: "/images/services/fire.png",
    icon: Flame,
    desc: "High-performance protection for structural and industrial safety.",
  },
  {
    title: "Customized Systems",
    tag: "Bespoke",
    image: "/images/services/customized.png",
    icon: Factory,
    desc: "Custom engineered protective solutions built for specialized needs.",
  }
];

export default function ProtectiveCoatingsPage() {
  return (
    <main className="bg-white text-[#0F3250] overflow-hidden">
      
      {/* 🟢 COMPACT ADVANCED HERO (NO IMAGE) */}
      <section className="relative pt-32 pb-20 bg-[#0F3250] overflow-hidden">
        {/* Technical Blueprint Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ 
          backgroundImage: `linear-gradient(#EAA33F 1px, transparent 1px), linear-gradient(90deg, #EAA33F 1px, transparent 1px)`,
          backgroundSize: '40px 40px' 
        }} />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#EAA33F]/30 bg-[#EAA33F]/5 text-[#EAA33F] text-[10px] font-black uppercase tracking-[0.4em] mb-6">
            <ShieldAlert size={14} className="animate-pulse" />
            Specialized Barrier Tech
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight uppercase italic">
            Protective <br />
            <span className="text-[#EAA33F] not-italic">Coatings</span>
          </h1>

          <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
            High-performance chemical defense systems for corrosion control, 
            thermal isolation, and fire safety in critical industrial sectors.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <button className="bg-[#EAA33F] text-[#0F3250] px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl shadow-orange-500/10">
                Get Consultation
              </button>
            </Link>
            <button className="px-8 py-4 rounded-xl font-black text-white border border-white/20 hover:bg-white hover:text-[#0F3250] transition-all text-xs uppercase tracking-widest">
              Defense Matrix
            </button>
          </div>
        </div>
      </section>

      {/* 🟠 STREAMLINED COATING CARDS (REDUCED HEIGHT) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl font-black text-[#0F3250] uppercase leading-none">
                Protection <span className="text-[#EAA33F]">Grades</span>
              </h2>
            </div>
            <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[3px]">6 Industrial Categories</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coatings.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-[32px] overflow-hidden border border-slate-100 hover:border-[#EAA33F]/50 transition-all duration-500 hover:shadow-2xl flex flex-col"
              >
                {/* Compact Image Height */}
                <div className="relative h-44 overflow-hidden">
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
                  
                  <div className="mt-6 pt-6 border-t border-slate-50 flex items-center justify-between">
                    <Link href="/contact" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#0F3250] hover:gap-4 transition-all">
                      Details <ChevronRight size={14} className="text-[#EAA33F]" />
                    </Link>
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {["Thermal", "Electrical", "Corrosion", "Concrete", "Fire", "Custom"].map((item, i) => (
              <div key={i} className="group p-6 rounded-2xl border border-white/10 hover:border-[#EAA33F] transition-all text-center">
                <span className="block text-[9px] font-black text-[#EAA33F] mb-2 uppercase opacity-50">Matrix 0{i+1}</span>
                <span className="text-white font-bold uppercase text-xs tracking-widest">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⚪ THE 4-STEP PROCESS (CLEAN LAYOUT) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Surface Preparation",
              "Primer Application",
              "Core Coating",
              "Quality Inspection"
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
              Advanced <br /><span className="text-[#EAA33F]">Structural Defense</span>
            </h2>
            
            <Link href="/contact">
              <button className="bg-[#EAA33F] text-[#0F3250] px-10 py-5 rounded-xl font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:scale-105 transition-all">
                Request Quote
              </button>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}