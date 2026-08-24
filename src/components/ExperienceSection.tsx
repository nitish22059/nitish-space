import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Infosys",
      role: "Digital Specialist Engineer L1",
      period: "August 2025 – Present",
      location: "Bengaluru, India",
      align: "left",
      description:
        "Built end-to-end features for a large-scale e-commerce platform using Next.js, React, TypeScript, and Node.js across international markets. Developed microservices with PostgreSQL, MongoDB, Redis, JWT, RBAC & OAuth2.",
      tech: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL"],
    },
    {
      company: "Parsewave LLC",
      role: "Backend Engineer",
      period: "November 2025 – Feb 2026",
      location: "Remote, Part-time",
      align: "right",
      description:
        "Built end-to-end Python/Pandas data pipelines for generating LLM training and fine-tuning datasets, covering ingestion, cleaning, validation, deduplication, and export.",
      tech: ["Python", "Pandas", "LLM Datasets", "Data Pipelines"],
    },
    {
      company: "Blackcoffer",
      role: "Associate Software Engineer",
      period: "May 2025 – November 2025",
      location: "Remote",
      align: "left",
      description:
        "Developed an AI-powered document analysis platform end-to-end using Next.js, FastAPI, Python, and Supabase with real-time multi-user collaboration and 60% query speedup.",
      tech: ["Next.js", "FastAPI", "Python", "Supabase", "PostgreSQL"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white border-t border-slate-100">
      <div className="section-container">
        {/* Header matching screenshot */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Work Experience
          </h2>
          <p className="text-[#64748B] text-base sm:text-lg leading-relaxed">
            My professional journey and the impact I've made at each organization
          </p>
        </div>

        {/* Central Vertical Timeline matching screenshot */}
        <div className="max-w-5xl mx-auto relative">
          {/* Central Line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-slate-200 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isLeft = exp.align === "left";
              return (
                <div key={exp.company + exp.role} className="relative flex items-center justify-between md:justify-normal">
                  {/* Timeline Dot Node matching screenshot */}
                  <div className="absolute left-1/2 -translate-x-1/2 h-4 w-4 rounded-full border-2 border-[#0B0F17] bg-white z-10 hidden md:block" />

                  {/* Card Container alternating left & right */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`w-full md:w-[46%] ${
                      isLeft ? "md:mr-auto" : "md:ml-auto"
                    }`}
                  >
                    <div className="bg-white border border-slate-200/80 rounded-2xl p-6 space-y-4 shadow-sm hover:border-slate-300 transition-all">
                      <div>
                        <h3 className="text-lg font-bold text-[#0F172A]">{exp.role}</h3>
                        <p className="text-sm font-semibold text-slate-700">{exp.company}</p>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-xs text-[#64748B]">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5" />
                          {exp.location}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                        {exp.tech.map((t) => (
                          <span key={t} className="bg-[#F1F5F9] text-[#334155] text-[11px] font-medium rounded-md px-2.5 py-1">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
