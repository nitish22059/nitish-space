import { Linkedin, Github, Mail } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 py-10 border-t border-slate-200 dark:border-slate-800">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div className="text-center sm:text-left space-y-1">
            <a href="#hero" className="font-bold text-slate-900 dark:text-white text-lg tracking-tight hover:text-slate-700">
              Nitish Naik
            </a>
            <p className="text-xs text-[#64748B] dark:text-slate-400">
              Full-Stack Web Developer & AI Systems Engineer
            </p>
          </div>

          <div className="flex items-center gap-5">
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
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <p>© 2026 Nitish Naik. All rights reserved.</p>
          <p>Built with Next.js, React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
