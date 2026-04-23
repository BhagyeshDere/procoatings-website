"use client";

import { Search, PencilRuler, Paintbrush, CheckCircle2 } from "lucide-react";

export default function AboutProcess() {
  const processSteps = [
    {
      title: "Site Analysis",
      desc: "Comprehensive substrate testing and moisture mapping.",
      icon: <Search size={24} />
    },
    {
      title: "System Design",
      desc: "Engineering a bespoke chemical-resistant layering plan.",
      icon: <PencilRuler size={24} />
    },
    {
      title: "Precision App",
      desc: "Climate-controlled application by certified technicians.",
      icon: <Paintbrush size={24} />
    },
    {
      title: "Quality Audit",
      desc: "Final DFT testing and warranty certification.",
      icon: <CheckCircle2 size={24} />
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#0D2B45] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Section Header */}
          <div>
            <h3 className="text-[#F5A623] text-xs font-black uppercase tracking-[0.3em] mb-4">
              Methodology
            </h3>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
              How We <br /> Engineer Results
            </h2>
            <p className="text-white/50 text-lg font-bold max-w-md">
              We don't just apply coatings; we engineer multi-layer protection systems using a rigorous 4-stage process.
            </p>
          </div>

          {/* Process Steps Grid */}
          <div className="grid gap-6">
            {processSteps.map((step, idx) => (
              <div 
                key={idx} 
                className="group flex items-start gap-6 p-6 rounded-[2rem] bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300"
              >
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-[#F5A623]/20 flex items-center justify-center text-[#F5A623] group-hover:bg-[#F5A623] group-hover:text-white transition-colors">
                  {step.icon}
                </div>
                <div>
                  <h4 className="text-xl font-black uppercase tracking-tight mb-1">
                    {step.title}
                  </h4>
                  <p className="text-white/40 text-sm font-bold">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}