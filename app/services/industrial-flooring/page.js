"use client";

import React from "react";
import Link from "next/link";
import {
  Layers3,
  ChevronRight,
  Activity,
  ShieldAlert,
  ThermometerSnowflake,
  Zap,
  Cpu,
  Trophy
} from "lucide-react";

const systems = [
  {
    title: "Epoxy Flooring",
    slug: "high-performance-epoxy-flooring",
    tag: "Heavy Duty",
    icon: ShieldAlert,
    image: "/images/services/epoxy.jpeg",
    desc: "Seamless high-performance epoxy systems for durability and chemical resistance."
  },
  {
    title: "PU Flooring",
    slug: "heavy-duty-pu-floor",
    tag: "Thermal Shock",
    icon: ThermometerSnowflake,
    image: "/images/services/pu.png",
    desc: "Polyurethane systems built for thermal resistance and hygienic environments."
  },
  {
    title: "Dielectric Coating",
    slug: "dielectric-safety-coating",
    tag: "Safety",
    icon: Zap,
    image: "/images/services/dielectric.jpeg",
    desc: "Specialized insulating systems for high-risk electrical operational zones."
  },
  {
    title: "ESD Flooring",
    slug: "anti-static-esd-flooring",
    tag: "Static Control",
    icon: Cpu,
    image: "/images/services/esd.png",
    desc: "ESD control flooring engineered for electronics and cleanroom apps."
  },
  {
    title: "Elite Finish",
    slug: "formula-one-grade-finish",
    tag: "Premium",
    icon: Trophy,
    image: "/images/services/formula.png",
    desc: "Elite-tier aesthetic and functional finishing for high-end automotive facilities."
  }
];

export default function IndustrialFlooringPage() {
  return (
    <main className="bg-white text-[#0F3250] overflow-hidden">

      {/* 🟢 LIGHT THEME HERO SECTION */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-white overflow-hidden border-b border-slate-100">
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `radial-gradient(#0F3250 0.5px, transparent 0.5px)`,
            backgroundSize: "30px 30px"
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-[#EAA33F]/5 to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0F3250]/10 bg-slate-50 text-[#0F3250] text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] mb-6 shadow-sm">
            <Activity size={12} className="text-[#EAA33F] animate-pulse" />
            Precision Surface Engineering
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-[#0F3250] leading-[1.1] uppercase italic">
            Industrial <br />
            <span className="text-[#EAA33F] not-italic">
              Floor Coatings
            </span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-slate-500 max-w-2xl leading-relaxed font-medium">
            Engineered resin flooring for manufacturing,
            pharma and high traffic industrial environments.
            Built for <span className="text-[#0F3250] font-bold">zero-failure performance.</span>
          </p>
        </div>
      </section>

      {/* 🟠 SYSTEMS GRID */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 gap-6 text-center md:text-left">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-black uppercase">
                Coating
                <span className="text-[#EAA33F]"> Systems</span>
              </h2>
            </div>
            <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[3px]">
              High-Performance Grade
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {systems.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-[32px] md:rounded-[40px] overflow-hidden border border-slate-200 hover:border-[#EAA33F]/50 transition-all duration-500 hover:shadow-2xl flex flex-col"
              >
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F3250]/90 via-[#0F3250]/20 to-transparent" />
                  
                  <div className="absolute top-4 md:top-6 left-4 md:left-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/95 backdrop-blur-md rounded-xl md:rounded-2xl flex items-center justify-center text-[#0F3250] shadow-xl group-hover:bg-[#EAA33F] group-hover:text-white transition-all duration-300">
                      <item.icon size={20} />
                    </div>
                  </div>

                  <div className="absolute bottom-4 md:bottom-6 left-6 md:left-8 right-6 md:right-8">
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#EAA33F] block mb-1">
                      {item.tag}
                    </span>
                    <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 md:mb-8 line-clamp-3">
                    {item.desc}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <Link
                      href={`/services/industrial-flooring/${item.slug}`}
                      className="group/link inline-flex items-center gap-3 text-[10px] md:text-[11px] font-black uppercase tracking-widest text-[#0F3250] transition-all"
                    >
                      <span className="bg-slate-100 group-hover/link:bg-[#0F3250] group-hover/link:text-white p-2 rounded-lg transition-colors">
                        <ChevronRight size={16} />
                      </span>
                      View Details
                    </Link>
                    <Layers3 size={20} className="text-slate-100 hidden sm:block" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔵 QUICK NAV */}
      <section className="py-12 md:py-20 bg-[#0F3250]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-5 gap-4">
            {systems.map((item, i) => (
              <Link
                href={`/services/industrial-flooring/${item.slug}`}
                key={i}
                className="group p-5 md:p-6 rounded-2xl border border-white/5 bg-white/5 hover:bg-[#EAA33F] transition-all text-center"
              >
                <span className="block text-[8px] md:text-[9px] font-black text-[#EAA33F] group-hover:text-[#0F3250] mb-2 uppercase opacity-60">
                  System 0{i + 1}
                </span>
                <span className="text-white group-hover:text-[#0F3250] font-bold uppercase text-[10px] md:text-xs tracking-widest">
                  {item.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ⚪ PROCESS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Surface Preparation",
              "System Priming",
              "Base Application",
              "Seal & Finish"
            ].map((step, i) => (
              <div key={i} className="flex flex-col gap-3 md:gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-2xl md:text-3xl font-black text-[#EAA33F] italic">
                    0{i + 1}
                  </span>
                  <div className="h-[1px] flex-grow bg-slate-100" />
                </div>
                <h4 className="text-xs md:text-sm font-black uppercase tracking-wider text-[#0F3250]">
                  {step}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔥 FINAL CTA */}
      <section className="pb-16 md:pb-24 pt-6 md:pt-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-[30px] md:rounded-[40px] bg-gradient-to-br from-[#0F3250] to-[#1a4a70] p-10 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-[#EAA33F]/5 rounded-full blur-3xl" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-tight mb-8">
              Reliable Industrial
              <br />
              <span className="text-[#EAA33F]">
                Coatings
              </span>
            </h2>
            <Link href="/contact" className="inline-block w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-[#EAA33F] text-[#0F3250] px-8 md:px-10 py-4 md:py-5 rounded-xl font-black text-[10px] md:text-xs uppercase tracking-[0.2em] shadow-xl hover:scale-105 transition-all">
                Request Proposal
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}