"use client";

import React from "react";
import Link from "next/link";
import {
  Sparkles,
  FlaskConical,
  Layers3,
  Factory,
  ShieldCheck,
  ChevronRight,
  Activity,
  Zap,
  Box,
  Droplets
} from "lucide-react";

const densifiers = [
  {
    title: "Sodium Silicate",
    slug: "sodium-based-hardener",
    tag: "Economical",
    image: "/images/services/sodium.png",
    icon: Factory,
    desc: "Cost-effective system improving abrasion resistance and dust proofing for industrial assets.",
  },
  {
    title: "Lithium Silicate",
    slug: "lithium-based-densifier",
    tag: "Premium",
    image: "/images/services/lithium.png",
    icon: Sparkles,
    desc: "Advanced treatment for superior polish retention and chemical resistance.",
  },
  {
    title: "Ashford Floor",
    slug: "ashford-formula-system",
    tag: "Penetrating",
    icon: Layers3,
    image: "/images/services/ashford.png",
    desc: "Permanent penetrating hardening technology engineered for heavy industrial traffic.",
  },
  {
    title: "Ashford Formula",
    slug: "ashford-formula-system",
    tag: "Molecular",
    icon: FlaskConical,
    image: "/images/services/ashford.png",
    desc: "Chemically reactive system for long lifecycle concrete performance and hardening.",
  }
];

export default function FloorDensificationPage() {
  return (
    <main className="bg-white text-[#0F3250] overflow-hidden">
      
      {/* 🟢 HERO SECTION */}
      <section className="relative bg-[#0F3250] pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden flex items-center min-h-[40vh] md:min-h-[50vh]">
        <div className="absolute top-0 right-0 w-64 h-64 md:w-80 md:h-80 bg-[#EAA33F]/10 rounded-full blur-[80px] md:blur-[120px]" />
        <div className="absolute inset-0 opacity-10" style={{ 
          backgroundImage: `radial-gradient(#EAA33F 0.5px, transparent 0.5px)`, 
          backgroundSize: '24px 24px' 
        }} />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#EAA33F]/30 bg-[#EAA33F]/10 text-[#EAA33F] text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] font-black mb-6 md:mb-8 shadow-2xl">
            <Activity size={14} className="animate-pulse" />
            Industrial Concrete Hardening
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter uppercase italic">
            <span className="block">Floor</span>
            <span className="text-[#EAA33F] not-italic block">Densification</span>
          </h1>

          <p className="mt-6 md:mt-8 text-sm md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
            Advanced chemical systems engineered to strengthen, harden, and protect 
            industrial concrete floors from heavy-duty wear.
          </p>
        </div>
      </section>

      {/* 🟠 SYSTEMS GRID */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-10 md:mb-12 gap-4 text-center md:text-left">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
                Hardening <span className="text-[#EAA33F]">Systems</span>
              </h2>
            </div>
            <p className="text-slate-400 font-bold text-[9px] md:text-[10px] uppercase tracking-[2px] md:tracking-[3px]">Performance Matrix</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            {densifiers.map((item, index) => (
              <div
                key={index}
                className="group flex flex-col bg-white rounded-[24px] md:rounded-[32px] shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-200 overflow-hidden"
              >
                <div className="relative h-44 md:h-52 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F3250]/90 via-[#0F3250]/10 to-transparent" />

                  <div className="absolute top-4 md:top-5 left-4 md:left-5">
                    <div className="w-9 h-9 md:w-10 md:h-10 bg-white/95 backdrop-blur-md rounded-lg md:rounded-xl flex items-center justify-center text-[#0F3250] shadow-xl group-hover:bg-[#EAA33F] group-hover:text-white transition-all duration-300">
                      <item.icon size={18} />
                    </div>
                  </div>

                  <div className="absolute bottom-4 md:bottom-5 left-5 md:left-6 right-5 md:right-6">
                    <span className="text-[7px] md:text-[8px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#EAA33F] block mb-1">
                      Grade: {item.tag}
                    </span>
                    <h3 className="text-lg md:text-xl font-black text-white uppercase tracking-tight italic">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="p-5 md:p-7 flex flex-col flex-grow">
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-5 md:mb-6 line-clamp-2">
                    {item.desc}
                  </p>

                  <div className="mt-auto pt-4 md:pt-5 border-t border-slate-100 flex justify-between items-center">
                    <Link
                      href={`/services/floor-densification/${item.slug}`}
                      className="group/link inline-flex items-center gap-2 md:gap-3 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-[#0F3250] transition-all"
                    >
                      <span className="bg-slate-100 group-hover/link:bg-[#0F3250] group-hover/link:text-white p-1.5 md:p-2 rounded-lg transition-colors">
                        <ChevronRight size={14} />
                      </span>
                      View Details
                    </Link>
                    <Box size={16} className="text-slate-200 hidden xs:block" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



    </main>
  );
}