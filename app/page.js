import AboutMeSection from "./_components/AboutMeSection";
import Footer from "./_components/Footer";
import HeroSection from "./_components/HeroSection";
import JourneySection from "./_components/JourneySection";
import ProjectsSection from "./_components/ProjectsSection";
import SomeWorkSection from "./_components/SomeWorkSection";

export default function Home() {
  return (
    <div className="max-w-275 mx-auto sm:px-10 px-2 overflow-hidden">
      <HeroSection />
      <AboutMeSection />
      <ProjectsSection />
      <SomeWorkSection />
      <JourneySection />
      <Footer />
    </div>
  );
}
