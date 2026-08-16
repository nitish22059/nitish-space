import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-[88vh] flex items-center pt-28 pb-16 bg-white relative overflow-hidden">
      <div className="section-container relative w-full">
        {/* Soft radial gray shadow blur effect behind circular portrait matching screenshot */}
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[380px] h-[380px] bg-slate-200/60 rounded-full blur-3xl pointer-events-none" />

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Text Content matching screenshot */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Main Headline matching screenshot */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-[1.15]">
              Hi, I'm Nitish Naik
            </h1>

            {/* Sub-headline matching screenshot */}
            <p className="text-xl sm:text-2xl font-medium text-[#64748B]">
              Full-Stack Software Engineer
            </p>

            {/* Description matching screenshot */}
            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-xl">
              I craft exceptional digital experiences through clean code and innovative solutions. Passionate about building scalable applications that make a difference.
            </p>

            {/* Action Buttons matching screenshot */}
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
            </div>

            {/* Small Outline Social Icons matching screenshot */}
            <div className="flex items-center gap-5 pt-3">
              <a
                href="https://github.com/Nitish-Naik"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-[#0B0F17] transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com/in/nitish-naik1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-[#0B0F17] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:nitishnaik2022@gmail.com"
                className="text-slate-600 hover:text-[#0B0F17] transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Perfect Circular Portrait with user photo matching screenshot */}
          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="relative">
              {/* Circular Avatar Mask matching screenshot */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[360px] lg:h-[360px] rounded-full overflow-hidden border-4 border-white shadow-xl bg-slate-100">
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
    </section>
  );
};

export default HeroSection;
