import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2 } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Infosys",
      role: "Digital Specialist Engineer L1",
      period: "August 2025 – Present",
      location: "Bengaluru, Karnataka, India",
      type: "Full-Time",
      accent: "border-blue-500",
      bgBadge: "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
      points: [
        "Built end-to-end features for a large-scale e-commerce platform using Next.js, React, TypeScript, and Node.js across 12 international markets.",
        "Developed Node.js/Express microservices with PostgreSQL, MongoDB, and Redis, implementing JWT, RBAC, and OAuth2 for multi-tenant security.",
        "Improved frontend performance using SSR, SSG, code splitting, caching, and CDN optimization, while engineering reusable React components.",
        "Established automated testing with Playwright, Jest, and React Testing Library; contributed to zero-downtime Node.js 16–22 migration.",
      ],
      tech: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "MongoDB", "Redis", "Playwright", "Jest"],
    },
    {
      company: "Parsewave LLC",
      role: "Backend Engineer",
      period: "November 2025 – May 2026",
      location: "Remote",
      type: "Contract",
      accent: "border-indigo-500",
      bgBadge: "bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300",
      points: [
        "Built end-to-end Python/Pandas data pipelines for generating LLM training and fine-tuning datasets, covering ingestion, cleaning, validation, and export.",
        "Automated deduplication, schema validation, quality filtering, and annotation preparation across large structured datasets.",
      ],
      tech: ["Python", "Pandas", "LLM Fine-Tuning", "Data Pipelines", "Schema Validation", "JSONL Processing"],
    },
    {
      company: "Blackcoffer",
      role: "Associate Software Engineer",
      period: "May 2025 – November 2025",
      location: "Remote, Part-Time",
      type: "Part-Time",
      accent: "border-purple-500",
      bgBadge: "bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300",
      points: [
        "Developed an AI-powered document analysis platform end-to-end using Next.js, FastAPI, Python, and Supabase.",
        "Built a production PDF/DOCX editor in Next.js with real-time multi-user collaboration and autosave, supporting files up to 50MB across 5,000+ documents.",
        "Improved database query performance by 60% through indexing, query optimization, and schema design for document workflows.",
        "Managed high-availability Elasticsearch cluster on AWS EC2; deployed containerized services with Docker and Jenkins CI/CD.",
      ],
      tech: ["Next.js", "FastAPI", "Python", "Supabase", "PostgreSQL", "Elasticsearch", "AWS EC2", "Docker", "Jenkins"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            Work Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Proven track record delivering production software
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
            Professional roles building high-scale e-commerce engines, AI platforms, and LLM dataset pipelines.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="max-w-4xl mx-auto relative space-y-8">
          {/* Central timeline line */}
          <div className="absolute top-4 bottom-4 left-6 sm:left-1/2 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2 hidden sm:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company + exp.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline Card */}
              <div className="figma-card hover:border-slate-300 dark:hover:border-slate-700 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-blue-600" />
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.company}</h3>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${exp.bgBadge}`}>
                        {exp.role}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullet Points */}
                <div className="space-y-2.5 pt-1">
                  {exp.points.map((pt, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800">
                  {exp.tech.map((t) => (
                    <span key={t} className="figma-badge text-[11px]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
