import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const groups = [
    {
      title: "Core Languages",
      skills: ["Python", "TypeScript", "JavaScript", "Java", "Go"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "FastAPI", "REST APIs", "WebSockets", "Microservices"],
    },
    {
      title: "Data & Infrastructure",
      skills: ["PostgreSQL", "Redis Streams", "Kafka", "PySpark", "MongoDB", "MySQL", "Docker", "Linux", "Git"],
    },
    {
      title: "Systems",
      skills: ["Distributed Systems", "Data Pipelines", "Web Scraping", "Async Processing", "Concurrency", "Benchmarking"],
    },
    {
      title: "Frontend",
      skills: ["Next.js", "React", "Tailwind CSS", "HTML/CSS", "Supabase"],
    },
    {
      title: "AI",
      skills: ["OpenAI APIs", "LLM Integration", "Prompt Engineering", "Anomaly Detection"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30" ref={ref}>
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="section-title fade-in">Skills</h2>
          <p className="text-muted-foreground">
            Organized by the kind of work I do most: backend systems, data infrastructure, distributed workflows, and product engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((group, index) => (
            <motion.div
              key={group.title}
              className="bg-card border border-border rounded-lg p-5 shadow-sm"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <h3 className="font-semibold text-lg mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="px-2.5 py-1 text-xs bg-secondary text-secondary-foreground rounded border">
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
