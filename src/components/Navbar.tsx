import { useState, useEffect } from "react";
import { Sparkles, FileText, Mail, Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="section-container flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("hero");
          }}
          className="flex items-center gap-2.5 group"
        >
          <div className="h-9 w-9 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-bold text-base shadow-sm group-hover:scale-105 transition-transform">
            N
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-900 dark:text-white text-lg tracking-tight leading-none group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Nitish Naik
            </span>
            <span className="text-[10px] font-semibold tracking-wider text-slate-500 uppercase leading-tight">
              Full-Stack Developer
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600 dark:text-slate-300">
          <button
            onClick={() => scrollToSection("elvoro")}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-semibold hover:bg-blue-100 transition-colors"
          >
            <Sparkles className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
            Elvoro Pitch
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("ai-demo")}
            className="hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            AI Demo
          </button>
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <Button
            onClick={() => scrollToSection("contact")}
            className="rounded-full bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 text-white font-medium px-5 py-2 text-sm shadow-sm"
          >
            <Mail className="h-4 w-4 mr-1.5" />
            Contact Me
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <button
            onClick={() => scrollToSection("elvoro")}
            className="w-full text-left px-3 py-2 text-blue-600 font-semibold bg-blue-50 dark:bg-blue-950/50 rounded-lg flex items-center justify-between"
          >
            <span>Elvoro Ltd Pitch</span>
            <Sparkles className="h-4 w-4" />
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="w-full text-left px-3 py-2 text-slate-700 dark:text-slate-200 font-medium"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="w-full text-left px-3 py-2 text-slate-700 dark:text-slate-200 font-medium"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="w-full text-left px-3 py-2 text-slate-700 dark:text-slate-200 font-medium"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="w-full text-left px-3 py-2 text-slate-700 dark:text-slate-200 font-medium"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("ai-demo")}
            className="w-full text-left px-3 py-2 text-slate-700 dark:text-slate-200 font-medium"
          >
            AI Demo
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="w-full mt-2 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 py-2.5 font-medium text-center"
          >
            Contact Me
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
