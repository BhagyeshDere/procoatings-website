import AboutHero from "@/components/about/AboutHero";
import AboutIdentity from "@/components/about/AboutIdentity";
import AboutVisionMission from "@/components/about/AboutVisionMission";
import AboutIndustries from "@/components/about/AboutIndustries";
import AboutProcess from "@/components/about/AboutProcess";
import AboutTeam from "@/components/about/AboutTeam";
import AboutCTA from "@/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      <AboutHero />
      <AboutIdentity />
      <AboutVisionMission />
      <AboutIndustries />
      <AboutProcess />
      <AboutTeam />
      <AboutCTA />
    </main>
  );
}