import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skills = [
    { name: "Python", level: 90 },
    { name: "Pandas", level: 85 },
    { name: "NumPy", level: 80 },
    { name: "SQL/MySQL", level: 85 },
    { name: "Tableau", level: 75 },
    { name: "React", level: 80 },
    { name: "Node.js", level: 70 },
    { name: "Flask", level: 75 },
    { name: "Selenium", level: 70 },
    { name: "Arduino", level: 65 },
    { name: "Git", level: 85 },
    { name: "MLOps", level: 60 }
  ];

  return (
    <section id="skills" className="py-20" ref={ref}>
      <div className="section-container">
        <h2 className="section-title fade-in">Skills & Proficiency</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="space-y-2"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex justify-between items-center">
                <span className="font-medium text-foreground">{skill.name}</span>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1.2, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;