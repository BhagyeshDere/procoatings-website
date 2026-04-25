"use client";

import Link from "next/link";
import {
Factory,
Layers3,
ShieldCheck,
Zap,
Gauge,
CheckCircle2,
ArrowRight,
Sparkles
} from "lucide-react";

const systems = [
{
title:"Epoxy Flooring",
tag:"Heavy Duty",
image:"/images/flooring/epoxy-floor.jpg",
desc:"Seamless high-performance epoxy systems designed for industrial durability and chemical resistance.",
features:[
"Chemical Resistant",
"Abrasion Resistant",
"Seamless Finish"
]
},

{
title:"PU Flooring",
tag:"Flexible System",
image:"/images/flooring/pu-floor.jpg",
desc:"Polyurethane flooring systems built for thermal shock resistance and hygienic environments.",
features:[
"Thermal Resistant",
"Hygienic Finish",
"Flexible Performance"
]
},

{
title:"EPU Coating",
tag:"Hybrid Technology",
image:"/images/flooring/epu-floor.jpg",
desc:"Advanced epoxy polyurethane hybrid flooring delivering impact and wear resistance.",
features:[
"Hybrid Coating",
"Impact Strength",
"Industrial Wear Protection"
]
},

{
title:"Dielectric Epoxy Flooring",
tag:"Electrical Safety",
image:"/images/flooring/dielectric.jpg",
desc:"Specialized insulating flooring systems for electrical and high-risk operational zones.",
features:[
"Insulating Protection",
"Safety Flooring",
"Specialized Systems"
]
},

{
title:"ESD PU Flooring",
tag:"Static Control",
image:"/images/flooring/esd-floor.jpg",
desc:"Electrostatic discharge control flooring engineered for electronics and cleanroom applications.",
features:[
"ESD Protection",
"Static Dissipation",
"Cleanroom Suitable"
]
}
];

const stats = [
"Chemical Resistant",
"Heavy Load Performance",
"Seamless Industrial Floors",
"Long Lifecycle Systems"
];

