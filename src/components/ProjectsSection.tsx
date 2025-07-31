import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "React‑Flask Web Dashboard",
      description: "Interactive web dashboard for app review sentiment analysis using React frontend + Flask backend + Tableau visuals",
      tech: ["React", "Flask", "Python", "Tableau", "Pandas"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Automation with Selenium & Arduino",
      description: "Automated test suite & hardware integration demo showcasing web scraping and IoT connectivity",
      tech: ["Python", "Selenium", "Arduino", "IoT"],
      githubUrl: "#",
      liveUrl: null
    },
    {
      title: "Play Store Data Analysis",
      description: "Comprehensive analysis of Play Store app data using advanced data science techniques and visualizations",
      tech: ["Python", "Pandas", "Tableau", "Data Science"],
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="section-container">
        <h2 className="section-title fade-in">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`project-card fade-in fade-in-delay-${index + 1}`}
            >
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                >
                  <Github className="h-4 w-4" />
                  Code
                </Button>
                {project.liveUrl && (
                  <Button
                    size="sm"
                    className="flex items-center gap-2"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;