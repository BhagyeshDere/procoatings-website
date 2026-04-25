"use client";

import Link from "next/link";
import {
Sparkles,
ShieldCheck,
FlaskConical,
Layers3,
Factory,
ArrowRight,
CheckCircle2,
BarChart3,
Gauge
} from "lucide-react";

const densifiers = [
{
title:"Sodium Silicate Densification",
tag:"Economical Hardening",
image:"/images/densification/sodium.jpg",
icon:Factory,
desc:"Cost-effective densification system improving abrasion resistance, dust proofing and concrete hardening.",
features:[
"Surface Hardening",
"Dust Proofing",
"Abrasion Resistance"
]
},

{
title:"Lithium Silicate Densification",
tag:"Premium Densifier",
image:"/images/densification/lithium.jpg",
icon:Sparkles,
desc:"Advanced lithium silicate treatment for superior polish retention, chemical resistance and long-term protection.",
features:[
"Fast Reactive Chemistry",
"High Gloss Retention",
"Premium Protection"
]
},

{
title:"Ashford Floor Densification",
tag:"Deep Penetrating",
image:"/images/densification/ashford.jpg",
icon:Layers3,
desc:"Permanent penetrating floor hardening technology engineered for industrial performance floors.",
features:[
"Deep Penetration",
"Heavy Duty Performance",
"Permanent Hardening"
]
},

{
title:"Ashford Formula Densification",
tag:"Molecular Treatment",
image:"/images/densification/formula.jpg",
icon:FlaskConical,
desc:"Chemically reactive molecular densification system for long lifecycle concrete performance.",
features:[
"Molecular Strengthening",
"Long Lifecycle Protection",
"Concrete Densification"
]
}
];


const highlights = [
"3X Surface Hardness",
"Chemical Densification",
"Industrial Durability",
"Reduced Maintenance"
];


export default function FloorDensificationPage(){

return(
<main className="bg-white text-[#0F3250] overflow-hidden">


{/* HERO */}
<section className="relative min-h-screen overflow-hidden">

<div className="absolute inset-0 bg-[#0F3250]" />

<div className="absolute inset-0 opacity-15">
<img
src="/images/densification/hero.jpg"
alt=""
className="w-full h-full object-cover"
/>
</div>

<div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#EAA33F]/10 rounded-full blur-3xl"/>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"/>

<div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-40 pb-28 grid lg:grid-cols-2 gap-20 items-center">



<div>

<span className="px-5 py-2 rounded-full border border-[#EAA33F]/30 bg-[#EAA33F]/10 text-[#EAA33F] uppercase tracking-widest font-semibold">
Concrete Hardening Technologies
</span>

<h1 className="mt-8 text-6xl md:text-8xl font-black leading-none text-white">
Floor
<span className="block text-[#EAA33F]">
Densification
</span>
</h1>

<p className="mt-8 text-xl text-slate-300 max-w-2xl leading-relaxed">
Advanced chemical densification systems
to strengthen, harden and protect
industrial concrete floors.
</p>


<div className="grid md:grid-cols-2 gap-5 mt-12">

{highlights.map((item,i)=>(
<div
key={i}
className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xl"
>
<div className="flex items-center gap-3">
<Sparkles className="text-[#EAA33F]" />
<span className="font-bold text-white">
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
Compare Systems
</button>

</div>

</div>




{/* Floating Feature Card */}
<div className="rounded-[42px] bg-white/10 backdrop-blur-2xl border border-white/10 p-8 shadow-2xl">

<img
src="/images/densification/hero.jpg"
alt=""
className="rounded-3xl shadow-2xl"
/>

<div className="grid grid-cols-3 gap-4 mt-8">

{[
["Hardness",Gauge],
["Density",Layers3],
["Performance",BarChart3]
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






{/* 4 SUBCATEGORY DENSIFIERS */}
<section className="py-32 bg-slate-50">

<div className="max-w-7xl mx-auto px-6 lg:px-12">

<div className="text-center max-w-4xl mx-auto">

<p className="uppercase tracking-[4px] text-[#EAA33F] font-semibold">
Densification Systems
</p>

<h2 className="mt-6 text-5xl md:text-6xl font-black">
4 Advanced
<span className="text-[#EAA33F]">
{" "}Densification Technologies
</span>
</h2>

</div>




<div className="grid lg:grid-cols-2 gap-10 mt-24">

{densifiers.map((item,index)=>{

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






{/* BENEFITS MATRIX */}
<section className="py-32 bg-[#0F3250] text-white">

<div className="max-w-7xl mx-auto px-6">

<div className="text-center">
<h2 className="text-6xl font-black">
Performance Matrix
</h2>
</div>


<div className="grid md:grid-cols-4 gap-8 mt-20">

{[
"Sodium",
"Lithium",
"Ashford",
"Formula"
].map((item,i)=>(
<div
key={i}
className="bg-white/5 border border-white/10 rounded-[34px] p-10 text-center backdrop-blur-xl"
>

<div className="w-20 h-20 rounded-full bg-[#EAA33F] text-[#0F3250] mx-auto flex items-center justify-center text-3xl font-black">
{i+1}
</div>

<h3 className="mt-8 text-3xl font-black text-[#EAA33F]">
{item}
</h3>

</div>
))}

</div>

</div>

</section>





{/* BENEFITS */}
<section className="py-32 bg-white">

<div className="max-w-7xl mx-auto px-6">

<div className="text-center">
<h2 className="text-6xl font-black">
Why Densification?
</h2>
</div>

<div className="grid md:grid-cols-3 gap-8 mt-20">

{[
["Abrasion Resistance","Improved wear performance"],
["Gloss Retention","Long lasting polished finish"],
["Lifecycle Savings","Lower maintenance costs"]
].map((item,i)=>(
<div
key={i}
className="bg-slate-50 rounded-[34px] shadow-xl p-10"
>

<ShieldCheck
size={50}
className="text-[#EAA33F]"
/>

<h4 className="mt-8 text-3xl font-black">
{item[0]}
</h4>

<p className="mt-5 text-slate-600">
{item[1]}
</p>

</div>
))}

</div>

</div>

</section>





{/* PROCESS */}
<section className="py-32 bg-slate-50">

<div className="max-w-7xl mx-auto px-6">

<div className="text-center">
<h2 className="text-6xl font-black">
4 Step Process
</h2>
</div>


<div className="grid md:grid-cols-4 gap-8 mt-20">

{[
"Grinding",
"Densifier Application",
"Chemical Reaction",
"Polished Finish"
].map((step,i)=>(
<div
key={i}
className="bg-white rounded-[34px] shadow-xl p-10 text-center"
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





{/* CTA */}
<section className="py-28">

<div className="max-w-6xl mx-auto px-6">

<div className="rounded-[50px] bg-gradient-to-r from-[#0F3250] to-[#184d74] text-white p-20 text-center shadow-2xl relative overflow-hidden">

<div className="absolute right-0 top-0 w-96 h-96 bg-[#EAA33F]/10 rounded-full blur-3xl"/>

<h2 className="text-6xl font-black relative z-10">
Need Stronger
<span className="block text-[#EAA33F]">
Concrete Floors?
</span>
</h2>

<p className="mt-8 text-xl text-slate-300">
Talk with our specialists for custom densification solutions.
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