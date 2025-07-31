import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";
import { motion } from "framer-motion";
import TypewriterEffect from "./TypewriterEffect";

const HeroSection = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    // Create a simple resume download link
    const link = document.createElement('a');
    link.href = '/resume-p-nitish.pdf'; // You would need to add this file to public folder
    link.download = 'P-Nitish-Resume.pdf';
    link.click();
  };

  const subtitles = [
    "Aspiring Data Engineer & ML Enthusiast",
    "Student at CBIT, Hyderabad",
    "Python • SQL • Tableau Expert",
    "Open-Source Contributor"
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background to-blue-light/10 pt-16">
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-text mb-6">
            P Nitish
          </h1>
          <div className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto h-12">
            <TypewriterEffect texts={subtitles} className="text-lg sm:text-xl" />
          </div>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Button 
              onClick={scrollToProjects}
              size="lg"
              className="font-medium hover:scale-105 transition-transform duration-200"
            >
              View Projects
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              onClick={downloadResume}
              variant="outline"
              size="lg"
              className="font-medium hover:scale-105 transition-transform duration-200"
            >
              Download Resume
              <Download className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Subtle geometric decoration */}
      <motion.div
        className="absolute top-1/4 left-10 w-16 h-16 border border-muted-foreground/20 rotate-45 hidden lg:block"
        animate={{ rotate: [45, 225, 45] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-12 h-12 bg-primary/10 rotate-12 hidden lg:block"
        animate={{ rotate: [12, 192, 12] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
    </section>
  );
};

export default HeroSection;