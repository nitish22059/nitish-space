import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Sparkles, X, Code2, Database, Shield, Zap, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: "bookannotator",
      title: "BookAnnotatorPro",
      tagline: "Multimodal Vision AI & PDF.js Token Extraction Engine",
      category: "Full-Stack & AI",
      imageBg: "bg-gradient-to-r from-blue-600 to-indigo-600",
      description:
        "Engineered a digital annotation platform that extracts physical book highlights using browser-side PDF.js tokens and maps them accurately onto digital PDF documents via vision AI models.",
      highlights: [
        "Browser-side PDF.js token extraction combined with multimodal AI transcription.",
        "Asynchronous PostgreSQL-backed job queue with FOR UPDATE SKIP LOCKED for vision workloads.",
        "Built responsive React 19 interface with Tailwind CSS & shadcn/ui + Playwright E2E test suite.",
      ],
      tech: ["TypeScript", "React 19", "Next.js", "Node.js", "PostgreSQL", "Supabase", "PDF.js", "Playwright"],
      githubUrl: "https://github.com/Nitish-Naik",
      liveDemo: "https://github.com/Nitish-Naik",
    },
    {
      id: "ai-document-platform",
      title: "AI Document Analysis & Real-Time Editor",
      tagline: "Collaborative PDF/DOCX Editor supporting 5,000+ docs up to 50MB",
      category: "Enterprise Full-Stack",
      imageBg: "bg-gradient-to-r from-indigo-600 to-purple-600",
      description:
        "Built end-to-end at Blackcoffer using Next.js, FastAPI, Python, and Supabase. Features real-time multi-user collaboration, autosave, and high-performance document indexing.",
      highlights: [
        "Real-time multi-user collaboration and autosave for large documents up to 50MB.",
        "Optimized database query performance by 60% through custom PostgreSQL indexing & schema design.",
        "Elasticsearch on AWS EC2 + containerized backend with Docker and Jenkins CI/CD.",
      ],
      tech: ["Next.js", "FastAPI", "Python", "Supabase", "PostgreSQL", "Elasticsearch", "AWS EC2", "Docker"],
      githubUrl: "https://github.com/Nitish-Naik",
      liveDemo: "https://github.com/Nitish-Naik",
    },
    {
      id: "npm-crawler",
      title: "NPM Dependency Graph Crawler",
      tagline: "High-concurrency Rust/PyO3 BFS traversal over 3M+ npm packages",
      category: "Systems & Data Infrastructure",
      imageBg: "bg-gradient-to-r from-purple-600 to-pink-600",
      description:
        "Engineered a high-throughput crawler mapping the multi-million-edge npm dependency graph, backed by a durable PostgreSQL work queue and Rust native acceleration.",
      highlights: [
        "BFS traversal across 3M+ npm packages with dynamic token-bucket rate limiting.",
        "PostgreSQL work queue with lease expiration & crash recovery (FOR UPDATE SKIP LOCKED).",
        "Custom Rust/PyO3 native extension for fast JSON parsing and low-latency I/O.",
      ],
      tech: ["Python", "Rust", "PyO3", "PostgreSQL", "Docker", "Async I/O"],
      githubUrl: "https://github.com/Nitish-Naik",
      liveDemo: undefined,
    },
    {
      id: "infosys-ecommerce",
      title: "12-Market International E-Commerce Platform",
      tagline: "Infosys Next.js & Node.js Microservices at Scale",
      category: "Production Scale",
      imageBg: "bg-gradient-to-r from-slate-800 to-slate-900",
      description:
        "Built end-to-end features for a high-traffic international e-commerce platform serving 12 markets with SSR, SSG, CDN caching, and zero-downtime microservice migrations.",
      highlights: [
        "Node.js/Express microservices with PostgreSQL, MongoDB, Redis, JWT, RBAC & OAuth2.",
        "Sub-second page loads via Next.js SSR/SSG, code-splitting, and CDN caching.",
        "Automated Playwright, Jest, and RTL testing covering critical buyer checkout flows.",
      ],
      tech: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Playwright"],
      githubUrl: undefined,
      liveDemo: undefined,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            Featured Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Production systems, AI platforms & high-concurrency apps
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
            A selection of projects demonstrating full-stack Next.js expertise, Supabase PostgreSQL performance, and AI engineering.
          </p>
        </div>

        {/* 3-Column Card Deck Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="figma-card overflow-hidden flex flex-col justify-between hover:scale-[1.02] transition-all duration-300 border border-slate-200/80 dark:border-slate-800"
            >
              <div className="space-y-4">
                {/* Visual Header Banner */}
                <div className={`h-36 -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 ${project.imageBg} p-6 flex flex-col justify-between text-white relative`}>
                  <span className="self-start px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-md text-[11px] font-bold tracking-wide uppercase">
                    {project.category}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight">{project.title}</h3>
                    <p className="text-xs text-white/80 line-clamp-1">{project.tagline}</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-2">
                  {project.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-1.5 pt-1">
                  {project.highlights.slice(0, 2).map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="h-3.5 w-3.5 text-blue-500 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tech.map((t) => (
                    <span key={t} className="figma-badge text-[11px]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  View Architecture
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                      title="View Code on GitHub"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal Detail View */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-sm p-4"
          aria-modal="true"
          role="dialog"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl max-w-2xl w-full border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[90vh]"
          >
            <div className={`p-6 ${selectedProject.imageBg} text-white flex items-center justify-between`}>
              <div>
                <span className="text-xs uppercase font-bold text-white/80">{selectedProject.category}</span>
                <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1 rounded-lg bg-black/20 hover:bg-black/40 text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="p-6 space-y-6 overflow-auto">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">Overview</h4>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">Key Technical Achievements</h4>
                <div className="space-y-2">
                  {selectedProject.highlights.map((h: string, idx: number) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
                      <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">{h}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t: string) => (
                    <span key={t} className="figma-badge">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
