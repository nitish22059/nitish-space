import { GraduationCap, Briefcase } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      institution: "Blackcoffer",
      degree: "Associate Software Engineer",
      description: "Worked on many different projecs",
      icon: Briefcase,
      period: "May 2025 - Nov 2025"
    },
    {
      institution: "Chaitanya Bharathi Institute of Technology, Hyderabad",
      degree: "B.E. Student",
      description: "Computer Science Engineering",
      icon: GraduationCap,
      period: "2022 - 2026"
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="section-container">
        <h2 className="section-title fade-in">Experience & Education</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.institution}
                  className={`bg-card border border-border rounded-lg p-6 shadow-sm fade-in fade-in-delay-${index + 1}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{item.institution}</h3>
                      <p className="text-primary font-medium mb-2">{item.degree}</p>
                      <p className="text-muted-foreground mb-2">{item.description}</p>
                      <p className="text-sm text-muted-foreground">{item.period}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
