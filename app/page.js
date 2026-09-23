import AboutMeSection from "./_components/AboutMeSection";
import Footer from "./_components/Footer";
import FreelanceProject from "./_components/FreelenceSection";
import HeroSection from "./_components/HeroSection";
import JourneySection from "./_components/JourneySection";
import ProjectsSection from "./_components/ProjectsSection";
import SomeWorkSection from "./_components/SomeWorkSection";

export default function Home() {
  return (
    <main>
      <div className="max-w-275 mx-auto overflow-hidden px-2 sm:px-10">
        <HeroSection />
        <ProjectsSection />
        <FreelanceProject />
        <AboutMeSection />
        <SomeWorkSection />
        <JourneySection />
      </div>
      <Footer />
    </main>
  );
}