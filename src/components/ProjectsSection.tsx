import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Image as ImageIcon } from "lucide-react";
import { motion } from "framer-motion";
import ImageGallery from "./ImageGallery";

// Import project images
import dashboardImg from "../../public/assets/dashboard1.png";
import dashboardImg2 from "../../public/assets/dashboard2.png";
import dashboardImg3 from "../../public/assets/dashboard3.png";
import dashboardImg4 from "../../public/assets/dashboard4.png";
import dashboardImg5 from "../../public/assets/dashboard5.png";
import dashboardImg6 from "../../public/assets/dashboard6.png";
import documentImg from "../../public/assets/document1.png";
import documentImg2 from "../../public/assets/document2.png";
import documentImg3 from "../../public/assets/document3.png";
import documentImg4 from "../../public/assets/document4.png";
import documentImg5 from "../../public/assets/document5.png";
import documentImg6 from "../../public/assets/document6.png";
import documentImg7 from "../../public/assets/document7.png";
import documentImg8 from "../../public/assets/document8.png";
import automationImg from "../../public/assets/project-automation.jpg";
import dataAnalysisImg from "../../public/assets/project-data-analysis.jpg";



import instant0 from "../../public/assets/instant0.png";
import instant00 from "../../public/assets/instant00.png";
import instant1 from "../../public/assets/instant1.png";
import instant2 from "../../public/assets/instant2.png";
import instant3 from "../../public/assets/instant3.png";
import instant4 from "../../public/assets/instant4.png";
import instant5 from "../../public/assets/instant5.png";
import instant6 from "../../public/assets/instant6.png";
import instant7 from "../../public/assets/instant7.png";
import instant8 from "../../public/assets/instant8.png";


const ProjectsSection = () => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState<string[]>([]);

  const projects = [
    {
      title: "AI Document Portal",
      description: "Enable intelligent content generation, contextual suggestions, and smart automation tool using GPT-based models, content parsing, and reusable libraries. The AI system will assist in generating content sections, recommending clauses, and improving user productivity with minimal manual input.",
      tech: ["Next.js", "TypeScript", "OpenAI", "Supabase", "Tailwind CSS"],
      githubUrl: "#",
      liveUrl: "#",
      images: [documentImg, documentImg2, documentImg3, documentImg4, documentImg5, documentImg6, documentImg7, documentImg8]
    },
    {
      title: "React‑Flask Web Dashboard",
      description: "Interactive web dashboard for app analysis using React frontend + Flask backend",
      tech: ["React", "Flask", "Python", "Tableau", "Pandas"],
      githubUrl: "https://github.com/Nitish-Naik/Dasboard-Analysis",
      liveUrl: "#",
      images: [dashboardImg, dashboardImg2, dashboardImg3, dashboardImg4, dashboardImg5, dashboardImg6]
    },
    {
      title: "Automation with Python & Selenium",
      description: "Automated Vedabase.io for scraping verses, translation, meaning etc.",
      tech: ["Python", "Selenium"],
      githubUrl: "https://github.com/Nitish-Naik/bgscrape",
      liveUrl: null,
      images: [automationImg]
    },
    {
      title: "Data Scraping Using Automation",
      description: "Comprehensive Automation of Meeseva for scraping different departments",
      tech: ["Python", "Selenium"],
      githubUrl: "https://github.com/Nitish-Naik/meeseva",
      liveUrl: "#",
      images: [dataAnalysisImg, dataAnalysisImg, dataAnalysisImg]
    },
    {
      title: "Instant Dev Logs",
      description: "Transform Your Application Logs Into Actionable Insights",
      tech: ["Next.js", "Typescript", "Convex", "Tailwind"],
      githubUrl: "https://github.com/nitish22059/nitish-space",
      liveUrl: "https://instantdevlogs.netlify.app/",
      images: [instant0, instant0, instant1, instant2, instant3, instant4, instant5, instant6, instant7, instant8],
    },
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
                { /*project.liveUrl && (
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
                )} */}
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