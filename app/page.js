import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import VideoServices from "@/components/sections/VideoServices";
import WhyChoose from "@/components/sections/WhyChoose";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <main className="relative w-full">
      
      {/* 01. STICKY HERO WRAPPER */}
      {/* h-[100vh] ensures it stays stuck for the full viewport height */}
      <div className="sticky top-0 h-[100vh] w-full z-0">
        <Hero />
      </div>

      {/* OVERLAPPING CONTENT WRAPPER */}
      {/* z-10 and relative position allow this div to slide OVER the hero */}
      <div className="relative z-10 bg-white shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        
        {/* 05. Social Proof */}
        <Clients />

        {/* 02. Context */}
        <About />

        {/* 03. Capabilities */}
        <section className="bg-slate-50/50">
          <Services />
          <VideoServices />
        </section>

        {/* 04. Reassurance */}
        <WhyChoose />

        {/* 06. Conversion */}
        <ContactCTA />
        
      </div>
    </main>
  );
}