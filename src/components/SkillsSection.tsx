import { motion } from "framer-motion";
import { Layout, Server, Cloud, Bot } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Layout,
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-50 dark:bg-blue-950/60",
      skills: [
        "Next.js (App Router)",
        "React 19",
        "TypeScript",
        "Tailwind CSS",
        "HTML5 / CSS3",
        "Redux Toolkit",
        "shadcn/ui",
        "SSR & SSG Optimization",
        "Figma to Code",
      ],
    },
    {
      title: "Backend & Databases",
      icon: Server,
      color: "text-indigo-600 dark:text-indigo-400",
      bg: "bg-indigo-50 dark:bg-indigo-950/60",
      skills: [
        "Node.js & Express.js",
        "PostgreSQL",
        "Supabase SQL",
        "FastAPI (Python)",
        "MongoDB",
        "Redis Caching & Streams",
        "JWT / RBAC / OAuth2",
        "REST APIs",
        "WebSockets",
      ],
    },
    {
      title: "Cloud, Testing & DevOps",
      icon: Cloud,
      color: "text-purple-600 dark:text-purple-400",
      bg: "bg-purple-50 dark:bg-purple-950/60",
      skills: [
        "Vercel Deployment",
        "AWS EC2",
        "Docker & Containerization",
        "GitHub Actions",
        "Jenkins CI/CD",
        "Playwright E2E Testing",
        "Jest & React Testing Library",
        "Linux Runtime",
      ],
    },
    {
      title: "AI, Payments & AEO / SEO",
      icon: Bot,
      color: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-emerald-50 dark:bg-emerald-950/60",
      skills: [
        "Stripe Billing & Webhooks",
        "LLM Data Ingestion & Fine-Tuning",
        "AI Agentic Workflows",
        "AEO & GEO (AI SEO)",
        "JSON-LD Schema Markup",
        "PDF.js Vision Token Extraction",
        "Claude & Copilot Workflows",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900">
      <div className="section-container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            Skills & Technologies
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            A comprehensive toolkit for modern full-stack web development
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
            Technologies and frameworks I use to build scalable web applications, real-time engines, and AI systems.
          </p>
        </div>

        {/* 4 Skill Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="figma-card hover:border-slate-300 dark:hover:border-slate-700 space-y-5"
              >
                <div className="flex items-center gap-3.5 border-b border-slate-100 dark:border-slate-800 pb-4">
                  <div className={`h-11 w-11 rounded-xl ${cat.bg} ${cat.color} flex items-center justify-center shrink-0`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{cat.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="figma-badge">
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
