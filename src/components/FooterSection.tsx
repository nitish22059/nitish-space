import { Linkedin, Github, Mail, Sparkles } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800 text-center md:text-left">
          {/* Logo & Tagline */}
          <div className="space-y-1">
            <a href="#hero" className="flex items-center gap-2 justify-center md:justify-start">
              <div className="h-7 w-7 rounded-lg bg-white text-slate-900 font-extrabold flex items-center justify-center text-sm">
                N
              </div>
              <span className="font-bold text-white text-lg tracking-tight">Nitish Naik</span>
            </a>
            <p className="text-xs text-slate-500">
              Full-Stack Web Developer (Next.js) & AI Systems Engineer • Custom Built for Elvoro Ltd
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/nitish-naik1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/Nitish-Naik"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:nitishnaik2022@gmail.com"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Bottom copyright & status */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Nitish Naik. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for Elvoro Ltd & Remote Engineering</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
