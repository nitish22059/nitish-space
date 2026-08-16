import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ElvoroProposalSection from "@/components/ElvoroProposalSection";
import ElvoroAiPlayground from "@/components/ElvoroAiPlayground";
import AeoEngineSection from "@/components/AeoEngineSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => {
  return (
    <div className="min-h-screen relative bg-background text-foreground selection:bg-blue-500/20 selection:text-blue-600">
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <ElvoroProposalSection />
      <ElvoroAiPlayground />
      <AeoEngineSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
