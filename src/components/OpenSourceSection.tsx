import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const OpenSourceSection = () => {
  return (
    <section id="open-source" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="section-container">
        <h2 className="section-title fade-in text-3xl font-bold text-center mb-10 tracking-tight text-primary drop-shadow-lg">Open‑Source Contributions</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* OWASP-BLT */}
          {/* <div className="bg-white/90 dark:bg-card border border-blue-200 dark:border-blue-800 rounded-2xl p-8 shadow-lg flex flex-col items-center fade-in fade-in-delay-1">
            <span className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-2">OWASP‑BLT</span>
            <p className="text-center text-gray-700 dark:text-gray-200 mb-4">UI enhancements, issue triage, and community support for a leading open-source security project.</p>
            <Button
              variant="outline"
              className="flex items-center gap-2 mt-auto"
              onClick={() => window.open('https://github.com/OWASP-BLT/BLT', '_blank')}
            >
              <ExternalLink className="h-4 w-4" />
              View Project
            </Button>
          </div> */}
          {/* Better-Auth */}
          {/* <div className="bg-white/90 dark:bg-card border border-green-200 dark:border-green-800 rounded-2xl p-8 shadow-lg flex flex-col items-center fade-in fade-in-delay-2">
            <span className="text-2xl font-bold text-green-700 dark:text-green-400 mb-2">Better‑Auth</span>
            <p className="text-center text-gray-700 dark:text-gray-200 mb-4">The most comprehensive authentication framework for TypeScript.</p>
            <Button
              variant="outline"
              className="flex items-center gap-2 mt-auto"
              onClick={() => window.open('https://github.com/better-auth/better-auth', '_blank')}
            >
              <ExternalLink className="h-4 w-4" />
              View Project
            </Button>
          </div> */}
          {/* Parsewave - LLC */}
          <div className="bg-white/90 dark:bg-card border border-green-200 dark:border-green-800 rounded-2xl p-8 shadow-lg flex flex-col items-center fade-in fade-in-delay-2">
            <span className="text-2xl font-bold text-green-700 dark:text-green-400 mb-2">Parsewave - LLC</span>
            <p className="text-center text-gray-700 dark:text-gray-200 mb-4">Data that teaches models how to Think.</p>
            <Button
              variant="outline"
              className="flex items-center gap-2 mt-auto"
              onClick={() => window.open('https://github.com/better-auth/better-auth', '_blank')}
            >
              <ExternalLink className="h-4 w-4" />
              View Project
            </Button>
          </div>
          {/* Unsiloed-ai */}
          <div className="bg-white/90 dark:bg-card border border-pink-200 dark:border-pink-800 rounded-2xl p-8 shadow-lg flex flex-col items-center fade-in fade-in-delay-3">
            <span className="text-2xl font-bold text-pink-700 dark:text-pink-400 mb-2">Unsiloed‑ai</span>
            <p className="text-center text-gray-700 dark:text-gray-200 mb-4">Open-source AI tools and research. Built and reviewed features for collaborative AI development.</p>
            <Button
              variant="outline"
              className="flex items-center gap-2 mt-auto"
              onClick={() => window.open('https://github.com/Unsiloed-ai/unsiloed', '_blank')}
            >
              <ExternalLink className="h-4 w-4" />
              View Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSourceSection;