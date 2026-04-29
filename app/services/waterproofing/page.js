"use client";

import React from "react";
import Link from "next/link";
import {
  Droplets,
  ShieldCheck,
  Building2,
  Layers3,
  Home,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Warehouse,
  Waves
} from "lucide-react";

const systems = [
  {
    title: "Terrace & Roof",
    tag: "Roof Protection",
    image: "/images/services/terraceroof.png",
    icon: Building2,
    desc: "Advanced membrane systems protecting rooftops from weather degradation.",
    // Updated slug to match data/services.js
    slug: "terrace-roof-solution"
  },
  {
    title: "Podium Systems",
    tag: "Deck Systems",
    image: "/images/services/podium.png",
    icon: Layers3,
    desc: "Heavy-duty solutions for landscaped decks and traffic exposed surfaces.",
    slug: "podium-waterproofing"
  },
  {
    title: "Metal Roofing",
    tag: "Industrial",
    image: "/images/services/metalroof.png",
    icon: ShieldCheck,
    desc: "Corrosion and leak prevention systems for specialized industrial roofs.",
    slug: "metal-roof-restoration" 
  },
  {
    title: "Bathrooms",
    tag: "Interior",
    image: "/images/services/bathroom.png",
    icon: Home,
    desc: "Internal wet-area protection preventing structural moisture damage.",
    slug: "bathroom-sealing-grouting"
  },
  {
    title: "Basements",
    tag: "Below Grade",
    image: "/images/services/basement.png",
    icon: Warehouse,
    desc: "High-pressure underground solutions for foundations and structures.",
    slug: "basement-waterproofing"
  },
  {
    title: "External Walls",
    tag: "Facade",
    image: "/images/services/wall.png",
    icon: Droplets,
    desc: "Exterior barrier systems against vertical moisture ingress.",
    slug: "wall-protective-coating"
  }
];

export default function WaterproofingPage() {
  return (
    <main className="bg-white text-[#0F3250] overflow-hidden">
      
      {/* 🟢 COMPACT ADVANCED HERO */}
      <section className="relative pt-32 pb-20 bg-[#0F3250] overflow-hidden">
        {/* Technical Grid Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ 
          backgroundImage: `radial-gradient(#EAA33F 0.5px, transparent 0.5px)`, 
          backgroundSize: '24px 24px' 
        }} />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#EAA33F]/30 bg-[#EAA33F]/5 text-[#EAA33F] text-[10px] font-black uppercase tracking-[0.3em] mb-6">
            <Waves size={14} className="animate-pulse" />
            Structural Defense
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight uppercase italic">
            Advanced <br />
            <span className="text-[#EAA33F] not-italic">Waterproofing</span>
          </h1>

          <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
            Performance engineering for critical structural protection. 
            Monolithic barriers designed for zero-leak environments.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              
            </Link>
            
          </div>
        </div>
      </section>

      {/* 🟠 SLEEK COMPACT CARDS */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <h2 className="text-4xl font-black text-[#0F3250] uppercase">
              Specialized <span className="text-[#EAA33F]">Systems</span>
            </h2>
            <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[3px]">6 Core Applications</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {systems.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-[32px] overflow-hidden border border-slate-100 hover:border-[#EAA33F]/50 transition-all duration-500 hover:shadow-2xl flex flex-col"
              >
                {/* Reduced Image Height */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F3250]/80 to-transparent" />
                  
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

                <div className="p-8">
                  <h3 className="text-xl font-black text-[#0F3250] uppercase mb-3 group-hover:text-[#EAA33F] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
                    {item.desc}
                  </p>
                  
                  {/* Updated navigation path */}
                  <Link 
                    href={`/services/waterproofing/${item.slug}`} 
                    className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#0F3250] hover:gap-4 transition-all"
                  >
                    View Details <ArrowRight size={14} className="text-[#EAA33F]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔵 PROTECTION MATRIX - MINIMALIST */}
      <section className="py-20 bg-[#0F3250]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {["Terrace", "Podium", "Metal Roof", "Bathroom", "Basement", "Facade"].map((item, i) => (
              <div key={i} className="group p-6 rounded-2xl border border-white/10 hover:border-[#EAA33F] transition-all text-center">
                <span className="block text-[10px] font-black text-[#EAA33F] mb-2 opacity-50 group-hover:opacity-100 uppercase">Layer 0{i+1}</span>
                <span className="text-white font-bold uppercase text-xs tracking-widest">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⚪ THE PROCESS - COMPACT */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Audit & Inspection",
              "Surface Preparation",
              "System Application",
              "Integrity Testing"
            ].map((step, i) => (
              <div key={i} className="flex gap-5 items-start p-6 rounded-2xl bg-slate-50">
                <span className="text-2xl font-black text-[#EAA33F]/20 italic">0{i+1}</span>
                <div>
                  <h4 className="text-sm font-black uppercase text-[#0F3250] mb-1">{step}</h4>
                  <div className="w-8 h-[2px] bg-[#EAA33F]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔥 FINAL CTA */}
      <section className="pb-24 pt-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-[40px] bg-gradient-to-br from-[#0F3250] to-[#1a4a70] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#EAA33F]/5 rounded-full blur-3xl" />
            
            <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-8">
              Seal Your <br /><span className="text-[#EAA33F]">Infrastructure</span>
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