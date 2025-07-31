const SkillsSection = () => {
  const skills = [
    "Python", "Pandas", "NumPy", "SQL/MySQL", "Tableau", "React", 
    "Node.js", "Flask", "Selenium", "Arduino", "Git", "MLOps"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <h2 className="section-title fade-in">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill}
              className={`skill-chip text-center fade-in fade-in-delay-${Math.min(index % 4 + 1, 4)}`}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;