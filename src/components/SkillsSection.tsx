import { motion } from "framer-motion";
import { Layout, Server, Cloud, Bot } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Layout,
      skills: [
        "Next.js (App Router)",
        "React 19",
        "TypeScript",
        "Tailwind CSS",
        "HTML5 / CSS3",
        "Redux Toolkit",
        "shadcn/ui",
        "SSR & SSG",
        "Figma to Code",
      ],
    },
    {
      title: "Backend",
      icon: Server,
      skills: [
        "Node.js & Express.js",
        "PostgreSQL",
        "Supabase SQL",
        "FastAPI (Python)",
        "MongoDB",
        "Redis Caching",
        "JWT / RBAC / OAuth2",
        "REST APIs",
        "WebSockets",
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: [
        "AWS EC2",
        "Docker Containerization",
        "GitHub Actions",
        "Jenkins CI/CD",
        "Vercel Deployment",
        "Linux",
        "Git & GitHub",
      ],
    },
    {
      title: "AI, Payments & Testing",
      icon: Bot,
      skills: [
        "Stripe Billing & Webhooks",
        "LLM Fine-Tuning Pipelines",
        "AI Agentic Workflows",
        "AEO & GEO (AI SEO)",
        "PDF.js Token Extraction",
        "Playwright E2E Testing",
        "Jest & RTL",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-[#F8FAFC] dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800">
      <div className="section-container">
        {/* Header matching Figma */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] dark:text-white tracking-tight">
            Skills & Technologies
          </h2>
          <p className="text-[#64748B] dark:text-slate-400 text-base sm:text-lg leading-relaxed">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        {/* 4 Skill Cards Grid matching Figma */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="figma-card hover:border-slate-300 dark:hover:border-slate-700 space-y-5"
              >
                <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
                  <div className="h-10 w-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A] dark:text-white">{cat.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="figma-skill-chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
