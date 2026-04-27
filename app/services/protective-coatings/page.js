"use client";

import Link from "next/link";
import {
ShieldCheck,
Flame,
Zap,
Thermometer,
Factory,
Sparkles,
ArrowRight,
CheckCircle2,
Layers3
} from "lucide-react";

const coatings = [
{
title:"Heat Insulation Coatings",
tag:"Thermal Protection",
image:"/images/services/heat.png",
icon:Thermometer,
desc:"Advanced thermal barrier coatings engineered to reduce heat transfer and improve energy efficiency.",
features:[
"Thermal Reflection",
"Energy Savings",
"High Temperature Protection"
]
},

{
title:"Electrical Insulation Coatings",
tag:"Electrical Safety",
image:"/images/services/electrical.png",
icon:Zap,
desc:"Specialized insulating coatings for electrical safety and equipment protection.",
features:[
"Electrical Isolation",
"Safety Protection",
"Equipment Reliability"
]
},

{
title:"Anti-Corrosive Coatings",
tag:"Corrosion Defense",
image:"/images/services/corrosion.png",
icon:ShieldCheck,
desc:"Heavy duty anti-corrosion systems designed for harsh industrial and marine environments.",
features:[
"Corrosion Resistance",
"Chemical Protection",
"Long Service Life"
]
},

{
title:"Anti-Carbonation Coatings",
tag:"Concrete Protection",
image:"/images/services/carbonation.png",
icon:Layers3,
desc:"Protective coatings designed to prevent carbonation and concrete deterioration.",
features:[
"Structural Protection",
"Weather Resistance",
"Concrete Preservation"
]
},

{
title:"Fire Resistant Coatings",
tag:"Passive Fire Safety",
image:"/images/services/fire.png",
icon:Flame,
desc:"High-performance fire protection coatings for structural and industrial safety systems.",
features:[
"Fire Protection",
"Intumescent Systems",
"Safety Compliance"
]
},

{
title:"Customized Coatings",
tag:"Tailored Systems",
image:"/images/services/customized.png",
icon:Factory,
desc:"Custom engineered protective coating solutions built for specialized project needs.",
features:[
"Bespoke Systems",
"Project Specific",
"Advanced Protection"
]
}
];


const stats = [
"Corrosion Control",
"Thermal Protection",
"Fire Safety Systems",
"Industrial Grade Performance"
];

