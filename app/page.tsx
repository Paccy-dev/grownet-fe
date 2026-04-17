import Hero from "@/components/home/Hero";
import ImpactStats from "@/components/home/ImpactStats";
import TrustedBy from "@/components/home/TrustedBy";
import ProjectsSection from "@/components/home/ProjectsSection";
import HowItWorks from "@/components/home/HowItWorks";

export default function Home() {
  return (
    <div>
      <Hero />
      <ImpactStats />
      <TrustedBy />
      <ProjectsSection />
      <HowItWorks />
    </div>
  );
}
