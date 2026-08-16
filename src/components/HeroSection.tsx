import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, FileText, X, Linkedin, Github, Mail, Sparkles, CheckCircle2, Globe, Database } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [showResume, setShowResume] = useState(false);
  const [pdfLoading, setPdfLoading] = useState(true);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-[92vh] flex items-center pt-28 pb-16 bg-gradient-to-b from-slate-50/50 via-white to-slate-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden">
      <div className="section-container relative">
        {/* Background ambient lighting */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-40 -right-20 w-96 h-96 bg-indigo-400/10 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Text Content */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/80 border border-blue-200/80 dark:border-blue-800/80 text-blue-700 dark:text-blue-300 text-xs font-semibold tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Digital Specialist Engineer L1 @ Infosys • Open for Remote
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
              Hi, I'm <span className="gradient-text">Nitish Naik</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300">
              Full-Stack Web Developer (Next.js, TypeScript, SQL, Stripe & AI Systems)
            </p>

            {/* Summary Body */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
              I build production-grade web applications from Figma designs to launch. Specialized in Next.js, React, Supabase PostgreSQL, microservices, real-time collaboration, and AI agentic workflows.
            </p>

            {/* Special Callout Banner for Elvoro Ltd */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50/90 via-indigo-50/90 to-purple-50/90 dark:from-slate-900 dark:via-blue-950/40 dark:to-slate-900 border border-blue-200/80 dark:border-blue-800/60 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-slate-100">
                <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                Custom Built for Elvoro Ltd (Full-Stack Next.js Position)
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Ready to deliver Elvoro's entire website independently from ground up using your Figma design, Tailwind CSS, Supabase PostgreSQL, Stripe payment billing, and top-tier AEO (AI SEO).
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="figma-badge bg-white dark:bg-slate-800 text-blue-700 dark:text-blue-300 font-semibold">
                  <CheckCircle2 className="h-3 w-3 text-blue-500" /> Next.js & Vercel
                </span>
                <span className="figma-badge bg-white dark:bg-slate-800 text-indigo-700 dark:text-indigo-300 font-semibold">
                  <Database className="h-3 w-3 text-indigo-500" /> Supabase & SQL
                </span>
                <span className="figma-badge bg-white dark:bg-slate-800 text-purple-700 dark:text-purple-300 font-semibold">
                  <Globe className="h-3 w-3 text-purple-500" /> Stripe & AEO / GEO
                </span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => scrollTo("projects")}
                className="figma-btn-primary"
              >
                View My Work
                <ArrowDown className="h-4 w-4" />
              </button>
              <button
                onClick={() => scrollTo("elvoro")}
                className="figma-btn-elvoro"
              >
                <Sparkles className="h-4 w-4" />
                Elvoro Proposal & Demos
              </button>
              <button
                onClick={() => setShowResume(true)}
                className="figma-btn-secondary"
              >
                <FileText className="h-4 w-4" />
                View Resume
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-5 pt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Connect:</span>
              <a
                href="https://linkedin.com/in/nitish-naik1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/Nitish-Naik"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:nitishnaik2022@gmail.com"
                className="text-slate-500 hover:text-red-500 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column Developer Portrait & Visual Card */}
          <motion.div
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative group max-w-sm sm:max-w-md w-full">
              {/* Glowing Background Effect */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500" />

              {/* Main Profile Card Container */}
              <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-xl space-y-6">
                <div className="relative overflow-hidden rounded-2xl aspect-square border border-slate-100 dark:border-slate-800 shadow-inner">
                  <img
                    src="/avatar.jpg"
                    alt="Nitish Naik - Full-Stack Engineer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                    <div className="text-white space-y-0.5">
                      <p className="font-bold text-lg">Nitish Naik</p>
                      <p className="text-xs text-blue-200">Bengaluru, KA • Remote International</p>
                    </div>
                  </div>
                </div>

                {/* Quick Info Grid */}
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                    <p className="text-xl font-bold text-slate-900 dark:text-white">12+</p>
                    <p className="text-xs text-slate-500">Global Markets (Infosys)</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                    <p className="text-xl font-bold text-slate-900 dark:text-white">5,000+</p>
                    <p className="text-xs text-slate-500">Docs Handled (Blackcoffer)</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                    <p className="text-xl font-bold text-slate-900 dark:text-white">8.81</p>
                    <p className="text-xs text-slate-500">CGPA (B.Tech CSE)</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                    <p className="text-xl font-bold text-blue-600 dark:text-blue-400">100%</p>
                    <p className="text-xs text-slate-500">Elvoro Tech Stack</p>
                  </div>
                </div>
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
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-4xl w-full border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[90vh]"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Nitish Naik - Official Resume</h3>
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
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
