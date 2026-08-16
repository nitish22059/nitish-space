import { useState } from "react";
import { Github, Linkedin, Mail, FileText, X } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [showResume, setShowResume] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-[88vh] flex items-center pt-28 pb-16 bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="section-container relative w-full">
        {/* Soft blur light effect behind circular portrait matching Figma screenshot */}
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[420px] h-[420px] bg-slate-200/50 dark:bg-slate-800/30 rounded-full blur-3xl pointer-events-none" />

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Text Content matching Figma layout */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Main Headline matching Figma */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] dark:text-white tracking-tight leading-[1.15]">
              Hi, I'm Nitish Naik
            </h1>

            {/* Sub-headline matching Figma */}
            <p className="text-xl sm:text-2xl font-medium text-[#64748B] dark:text-slate-400">
              Full-Stack Software Engineer
            </p>

            {/* Description matching Figma */}
            <p className="text-base sm:text-lg text-[#64748B] dark:text-slate-400 leading-relaxed max-w-xl">
              I craft exceptional digital experiences through clean code and innovative solutions. Digital Specialist Engineer at Infosys passionate about building scalable applications that make a difference.
            </p>

            {/* Action Buttons matching Figma */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => scrollTo("projects")}
                className="figma-btn-dark"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="figma-btn-outline"
              >
                Get In Touch
              </button>
              <button
                onClick={() => setShowResume(true)}
                className="figma-btn-outline border-transparent hover:border-slate-200 bg-transparent hover:bg-slate-100 text-slate-700"
              >
                <FileText className="h-4 w-4" />
                View Resume
              </button>
            </div>

            {/* Small Outline Social Icons matching Figma */}
            <div className="flex items-center gap-5 pt-3">
              <a
                href="https://github.com/Nitish-Naik"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/nitish-naik1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:nitishnaik2022@gmail.com"
                className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Circular Portrait with real photo matching Figma screenshot */}
          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="relative">
              {/* Circular Avatar Mask matching Figma site screenshot */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[360px] lg:h-[360px] rounded-full overflow-hidden border-4 border-slate-100 dark:border-slate-800 shadow-xl bg-slate-100">
                <img
                  src="/avatar.jpg"
                  alt="Nitish Naik"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Resume Preview Modal */}
      {showResume && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-sm p-4"
          aria-modal="true"
          role="dialog"
        >
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-4xl w-full border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[90vh]">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Nitish Naik - Resume</h3>
                <p className="text-xs text-slate-500">Digital Specialist Engineer L1 @ Infosys</p>
              </div>
              <button
                className="text-slate-400 hover:text-slate-700 dark:hover:text-white p-1 rounded-lg transition-colors"
                onClick={() => setShowResume(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-4 flex-1 overflow-auto min-h-[500px]">
              <iframe
                src="https://drive.google.com/file/d/1rFTL_iTFNSuonXRXCY3LzrFzSD4Gw42t/preview"
                title="Nitish Naik Resume"
                className="w-full h-[65vh] rounded-lg border border-slate-200 dark:border-slate-800"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
