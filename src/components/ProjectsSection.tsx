import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Image as ImageIcon } from "lucide-react";
import { motion } from "framer-motion";
import ImageGallery from "./ImageGallery";

// Import project images
import dashboardImg from "@/assets/project-dashboard.jpg";
import automationImg from "@/assets/project-automation.jpg";
import dataAnalysisImg from "@/assets/project-data-analysis.jpg";

const ProjectsSection = () => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState<string[]>([]);

  const projects = [
    {
      title: "React‑Flask Web Dashboard",
      description: "Interactive web dashboard for app review sentiment analysis using React frontend + Flask backend + Tableau visuals",
      tech: ["React", "Flask", "Python", "Tableau", "Pandas"],
      githubUrl: "#",
      liveUrl: "#",
      images: [dashboardImg, dashboardImg, dashboardImg] // In real project, you'd have multiple different screenshots
    },
    {
      title: "Automation with Selenium & Arduino",
      description: "Automated test suite & hardware integration demo showcasing web scraping and IoT connectivity",
      tech: ["Python", "Selenium", "Arduino", "IoT"],
      githubUrl: "#",
      liveUrl: null,
      images: [automationImg, automationImg]
    },
    {
      title: "Play Store Data Analysis",
      description: "Comprehensive analysis of Play Store app data using advanced data science techniques and visualizations",
      tech: ["Python", "Pandas", "Tableau", "Data Science"],
      githubUrl: "#",
      liveUrl: "#",
      images: [dataAnalysisImg, dataAnalysisImg, dataAnalysisImg]
    }
  ];

  const openGallery = (images: string[]) => {
    setCurrentImages(images);
    setGalleryOpen(true);
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="section-container">
        <h2 className="section-title fade-in">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card group fade-in fade-in-delay-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Project Image */}
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    onClick={() => openGallery(project.images)}
                  >
                    <ImageIcon className="h-4 w-4 mr-2" />
                    View Gallery
                  </Button>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <motion.span
                    key={tech}
                    className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded border"
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <Github className="h-4 w-4" />
                    </motion.div>
                    Code
                  </Button>
                </motion.div>
                {project.liveUrl && (
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="sm"
                      className="flex items-center gap-2"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <motion.div
                        animate={{ x: [0, 2, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </motion.div>
                      Demo
                    </Button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Gallery Modal */}
      <ImageGallery
        images={currentImages}
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
      />
    </section>
  );
};

export default ProjectsSection;