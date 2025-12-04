import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, FileText, X, Linkedin, Github, Mail } from "lucide-react";
import { motion } from "framer-motion";
import TypewriterEffect from "./TypewriterEffect";
// import profileImg from "@/assets/nitishbest.png";
// import profileImg from "@/public/assets/nitishbest.png"; // Adjust the path as needed

import profileImg from "../../public/assets/nitishbest.png"
const HeroSection = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };


  const [showResume, setShowResume] = useState(false);
  const [pdfLoading, setPdfLoading] = useState(true);
  const openResume = () => {
    setShowResume(true);
    setPdfLoading(true);
  };
  const closeResume = () => setShowResume(false);

  const subtitles = [
    "Associate Software Engineer",
    "Student at CBIT, Hyderabad",
    "Python • SQL • Data Analyst",
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
          <img
            src={profileImg}
            alt="Nitish Profile"
            className="mx-auto mb-4 rounded-full w-32 h-32 object-cover shadow-lg border-4 border-primary"
          />
          <h1 className="hero-text mb-2">
            P Nitish
          </h1>
          {/* Social/Contact Icons */}
          <div className="flex justify-center gap-4 mb-4">
            <a href="https://www.linkedin.com/in/nitish-naik-" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6 text-blue-600 hover:text-blue-800 transition" />
            </a>
            <a href="https://github.com/Nitish-Naik" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-6 w-6 text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white transition" />
            </a>
            <a href="mailto:nitishnaik2022@gmail.com" aria-label="Email">
              <Mail className="h-6 w-6 text-red-500 hover:text-red-700 transition" />
            </a>
          </div>
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
            <div className="flex flex-col items-center">
              <Button
                onClick={openResume}
                variant="outline"
                size="lg"
                className="font-medium hover:scale-105 transition-transform duration-200"
              >
                View Resume
                <FileText className="ml-2 h-4 w-4" />
              </Button>
              {/* <span className="mt-2 inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">Updated July 2025</span> */}
            </div>
            {/* Resume Modal */}
            {showResume && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
                aria-modal="true"
                role="dialog"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-3xl w-full border border-gray-200 dark:border-gray-800 flex flex-col"
                >
                  <div className="flex items-center justify-between px-6 pt-5 pb-2 border-b border-gray-100 dark:border-gray-800 rounded-t-2xl bg-gradient-to-r from-blue-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Resume Preview</h3>
                    <button
                      className="text-gray-400 hover:text-red-500 transition-colors rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-primary"
                      onClick={closeResume}
                      aria-label="Close resume preview"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>
                  <div className="p-4 flex-1 flex flex-col items-center justify-center min-h-[300px]">
                    {pdfLoading && (
                      <div className="flex flex-col items-center justify-center h-[70vh] w-full absolute top-0 left-0 bg-white/80 dark:bg-gray-900/80 z-10 rounded">
                        <svg className="animate-spin h-8 w-8 text-primary mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                        </svg>
                        <span className="text-sm text-muted-foreground">Loading PDF…</span>
                      </div>
                    )}
                    <iframe
                    
                      // src="https://drive.google.com/file/d/1T4bGWUAiWyS8kwFLvdqrI_UFi2c3L7Fp/preview"
                      // src="https://drive.google.com/file/d/1nf9Gx4q5lx-kUvcev87C8oDl6A8xovOH/preview"
                      src="https://drive.google.com/file/d/1rFTL_iTFNSuonXRXCY3LzrFzSD4Gw42t/preview"
                      title="Resume"
                      className="w-full h-[70vh] rounded border shadow-inner bg-gray-50 dark:bg-gray-800"
                      allowFullScreen
                      onLoad={() => setPdfLoading(false)}
                      style={{ visibility: pdfLoading ? 'hidden' : 'visible' }}
                    />
                  </div>
                </motion.div>
              </div>
            )}
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