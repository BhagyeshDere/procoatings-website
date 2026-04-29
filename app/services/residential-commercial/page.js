"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Layers3,
  ParkingCircle,
  ChevronRight,
  Maximize2,
  Activity // Added a subtle indicator icon for the badge
} from "lucide-react";

const systems = [
  {
    title: "Car Deck Systems",
    slug: "car-deck-systems",
    tag: "Traffic Deck",
    image: "/images/services/podium.png",
    icon: ParkingCircle,
    desc: "Heavy duty car park protection designed for high-traffic abrasion and waterproofing.",
  },
  {
    title: "Anti-Skid Flooring",
    slug: "anti-skid-flooring",
    tag: "Safety First",
    image: "/images/services/antiskid.png",
    icon: ShieldCheck,
    desc: "Slip resistant performance flooring solutions engineered for safety-critical zones.",
  },
  {
    title: "Textured PU Floor",
    slug: "textured-pu-floor",
    tag: "Premium Decor",
    image: "/images/services/pu.png",
    icon: Layers3,
    desc: "Decorative polyurethane flooring with resilient finishes for premium commercial spaces.",
  }
];

export default function ResidentialCommercialPage() {
  return (
    <main className="bg-white text-[#0F3250] overflow-hidden">
      
      {/* 🟢 UPDATED: LIGHT THEME HERO SECTION */}
      <section className="relative pt-32 pb-20 bg-white overflow-hidden border-b border-slate-100">
        {/* Subtle Light Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `radial-gradient(#0F3250 0.5px, transparent 0.5px)`,
            backgroundSize: "32px 32px"
          }}
        />
        
        {/* Decorative Radial Fade */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-[#EAA33F]/5 to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0F3250]/10 bg-slate-50 text-[#0F3250] text-[10px] font-black uppercase tracking-[0.4em] mb-6 shadow-sm">
            <Maximize2 size={14} className="text-[#EAA33F]" />
            Premium Surface Grade
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-[#0F3250] leading-tight uppercase italic">
            Residential &
            <br />
            <span className="text-[#EAA33F] not-italic">
              Commercial
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-500 max-w-2xl leading-relaxed px-4 font-medium">
            Architectural flooring systems that bridge the gap between
            decorative aesthetics and <span className="text-[#0F3250] font-bold">industrial-grade durability.</span>
          </p>
        </div>
      </section>

      {/* --- REMAINDER OF CODE UNTOUCHED --- */}

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl font-black uppercase">
                Specialized
                <span className="text-[#EAA33F]"> Applications</span>
              </h2>
            </div>
            <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[3px]">
              Performance Flooring
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {systems.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-[32px] overflow-hidden border border-slate-100 hover:border-[#EAA33F]/50 transition-all duration-500 hover:shadow-2xl flex flex-col h-full"
              >
                <div className="relative h-56 overflow-hidden">
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
                  <div>
                    <h3 className="text-xl font-black uppercase mb-3 group-hover:text-[#EAA33F] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <Link
                      href={{
                        pathname: `/services/residential-commercial/${item.slug}`
                      }}
                      prefetch={false}
                      className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#0F3250] hover:text-[#EAA33F] hover:gap-4 transition-all"
                    >
                      View Details
                      <ChevronRight size={14} className="text-[#EAA33F]" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0F3250]">
        <div className="max-w-7xl mx-auto px-6 text-white text-center">
          <h2 className="text-3xl font-black uppercase tracking-widest mb-12">
            Solution
            <span className="text-[#EAA33F]"> Matrix</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              ["Traffic Systems", "Car Deck Protection"],
              ["Safety Floors", "Anti-Skid Texture"],
              ["Premium Finish", "PU Textured Decor"]
            ].map((item, i) => (
              <div
                key={i}
                className="group p-10 rounded-[32px] border border-white/10 bg-white/5 hover:border-[#EAA33F] transition-all"
              >
                <span className="text-4xl font-black text-[#EAA33F] italic block mb-4 opacity-30">
                  0{i + 1}
                </span>
                <h4 className="text-white font-black uppercase text-lg tracking-widest mb-2">
                  {item[0]}
                </h4>
                <p className="text-slate-400 text-xs uppercase font-bold tracking-widest">
                  {item[1]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Surface Preparation",
              "Base Priming",
              "System Casting",
              "Technical Inspection"
            ].map((step, i) => (
              <div key={i} className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-black text-[#EAA33F] italic">
                    0{i + 1}
                  </span>
                  <div className="h-[1px] flex-grow bg-slate-100" />
                </div>
                <h4 className="text-[10px] md:text-sm font-black uppercase tracking-wider">
                  {step}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 pt-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-[40px] bg-gradient-to-br from-[#0F3250] to-[#1a4a70] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#EAA33F]/5 rounded-full blur-3xl" />
            <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight mb-8">
              Transform Your
              <br />
              <span className="text-[#EAA33F]">
                Facility Surfaces
              </span>
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