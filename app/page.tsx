import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { PracticeSection } from "@/components/practice-section";
import { RoadmapSection } from "@/components/roadmap-section";
import { ProjectsSection } from "@/components/projects-section";
import { ObservationSection } from "@/components/observation-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main id="top">
      <Header />
      <HeroSection />
      <PracticeSection />
      <RoadmapSection />
      <ProjectsSection />
      <ObservationSection />
      <Footer />
    </main>
  );
}
