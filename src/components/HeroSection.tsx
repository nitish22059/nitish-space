import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background to-blue-light/10">
      <div className="section-container text-center">
        <div className="fade-in">
          <h1 className="hero-text mb-6">
            P Nitish
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Aspiring Data Engineer & ML Enthusiast — Student at CBIT
          </p>
          <Button 
            onClick={scrollToProjects}
            size="lg"
            className="font-medium hover:scale-105 transition-transform duration-200"
          >
            View Projects
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      
      {/* Subtle geometric decoration */}
      <div className="absolute top-1/4 left-10 w-16 h-16 border border-muted-foreground/20 rotate-45 hidden lg:block" />
      <div className="absolute bottom-1/4 right-10 w-12 h-12 bg-primary/10 rotate-12 hidden lg:block" />
    </section>
  );
};

export default HeroSection;