export default function IndustrialFlooringPage() {

return (
<main className="bg-white text-[#0F3250] overflow-hidden">


{/* HERO */}
<section className="relative min-h-screen overflow-hidden">

<div className="absolute inset-0 bg-[#0F3250]" />

<div className="absolute inset-0 opacity-15">
<img
src="/images/flooring/industrial-floor.jpg"
alt=""
className="w-full h-full object-cover"
/>
</div>

<div className="absolute -top-32 right-0 w-[700px] h-[700px] bg-[#EAA33F]/10 rounded-full blur-3xl"/>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"/>

<div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-40 pb-28 grid lg:grid-cols-2 gap-20 items-center">


<div>

<span className="px-5 py-2 rounded-full border border-[#EAA33F]/30 bg-[#EAA33F]/10 text-[#EAA33F] font-semibold uppercase tracking-widest">
Industrial Surface Systems
</span>

<h1 className="mt-8 text-6xl md:text-8xl font-black leading-none text-white">
Industrial
<span className="block text-[#EAA33F]">
Floor Coatings
</span>
</h1>

<p className="mt-8 text-xl text-slate-300 max-w-2xl leading-relaxed">
High-performance resin flooring systems engineered
for manufacturing, warehouses, pharma and
industrial environments.
</p>



<div className="grid md:grid-cols-2 gap-5 mt-12">
{stats.map((item,i)=>(
<div
key={i}
className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xl"
>
<div className="flex items-center gap-3">
<Sparkles className="text-[#EAA33F]" />
<span className="text-white font-bold">
{item}
</span>
</div>
</div>
))}
</div>



<div className="mt-12 flex gap-5 flex-wrap">

<Link href="/contact">
<button className="bg-[#EAA33F] hover:scale-105 transition px-9 py-5 rounded-2xl font-black text-[#0F3250] shadow-xl">
Request Consultation
</button>
</Link>

<button className="border border-white/20 text-white px-9 py-5 rounded-2xl font-bold hover:bg-white hover:text-[#0F3250] transition">
Explore Systems
</button>

</div>

</div>




{/* Floating System Card */}
<div className="rounded-[42px] bg-white/10 backdrop-blur-2xl border border-white/10 p-8 shadow-2xl">

<img
src="/images/flooring/industrial-floor.jpg"
alt=""
className="rounded-3xl shadow-2xl"
/>

<div className="grid grid-cols-3 gap-4 mt-8">

{[
["Durability",Factory],
["Protection",ShieldCheck],
["Performance",Gauge]
].map(([item,Icon],i)=>(
<div
key={i}
className="bg-white rounded-2xl p-5 text-center shadow-xl"
>
<Icon className="mx-auto text-[#EAA33F] mb-3" size={32}/>
<p className="font-black text-sm">
{item}
</p>
</div>
))}

</div>

</div>


</div>
</section>





{/* 5 SUB CATEGORY SYSTEMS */}
<section className="py-32 bg-slate-50 overflow-hidden">

<div className="max-w-7xl mx-auto px-6 lg:px-12">

<div className="text-center max-w-4xl mx-auto">

<p className="text-[#EAA33F] uppercase tracking-[4px] font-semibold">
Industrial Flooring Systems
</p>

<h2 className="mt-6 text-5xl md:text-6xl font-black">
5 Advanced
<span className="text-[#EAA33F]">
{" "}Coating Systems
</span>
</h2>

</div>




<div className="grid lg:grid-cols-2 gap-10 mt-24">

{systems.map((item,index)=>(

<div
key={index}
className="group bg-white rounded-[42px] overflow-hidden shadow-2xl hover:-translate-y-4 transition duration-500"
>

<div className="relative h-[330px] overflow-hidden">

<img
src={item.image}
alt={item.title}
className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
/>

<div className="absolute inset-0 bg-gradient-to-t from-[#0F3250] via-[#0F3250]/30 to-transparent"/>

<div className="absolute top-8 left-8 flex justify-between items-start w-[calc(100%-4rem)]">

<div className="w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
<Layers3 className="text-[#EAA33F]" size={40}/>
</div>

<span className="bg-[#EAA33F] text-[#0F3250] px-5 py-2 rounded-full font-black">
{item.tag}
</span>

</div>


<div className="absolute bottom-8 left-8 right-8">
<h3 className="text-4xl font-black text-white">
{item.title}
</h3>
</div>

</div>




<div className="p-10">

<p className="text-slate-600 text-lg leading-relaxed">
{item.desc}
</p>


<div className="grid gap-4 mt-8">
{item.features.map((feature,i)=>(
<div
key={i}
className="flex items-center gap-4 bg-slate-50 rounded-2xl p-4"
>
<div className="w-10 h-10 rounded-full bg-[#EAA33F]/15 flex items-center justify-center">
<CheckCircle2
size={18}
className="text-[#EAA33F]"
/>
</div>

<span className="font-semibold">
{feature}
</span>

</div>
))}
</div>


<button className="mt-10 flex items-center gap-3 font-black text-[#0F3250]">
Technical Details
<ArrowRight />
</button>

</div>

</div>

))}

</div>

</div>

</section>






{/* COMPARISON MATRIX */}
<section className="py-32 bg-[#0F3250] text-white">

<div className="max-w-7xl mx-auto px-6">

<div className="text-center">
<h2 className="text-6xl font-black">
System Matrix
</h2>
</div>


<div className="grid md:grid-cols-5 gap-6 mt-20">

{[
["Epoxy","Heavy Duty"],
["PU","Flexible"],
["EPU","Hybrid"],
["Dielectric","Safety"],
["ESD","Static"]
].map((item,i)=>(
<div
key={i}
className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-xl"
>
<div className="w-16 h-16 rounded-full bg-[#EAA33F] text-[#0F3250] mx-auto flex items-center justify-center font-black">
{i+1}
</div>

<h4 className="mt-6 text-2xl font-black text-[#EAA33F]">
{item[0]}
</h4>

<p className="mt-4 text-slate-300">
{item[1]}
</p>

</div>
))}

</div>

</div>

</section>





{/* APPLICATION PROCESS */}
<section className="py-32 bg-white">

<div className="max-w-7xl mx-auto px-6">

<div className="text-center">
<p className="uppercase tracking-[4px] text-[#EAA33F]">
Execution Methodology
</p>

<h2 className="text-6xl font-black mt-6">
4 Step Flooring Process
</h2>
</div>


<div className="grid md:grid-cols-4 gap-8 mt-24">

{[
"Surface Prep",
"Primer System",
"Coating Application",
"Final Protection"
].map((step,i)=>(
<div
key={i}
className="rounded-[34px] bg-slate-50 p-10 shadow-xl text-center"
>
<div className="w-20 h-20 rounded-full mx-auto bg-[#EAA33F] flex items-center justify-center text-[#0F3250] font-black text-3xl">
0{i+1}
</div>

<h4 className="mt-8 text-2xl font-black">
{step}
</h4>

</div>
))}

</div>

</div>

</section>





{/* INDUSTRIES */}
<section className="py-32 bg-slate-50">

<div className="max-w-7xl mx-auto px-6">

<div className="text-center">
<h2 className="text-5xl font-black">
Industries We Serve
</h2>
</div>

<div className="grid md:grid-cols-4 gap-8 mt-20">

{[
"Manufacturing",
"Pharmaceutical",
"Warehousing",
"Electronics"
].map((industry,i)=>(
<div
key={i}
className="bg-white rounded-3xl shadow-xl p-10 text-center"
>
<Factory
className="mx-auto text-[#EAA33F]"
size={52}
/>

<h4 className="mt-6 text-2xl font-black">
{industry}
</h4>

</div>
))}

</div>

</div>

</section>





{/* CTA */}
<section className="py-28">

<div className="max-w-6xl mx-auto px-6">

<div className="rounded-[50px] bg-gradient-to-r from-[#0F3250] to-[#184d74] p-20 text-center text-white shadow-2xl relative overflow-hidden">

<div className="absolute right-0 top-0 w-96 h-96 bg-[#EAA33F]/10 rounded-full blur-3xl"/>

<h2 className="text-6xl font-black relative z-10">
Need High Performance
<span className="block text-[#EAA33F]">
Industrial Flooring?
</span>
</h2>

<p className="mt-8 text-xl text-slate-300">
Talk to our specialists for the right flooring system.
</p>

<Link href="/contact">
<button className="mt-10 bg-[#EAA33F] px-10 py-5 rounded-2xl font-black text-[#0F3250] hover:scale-105 transition">
Request Proposal
</button>
</Link>

</div>

</div>

</section>


</main>
);
}