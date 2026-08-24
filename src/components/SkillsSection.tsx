import { motion } from "framer-motion";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "JavaScript", "TypeScript", "Python", "Go"],
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "Spring Boot",
        "WebSockets",
        "Microservices",
      ],
    },
    {
      title: "Databases",
      skills: [
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Kafka",
        "MySQL",
        "Elasticsearch",
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        "AWS",
        "Docker",
        "CI/CD",
        "GitHub Actions",
        "Vercel",
        "Linux",
        "Terraform",
      ],
    },
    {
      title: "Frontend",
      skills: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Engineering",
      skills: [
        "Git",
        "Jest",
        "Playwright",
        "Figma",
        "REST APIs",
        "WebSockets",
        "Agile",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white border-t border-slate-100">
      <div className="section-container">
        {/* Header matching screenshot */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Skills & Technologies
          </h2>
          <p className="text-[#64748B] text-base sm:text-lg leading-relaxed">
            A comprehensive technical toolkit for building high-performance software systems
          </p>
        </div>

        {/* 7 Skill Cards Grid matching exact 7 categories from resume image */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-200/80 rounded-2xl p-6 flex flex-col items-center text-center space-y-4 shadow-sm hover:border-slate-300 transition-all"
            >
              <h3 className="text-base font-bold text-[#0F172A]">{cat.title}</h3>

              <div className="flex flex-wrap justify-center gap-2 pt-1">
                {cat.skills.map((skill) => (
                  <span key={skill} className="figma-skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
