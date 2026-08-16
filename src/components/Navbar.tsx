import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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
          ? "bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="section-container flex items-center justify-between">
        {/* Brand Name matching Figma site */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("hero");
          }}
          className="font-bold text-xl tracking-tight text-slate-900 dark:text-white hover:text-slate-700 transition-colors"
        >
          Nitish Naik
        </a>

        {/* Desktop Nav Links matching Figma site */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
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
        </nav>

        {/* Black Pill Contact Button matching Figma site */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => scrollToSection("contact")}
            className="figma-btn-pill"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
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
            onClick={() => scrollToSection("contact")}
            className="w-full mt-2 figma-btn-pill justify-center"
          >
            Contact
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
