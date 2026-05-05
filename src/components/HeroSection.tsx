import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, FileText, X, Linkedin, Github, Mail } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [showResume, setShowResume] = useState(false);
  const [pdfLoading, setPdfLoading] = useState(true);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const openResume = () => {
    setShowResume(true);
    setPdfLoading(true);
  };

  const closeResume = () => setShowResume(false);

  const coreStack = ["Python", "Java", "PostgreSQL", "Redis Streams", "Linux", "Git", "TypeScript"];

  return (
    <section id="hero" className="min-h-[92vh] flex items-center bg-background pt-16">
      <div className="section-container">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary">
            Software Engineer | Open to Remote
          </p>
          <h1 className="hero-text mb-5 max-w-4xl">
            I build data pipelines, distributed scraping systems, and AI products.
          </h1>
          <p className="max-w-3xl text-lg sm:text-xl text-muted-foreground mb-6 leading-relaxed">
            Full-stack engineer focused on backend reliability, streaming workflows, queue-based systems, and practical product delivery.
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {coreStack.map((item) => (
              <span key={item} className="px-3 py-1.5 rounded-md border bg-secondary text-sm font-medium">
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <Button onClick={scrollToProjects} size="lg" className="font-medium">
              View Featured Projects
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button onClick={openResume} variant="outline" size="lg" className="font-medium">
              View Resume
              <FileText className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/nitish-naik1/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition" />
            </a>
            <a href="https://github.com/Nitish-Naik" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-6 w-6 text-muted-foreground hover:text-primary transition" />
            </a>
            <a href="mailto:nitishnaik2022@gmail.com" aria-label="Email">
              <Mail className="h-6 w-6 text-muted-foreground hover:text-primary transition" />
            </a>
          </div>
        </motion.div>
      </div>

      {showResume && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          aria-modal="true"
          role="dialog"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="relative bg-white dark:bg-gray-900 rounded-lg shadow-2xl max-w-3xl w-full border border-border flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <h3 className="text-lg font-semibold">Resume Preview</h3>
              <button
                className="text-muted-foreground hover:text-foreground transition-colors rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-primary"
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
                  <span className="text-sm text-muted-foreground">Loading PDF...</span>
                </div>
              )}
              <iframe
                src="https://drive.google.com/file/d/1rFTL_iTFNSuonXRXCY3LzrFzSD4Gw42t/preview"
                title="Resume"
                className="w-full h-[70vh] rounded border shadow-inner bg-gray-50 dark:bg-gray-800"
                allowFullScreen
                onLoad={() => setPdfLoading(false)}
                style={{ visibility: pdfLoading ? "hidden" : "visible" }}
              />
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
