"use client";

import Link from "next/link";
import {
  Sparkles,
  FlaskConical,
  Layers3,
  Factory,
  ArrowRight,
  ShieldCheck,
  ChevronRight
} from "lucide-react";

const densifiers = [
  {
    title: "Sodium Silicate",
    tag: "Economical",
    image: "/images/services/sodium.png",
    icon: Factory,
    desc: "Cost-effective system improving abrasion resistance and dust proofing for industrial assets.",
  },
  {
    title: "Lithium Silicate",
    tag: "Premium",
    image: "/images/services/lithium.png",
    icon: Sparkles,
    desc: "Advanced treatment for superior polish retention and chemical resistance.",
  },
  {
    title: "Ashford Floor",
    tag: "Penetrating",
    image: "/images/services/ashford.png",
    icon: Layers3,
    desc: "Permanent penetrating hardening technology engineered for heavy industrial traffic.",
  },
  {
    title: "Ashford Formula",
    tag: "Molecular",
    image: "/images/services/formula.png",
    icon: FlaskConical,
    desc: "Chemically reactive system for long lifecycle concrete performance and hardening.",
  }
];

export default function FloorDensificationPage() {
  return (
    <main className="bg-white text-[#0F3250]">

      {/* COMPACT BUT IMPACTFUL HERO - REDUCED HEIGHT */}
      <section className="relative bg-[#0F3250] pt-32 pb-38 overflow-hidden flex items-center min-h-[50vh]">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#EAA33F]/10 rounded-full blur-[120px]" />
        
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1 rounded-full border border-[#EAA33F]/30 bg-[#EAA33F]/10 text-[#EAA33F] text-xs uppercase tracking-widest font-bold mb-6">
            Industrial Concrete Hardening
          </span>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter">
            Floor <span className="text-[#EAA33F]">Densification</span>
          </h1>

          <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Advanced chemical systems engineered to strengthen, harden and protect 
            industrial concrete floors from heavy-duty wear.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact">
             
            </Link>
           
          </div>
        </div>
      </section>

      {/* REDUCED SIZE 2X2 VERTICAL SERVICE CARDS */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-black uppercase tracking-tighter">
                Hardening <span className="text-[#EAA33F]">Systems</span>
              </h2>
            </div>
            <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">Selected Grades</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
            {densifiers.map((item, index) => (
              <div
                key={index}
                className="group flex flex-col bg-white rounded-[24px] shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 overflow-hidden"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F3250]/60 to-transparent opacity-60" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="text-[9px] font-black uppercase tracking-widest text-[#0F3250] bg-[#EAA33F] px-2.5 py-1 rounded-lg shadow-md">
                      {item.tag}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-black mb-3 group-hover:text-[#EAA33F] transition-colors uppercase tracking-tight italic">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
                    {item.desc}
                  </p>
                  
                  <div className="mt-auto pt-5 border-t border-slate-50 flex justify-between items-center">
                    <Link href="/contact" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#0F3250] group-hover:text-[#EAA33F] transition-all">
                      View Details <ChevronRight size={14} className="text-[#EAA33F]" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPACT MATRIX */}
      <section className="py-16 bg-[#0F3250] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Sodium", "Lithium", "Ashford", "Formula"].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-sm">
                <p className="text-[#EAA33F] text-2xl font-black mb-1 italic">0{i+1}</p>
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY DENSIFICATION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              ["Abrasion Resistance", "Improved wear performance against friction."],
              ["Gloss Retention", "Long lasting polished finish with minimal haze."],
              ["Lifecycle Savings", "Significantly lower long-term maintenance costs."]
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#EAA33F]/5 flex items-center justify-center border border-[#EAA33F]/20">
                  <ShieldCheck className="text-[#EAA33F]" size={24} />
                </div>
                <div>
                  <h4 className="font-black text-lg mb-2 uppercase tracking-tight italic">{item[0]}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{item[1]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-[48px] bg-gradient-to-br from-[#0F3250] to-[#1a4a70] text-white p-12 md:p-20 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute right-[-5%] top-[-10%] w-80 h-80 bg-[#EAA33F]/10 rounded-full blur-[100px]"/>
            
            <h2 className="text-4xl md:text-5xl font-black relative z-10 uppercase italic">
              Ready for <span className="text-[#EAA33F] not-italic">Heavy-Duty</span> Performance?
            </h2>
            <p className="mt-6 text-slate-300 relative z-10 max-w-xl mx-auto text-lg">
              Talk to our technical engineers for custom industrial floor hardening solutions.
            </p>

            <Link href="/contact">
              <button className="mt-10 bg-[#EAA33F] px-10 py-5 rounded-2xl font-black text-[#0F3250] hover:scale-105 transition shadow-xl uppercase tracking-widest text-xs">
                Request Proposal
              </button>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}