import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, X, CheckCircle2 } from "lucide-react";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: "bookannotator",
      title: "BookAnnotatorPro",
      image: "/project-1.jpg",
      description:
        "Engineered a digital annotation platform that extracts physical book highlights using browser-side PDF.js tokens and maps them accurately onto digital PDF documents via vision AI models.",
      highlights: [
        "Browser-side PDF.js token extraction combined with multimodal AI transcription.",
        "Asynchronous PostgreSQL-backed job queue with FOR UPDATE SKIP LOCKED for vision workloads.",
        "Built responsive React 19 interface with Tailwind CSS & shadcn/ui + Playwright E2E test suite.",
      ],
      tech: ["TypeScript", "React 19", "Node.js", "PostgreSQL", "Supabase", "PDF.js"],
      githubUrl: "https://github.com/Nitish-Naik",
      liveDemo: "https://github.com/Nitish-Naik",
    },
    {
      id: "ai-document-platform",
      title: "AI Document Analysis & Real-Time Editor",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      description:
        "Built end-to-end at Blackcoffer using Next.js, FastAPI, Python, and Supabase. Features real-time multi-user collaboration, autosave, and high-performance document indexing.",
      highlights: [
        "Real-time multi-user collaboration and autosave for large documents up to 50MB.",
        "Optimized database query performance by 60% through custom PostgreSQL indexing & schema design.",
        "Elasticsearch on AWS EC2 + containerized backend with Docker and Jenkins CI/CD.",
      ],
      tech: ["Next.js", "TypeScript", "FastAPI", "Python", "Supabase", "PostgreSQL"],
      githubUrl: "https://github.com/Nitish-Naik",
      liveDemo: "https://github.com/Nitish-Naik",
    },
    {
      id: "npm-crawler",
      title: "NPM Dependency Graph Crawler",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
      description:
        "Engineered a high-throughput crawler mapping the multi-million-edge npm dependency graph, backed by a durable PostgreSQL work queue and Rust native acceleration.",
      highlights: [
        "BFS traversal across 3M+ npm packages with dynamic token-bucket rate limiting.",
        "PostgreSQL work queue with lease expiration & crash recovery (FOR UPDATE SKIP LOCKED).",
        "Custom Rust/PyO3 native extension for fast JSON parsing and low-latency I/O.",
      ],
      tech: ["Python", "Rust", "PyO3", "PostgreSQL", "Docker", "Async I/O"],
      githubUrl: "https://github.com/Nitish-Naik",
      liveDemo: "https://github.com/Nitish-Naik",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[#F8FAFC] border-t border-slate-200/80">
      <div className="section-container">
        {/* Header matching screenshot */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Featured Projects
          </h2>
          <p className="text-[#64748B] text-base sm:text-lg leading-relaxed">
            A selection of projects that showcase my skills and problem-solving abilities
          </p>
        </div>

        {/* 3-Column Card Deck Grid matching screenshot */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all"
            >
              <div>
                {/* Image Banner matching screenshot */}
                <div className="h-48 w-full overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-base font-bold text-[#0F172A]">{project.title}</h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Badges matching screenshot */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tech.map((t) => (
                      <span key={t} className="bg-[#F1F5F9] text-[#334155] text-[11px] font-medium rounded-md px-2.5 py-1">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer matching screenshot */}
              <div className="p-6 pt-0 flex items-center gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-slate-200 text-[#0F172A] bg-white hover:bg-slate-50 rounded-md px-3.5 py-1.5 text-xs font-medium inline-flex items-center gap-1.5 transition-colors"
                >
                  <Github className="h-3.5 w-3.5" />
                  Code
                </a>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="bg-[#0B0F17] hover:bg-[#1E293B] text-white rounded-md px-3.5 py-1.5 text-xs font-medium inline-flex items-center gap-1.5 transition-colors"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Live Demo
                </button>
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
            className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
          >
            <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold">{selectedProject.title}</h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1 rounded-lg bg-white/20 hover:bg-white/40 text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="p-6 space-y-6 overflow-auto">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Overview</h4>
                <p className="text-slate-700 text-sm leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Key Highlights</h4>
                <div className="space-y-2">
                  {selectedProject.highlights.map((h: string, idx: number) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-slate-900 shrink-0 mt-0.5" />
                      <p className="text-xs text-slate-700 font-medium">{h}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t: string) => (
                    <span key={t} className="bg-[#F1F5F9] text-[#334155] text-xs font-medium rounded-lg px-3 py-1.5 border border-slate-200/40">
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
