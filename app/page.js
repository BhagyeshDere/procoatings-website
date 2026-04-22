import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import WhyChoose from "@/components/sections/WhyChoose"; // ✅ NEW
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import Clients from "@/components/sections/Clients";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <main className="overflow-x-hidden">

      {/* 🔥 HERO */}
      <Hero />

      {/* 🔥 ABOUT */}
      <About />

      {/* ⭐ WHY CHOOSE */}
      <WhyChoose />

      {/* 🔥 SERVICES */}
      <Services />

      {/* ⭐ STATS */}
      <Stats />

      {/* 🔥 CLIENTS */}
      <Clients />

      {/* 🔥 CONTACT CTA */}
      <ContactCTA />

    </main>
  );
}