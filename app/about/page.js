"use client";

import { motion } from "framer-motion";
import { 
  Shield, Target, Eye, ArrowRight, Briefcase, 
  MapPin, Globe, Droplets, Layers, ClipboardCheck,
  Zap, Microscope, Building2, Car, FlaskConical, 
  Hospital, Utensils, Warehouse, HardHat,
  Search, PencilRuler, Paintbrush, CheckCircle2
} from "lucide-react";

export default function AboutPage() {
  const industries = [
    { name: "Automotive", icon: <Car size={20} /> },
    { name: "Pharma & Biotech", icon: <FlaskConical size={20} /> },
    { name: "Chemical Plants", icon: <FlaskConical size={20} /> },
    { name: "Food & Dairy", icon: <Utensils size={20} /> },
    { name: "Hospitality", icon: <Building2 size={20} /> },
    { name: "Aviation", icon: <Globe size={20} /> },
    { name: "Healthcare", icon: <Hospital size={20} /> },
    { name: "Warehousing", icon: <Warehouse size={20} /> },
  ];

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
    <main className="bg-white overflow-x-hidden text-[#0D2B45] selection:bg-[#F5A623] selection:text-white font-sans">
      
      {/* 🚀 01. HERO SECTION */}
      <section className="relative pt-32 pb-24 bg-[#0D2B45] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#F5A623] to-transparent" />
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#F5A623] to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <span className="text-[#F5A623] text-[10px] font-black uppercase tracking-[0.5em] mb-6 block">
                Precision Surface Engineering
              </span>
              <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.8] uppercase tracking-tighter">
                Defining <br />
                <span className="text-[#F5A623]">Durability</span> <br />
                In Every Layer
              </h1>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-xs border-l border-[#F5A623]/30 pl-8 pb-2"
            >
              <p className="text-white/60 text-sm md:text-base font-bold leading-relaxed">
                Specialized waterproofing, epoxy, and industrial protective coatings nationwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🏗️ 02. CORE IDENTITY SECTION */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            <div className="lg:col-span-5 space-y-10">
              <div className="space-y-4">
                <h3 className="text-[#F5A623] text-xs font-black uppercase tracking-[0.3em] flex items-center gap-3">
                  <span className="w-10 h-px bg-[#F5A623]"></span> Our Story
                </h3>
                <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                  Trusted <br /> Partners.
                </h2>
              </div>

              <div className="space-y-6 text-slate-600 text-lg font-bold leading-relaxed">
                <p>
                  Pro Coatings delivers specialized <span className="text-[#0D2B45] font-black underline decoration-[#F5A623] decoration-2 underline-offset-4">waterproofing, epoxy, and industrial protective coatings</span> across diverse high-stakes sectors.
                </p>
                <p className="text-base text-slate-500 font-bold">
                  Our commitment to quality, precision, and reliability has earned us the trust of leading clients nationwide, establishing Pro Coatings as a trusted partner for industrial and residential applications.
                </p>
              </div>

              <div className="pt-6">
                <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 text-slate-700 text-lg relative">
                  <span className="absolute -top-4 left-8 text-6xl text-[#F5A623]/20 font-black">“</span>
                  <p className="font-bold">
                    The strength of the team is each individual member. The strength of each member is the team.
                  </p>
                  <footer className="mt-4 text-sm font-black uppercase tracking-widest text-[#0D2B45]">— Phil Jackson</footer>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid md:grid-cols-2 gap-6">
               <div className="space-y-6">
                  <div className="h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-200">
                    <img src="/images/about/main1.png" className="w-full h-full object-cover" alt="Industrial Coating" />
                  </div>
                  <div className="p-8 bg-[#0D2B45] rounded-[2rem] text-white">
                    <Zap className="text-[#F5A623] mb-6" size={40} />
                    <h4 className="text-xl font-black uppercase mb-3">Efficiency</h4>
                    <p className="text-white/50 text-sm font-bold">We combine advanced technology and high-grade materials to ensure energy-efficient solutions.</p>
                  </div>
               </div>
               <div className="space-y-6 md:pt-12">
                  <div className="p-8 bg-[#F5A623] rounded-[2rem] text-[#0D2B45]">
                    <Shield className="mb-6" size={40} />
                    <h4 className="text-xl font-black uppercase mb-3">Durability</h4>
                    <p className="text-[#0D2B45]/70 text-sm font-bold">Our efficient methodologies ensure long-lasting and environment-friendly protection.</p>
                  </div>
                  <div className="h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-200">
                    <img src="/images/hero/bg1.png" className="w-full h-full object-cover" alt="Waterproofing Application" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 💠 03. SEPARATE VISION & MISSION SECTION */}
      <section className="py-32 bg-[#F8F9FA] relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#E9ECEF] -skew-x-12 translate-x-20 hidden lg:block" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-px bg-slate-200 rounded-[3rem] overflow-hidden shadow-xl border border-slate-200">
            
            {/* VISION CARD */}
            <div className="bg-white p-12 md:p-20 flex flex-col justify-center items-start space-y-8">
              <div className="w-20 h-20 rounded-3xl bg-[#F5A623]/10 flex items-center justify-center text-[#F5A623]">
                <Eye size={48} strokeWidth={2.5} />
              </div>
              <div className="space-y-4">
                <h3 className="text-[#F5A623] text-sm font-black uppercase tracking-[0.4em]">Our Vision</h3>
                <h2 className="text-4xl md:text-5xl font-black text-[#0D2B45] uppercase tracking-tighter leading-tight">
                  Redefining <br /> Industrial <br /> Standards.
                </h2>
              </div>
              <p className="text-slate-500 text-xl font-bold leading-relaxed max-w-md">
                To redefine industrial protection through sustainable, innovative coating technologies across the Indian subcontinent.
              </p>
            </div>

            {/* MISSION CARD */}
            <div className="bg-[#0D2B45] p-12 md:p-20 flex flex-col justify-center items-start space-y-8 text-white">
              <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center text-[#F5A623]">
                <Target size={48} strokeWidth={2.5} />
              </div>
              <div className="space-y-4">
                <h3 className="text-[#F5A623] text-sm font-black uppercase tracking-[0.4em]">Our Mission</h3>
                <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight">
                  Precision <br /> In Every <br /> Square Inch.
                </h2>
              </div>
              <p className="text-white/60 text-xl font-bold leading-relaxed max-w-md">
                Empowering industries with high-performance epoxy, polyurethane, and waterproofing systems through unmatched technical precision.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 🏭 04. SECTORS WE SERVE */}
      <section className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
             <h3 className="text-[#F5A623] text-xs font-black uppercase tracking-[0.5em]">Industry Expertise</h3>
             <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Sectors We Serve</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 flex flex-col items-center text-center group hover:bg-[#0D2B45] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4 group-hover:bg-[#F5A623] group-hover:text-white transition-colors shadow-sm">
                  {industry.icon}
                </div>
                <span className="font-black uppercase text-[10px] tracking-widest text-[#0D2B45] group-hover:text-white">{industry.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🛠️ 05. THE TECHNICAL PROCESS */}
      <section className="py-32 bg-[#0D2B45] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-[#F5A623] text-xs font-black uppercase tracking-[0.3em] mb-4">Methodology</h3>
              <h2 className="text-5xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                How We <br /> Engineer Results
              </h2>
              <p className="text-white/50 text-lg font-bold max-w-md">
                We don't just apply coatings; we engineer multi-layer protection systems using a rigorous 4-stage process.
              </p>
            </div>
            <div className="grid gap-6">
              {processSteps.map((step, idx) => (
                <div key={idx} className="group flex items-start gap-6 p-6 rounded-3xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all">
                  <div className="shrink-0 w-14 h-14 rounded-2xl bg-[#F5A623]/20 flex items-center justify-center text-[#F5A623]">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-black uppercase tracking-tight mb-1">{step.title}</h4>
                    <p className="text-white/40 text-sm font-bold">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 👷 06. TEAM CAPABILITY */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#0D2B45] p-12 md:p-20 rounded-[3rem] text-white flex flex-col md:flex-row items-center gap-12">
             <div className="shrink-0">
               <HardHat className="text-[#F5A623]" size={80} />
             </div>
             <div className="flex-1 space-y-6">
               <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Highly Qualified Professionals</h3>
               <p className="text-white/60 text-lg font-bold leading-relaxed">
                 Our team is composed of industry experts who combine advanced technology with efficient methodologies to ensure every project meets global standards.
               </p>
               <div className="pt-4 flex gap-4 max-w-md">
                  <div className="bg-white/5 p-6 rounded-2xl flex-1 text-center border border-white/10">
                      <div className="text-3xl font-black text-[#F5A623]">100%</div>
                      <div className="text-[10px] uppercase font-black tracking-widest opacity-50">Precision</div>
                  </div>
                  <div className="bg-white/5 p-6 rounded-2xl flex-1 text-center border border-white/10">
                      <div className="text-3xl font-black text-[#F5A623]">Zero</div>
                      <div className="text-[10px] uppercase font-black tracking-widest opacity-50">Decay</div>
                  </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 🚀 07. TYPOGRAPHIC CTA */}
      <section className="py-32 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
                Start your next <br />
                <span className="text-[#F5A623]">Project.</span>
              </h2>
              <p className="text-slate-500 font-bold text-xl">
                Connect with our engineering experts for a technical site assessment.
              </p>
            </div>
            
            <button className="group flex items-center gap-8 text-2xl font-black uppercase tracking-tighter hover:text-[#F5A623] transition-colors">
              Get an Expert Quote 
              <span className="w-20 h-20 rounded-full bg-[#0D2B45] group-hover:bg-[#F5A623] flex items-center justify-center transition-all duration-500">
                <ArrowRight className="text-white group-hover:translate-x-2 transition-transform" size={32} />
              </span>
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}