export default function ProtectiveCoatingsPage(){

return(
<main className="bg-white text-[#0F3250] overflow-hidden">


{/* HERO */}
<section className="relative min-h-screen overflow-hidden">

<div className="absolute inset-0 bg-[#0F3250]" />

<div className="absolute inset-0 opacity-15">
<img
src="/images/coatings/hero.jpg"
alt=""
className="w-full h-full object-cover"
/>
</div>

<div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#EAA33F]/10 rounded-full blur-3xl"/>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"/>

<div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-40 pb-28 grid lg:grid-cols-2 gap-20 items-center">


<div>

<span className="px-5 py-2 rounded-full border border-[#EAA33F]/30 bg-[#EAA33F]/10 text-[#EAA33F] uppercase tracking-widest font-semibold">
Industrial Protection Systems
</span>

<h1 className="mt-8 text-6xl md:text-8xl font-black leading-none text-white">
Protective
<span className="block text-[#EAA33F]">
Coatings
</span>
</h1>

<p className="mt-8 text-xl text-slate-300 max-w-2xl leading-relaxed">
Specialized high-performance protective coating systems
for corrosion resistance, thermal protection,
fire safety and industrial durability.
</p>


<div className="grid md:grid-cols-2 gap-5 mt-12">
{stats.map((item,i)=>(
<div
key={i}
className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xl"
>
<div className="flex gap-3 items-center">
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
<button className="bg-[#EAA33F] px-9 py-5 rounded-2xl font-black text-[#0F3250] hover:scale-105 transition shadow-xl">
Get Consultation
</button>
</Link>

<button className="border border-white/20 text-white px-9 py-5 rounded-2xl font-bold hover:bg-white hover:text-[#0F3250] transition">
Explore Systems
</button>

</div>

</div>




{/* Floating Feature Card */}
<div className="rounded-[42px] bg-white/10 backdrop-blur-2xl border border-white/10 p-8 shadow-2xl">

<img
src="/images/coatings/hero.jpg"
alt=""
className="rounded-3xl shadow-2xl"
/>

<div className="grid grid-cols-3 gap-4 mt-8">

{[
["Thermal",Thermometer],
["Corrosion",ShieldCheck],
["Fire",Flame]
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





{/* 6 SUB CATEGORY COATING SYSTEMS */}
<section className="py-32 bg-slate-50">

<div className="max-w-7xl mx-auto px-6 lg:px-12">

<div className="text-center max-w-4xl mx-auto">

<p className="uppercase tracking-[4px] text-[#EAA33F] font-semibold">
Protective Coating Technologies
</p>

<h2 className="mt-6 text-5xl md:text-6xl font-black">
6 Advanced
<span className="text-[#EAA33F]">
{" "}Protection Systems
</span>
</h2>

</div>




<div className="grid lg:grid-cols-2 gap-10 mt-24">

{coatings.map((item,index)=>{

const Icon=item.icon;

return(

<div
key={index}
className="group bg-white rounded-[42px] shadow-2xl overflow-hidden hover:-translate-y-4 transition duration-500"
>

<div className="relative h-[330px] overflow-hidden">

<img
src={item.image}
alt={item.title}
className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
/>

<div className="absolute inset-0 bg-gradient-to-t from-[#0F3250] via-[#0F3250]/40 to-transparent"/>


<div className="absolute top-8 left-8 flex justify-between items-start w-[calc(100%-4rem)]">

<div className="w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
<Icon
size={38}
className="text-[#EAA33F]"
/>
</div>

<span className="bg-[#EAA33F] text-[#0F3250] px-5 py-2 rounded-full font-black">
{item.tag}
</span>

</div>


<div className="absolute bottom-8 left-8 right-8">
<h3 className="text-4xl font-black text-white leading-tight">
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

)
})}

</div>

</div>

</section>





{/* SYSTEM MATRIX */}
<section className="py-32 bg-[#0F3250] text-white">

<div className="max-w-7xl mx-auto px-6">

<div className="text-center">
<h2 className="text-6xl font-black">
Protection Matrix
</h2>
</div>


<div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 mt-20">

{[
"Heat",
"Electrical",
"Corrosion",
"Carbonation",
"Fire",
"Custom"
].map((item,i)=>(
<div
key={i}
className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-xl"
>

<div className="w-16 h-16 rounded-full bg-[#EAA33F] mx-auto flex items-center justify-center text-[#0F3250] font-black">
{i+1}
</div>

<h4 className="mt-6 text-xl font-black text-[#EAA33F]">
{item}
</h4>

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
Execution Process
</p>

<h2 className="text-6xl font-black mt-5">
4 Step Protection Process
</h2>
</div>


<div className="grid md:grid-cols-4 gap-8 mt-24">

{[
"Surface Preparation",
"Primer System",
"Protective Application",
"Final Protection"
].map((step,i)=>(
<div
key={i}
className="rounded-[34px] bg-slate-50 p-10 shadow-xl text-center"
>
<div className="w-20 h-20 rounded-full bg-[#EAA33F] mx-auto flex items-center justify-center text-[#0F3250] text-3xl font-black">
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
Applications & Industries
</h2>
</div>

<div className="grid md:grid-cols-4 gap-8 mt-20">

{[
"Power Plants",
"Industrial Plants",
"Commercial Buildings",
"Infrastructure"
].map((industry,i)=>(
<div
key={i}
className="bg-white rounded-3xl shadow-xl p-10 text-center"
>
<Factory
className="mx-auto text-[#EAA33F]"
size={50}
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

<div className="rounded-[50px] bg-gradient-to-r from-[#0F3250] to-[#184d74] text-white p-20 text-center shadow-2xl relative overflow-hidden">

<div className="absolute right-0 top-0 w-96 h-96 bg-[#EAA33F]/10 rounded-full blur-3xl"/>

<h2 className="text-6xl font-black relative z-10">
Need Advanced
<span className="block text-[#EAA33F]">
Protective Coatings?
</span>
</h2>

<p className="mt-8 text-xl text-slate-300">
Speak with our experts for custom protection systems.
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
)
}