import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import VideoServices from "@/components/sections/VideoServices";
import WhyChoose from "@/components/sections/WhyChoose";

import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <main className="overflow-x-hidden">

      {/* 01. Hook: Immediate visual impact and value proposition */}
      <Hero />

        {/* 05. Social Proof: Validating the "Why Choose" with big-name partners */}
      <Clients />

      {/* 02. Context: Who you are and your mission */}
      <About />

      {/* 03. Capabilities: Grouping Services and Video proof together for maximum authority */}
      <section className="bg-slate-50/50">
        <Services />
        <VideoServices />
      </section>

      {/* 04. Reassurance: Why your specific technical approach is superior */}
      <WhyChoose />

    

      {/* 06. Conversion: Final nudge to start a project */}
      <ContactCTA />

    </main>
  );
}