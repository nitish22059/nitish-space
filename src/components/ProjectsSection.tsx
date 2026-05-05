import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  const featuredProjects = [
    {
      title: "Distributed Web Scraping Pipeline",
      problem: "Reliable web crawling needs more than scripts: task distribution, deduplication, retries, failed-task handling, and source-specific extraction.",
      built: "Built a Python crawl runtime with worker queues, Redis Streams support, atomic URL deduplication, exponential-backoff retries, dead-letter queues, JSONL output, run reports, and plugin-based crawlers.",
      tech: ["Python", "Redis Streams", "Pytest", "Linux", "Git", "Web Scraping"],
      githubUrl: "https://github.com/Nitish-Naik/Distributed-Web-Scraping-Pipeline",
    },
    {
      title: "CDFRS Extension",
      problem: "Streaming anomaly-detection experiments need repeatable dataset partitioning, realistic ingestion, detector composition, and throughput measurement.",
      built: "Built a research toolkit with CDFRS/SWD detectors, PySpark processing, Kafka producer/consumer examples, HIGGS/NIDS dataset partitioning, adaptive ensembling, and benchmarking utilities.",
      tech: ["Python", "PySpark", "Kafka", "Streaming Data", "Anomaly Detection", "Benchmarking"],
      githubUrl: "https://github.com/Nitish-Naik/CDFRS-Extension",
    },
  ];

  const additionalProjects = [
    {
      title: "FlowMind AI",
      description: "AI workflow orchestration engine for composing multi-step LLM pipelines from natural-language intent to structured execution.",
      tech: ["Next.js", "Tailwind", "FastAPI", "Redis", "OpenAI"],
      githubUrl: undefined,
    },
    {
      title: "LogIQ",
      description: "Distributed logging and AI debugging platform for high-throughput ingestion, search, and root-cause analysis.",
      tech: ["Next.js", "Node.js", "Redis Streams", "PostgreSQL", "OpenAI"],
      githubUrl: "https://github.com/Nitish-Naik/LogIQ",
    },
    {
      title: "CalmPilot",
      description: "Real-time user platform with authentication, subscriptions, and low-latency WebSocket-driven UI updates.",
      tech: ["Next.js", "React", "TypeScript", "Node.js", "WebSockets"],
      githubUrl: "https://github.com/Nitish-Naik/aariv/",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="section-container">
        <div className="max-w-3xl mb-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-2">Featured Work</p>
          <h2 className="text-3xl font-semibold mb-3">Projects that show how I think and build</h2>
          <p className="text-muted-foreground">
            The first two projects are the most relevant for data-heavy engineering roles: crawling infrastructure, streaming systems, distributed processing, and benchmarking.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-10">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              className="bg-card border border-border rounded-lg p-6 shadow-sm"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <div className="space-y-4 mb-5">
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">Problem</p>
                  <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">What I built</p>
                  <p className="text-muted-foreground leading-relaxed">{project.built}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-2.5 py-1 text-xs bg-secondary text-secondary-foreground rounded border">
                    {tech}
                  </span>
                ))}
              </div>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
                onClick={() => window.open(project.githubUrl, "_blank")}
              >
                <Github className="h-4 w-4" />
                View Code
              </Button>
            </motion.article>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {additionalProjects.map((project) => (
            <article key={project.title} className="bg-card border border-border rounded-lg p-5">
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded border">
                    {tech}
                  </span>
                ))}
              </div>
              {project.githubUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-5 flex items-center gap-2"
                  onClick={() => window.open(project.githubUrl, "_blank")}
                >
                  <Github className="h-4 w-4" />
                  View Code
                </Button>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
