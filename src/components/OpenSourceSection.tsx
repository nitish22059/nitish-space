import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const OpenSourceSection = () => {
  return (
    <section id="open-source" className="py-20">
      <div className="section-container">
        <h2 className="section-title fade-in">Open‑Source Contributions</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-8 shadow-sm fade-in fade-in-delay-1">
            <p className="text-lg leading-relaxed mb-6 text-center">
              Contributed to{" "}
              <span className="font-semibold text-primary">OWASP‑BLT UI enhancements</span>{" "}
              (issue #3822) and proposed a{" "}
              <span className="font-semibold text-primary">PyScript UI prototype for IOOS GSoC</span>{" "}
              (issue #64). I'm actively engaged in open‑source, collaborating in real-world tech communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                className="flex items-center gap-2"
                onClick={() => window.open('https://github.com/OWASP-BLT/BLT/issues/3822', '_blank')}
              >
                <ExternalLink className="h-4 w-4" />
                OWASP-BLT Issue #3822
              </Button>
              <Button
                variant="outline"
                className="flex items-center gap-2"
                onClick={() => window.open('https://github.com/ioos/gsoc/issues/64', '_blank')}
              >
                <ExternalLink className="h-4 w-4" />
                IOOS GSoC Issue #64
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSourceSection;