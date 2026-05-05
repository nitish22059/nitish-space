import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const OpenSourceSection = () => {
  const contributions = [
    {
      title: "OWASP-BLT",
      text: "Backend enhancements and secure-coding contributions to OWASP's open-source security platform.",
      url: "https://github.com/OWASP-BLT/BLT",
    },
    {
      title: "Unsiloed-AI",
      text: "AI data workflow and backend tooling contributions for collaborative model development.",
      url: "https://github.com/Unsiloed-ai/unsiloed",
    },
  ];

  return (
    <section id="open-source" className="py-20">
      <div className="section-container">
        <div className="max-w-3xl mb-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-2">Open Source</p>
          <h2 className="text-3xl font-semibold mb-3">Contributions beyond personal projects</h2>
          <p className="text-muted-foreground">
            I like working in real codebases where maintainability, secure defaults, and collaboration matter.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {contributions.map((item) => (
            <article key={item.title} className="bg-card border border-border rounded-lg p-5 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">{item.text}</p>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
                onClick={() => window.open(item.url, "_blank")}
              >
                <ExternalLink className="h-4 w-4" />
                View Project
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenSourceSection;
