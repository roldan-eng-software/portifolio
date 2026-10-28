import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import MotionProvider from "@/components/MotionProvider";

export default function Home() {
  return (
    <MotionProvider>
      <main className="overflow-x-clip">
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
      </main>
    </MotionProvider>
  );
}
