import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-white text-[#64748B] py-12 border-t border-slate-200">
      <div className="section-container space-y-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-200/80">
          <div className="text-center sm:text-left space-y-1">
            <a href="#hero" className="font-bold text-[#0F172A] text-lg tracking-tight hover:text-slate-700">
              Nitish Naik
            </a>
            <p className="text-xs text-[#64748B]">
              Building the future, one line of code at a time.
            </p>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/Nitish-Naik"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-[#0F172A] transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/in/nitish-naik1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-[#0F172A] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-[#0F172A] transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href="mailto:nitishnaik2022@gmail.com"
              className="text-slate-600 hover:text-[#0F172A] transition-colors"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="text-center text-xs text-[#64748B]">
          © 2026 Nitish Naik. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
