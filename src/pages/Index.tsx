import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import OpenSourceSection from "@/components/OpenSourceSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <OpenSourceSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
