import { useState } from "react";
import { Search, Sparkles, CheckCircle2, Code2, Cpu, Globe2, Terminal } from "lucide-react";

const AeoEngineSection = () => {
  const [urlInput, setUrlInput] = useState("https://elvoro.com");
  const [schemaType, setSchemaType] = useState<"SoftwareApplication" | "Organization" | "FAQPage">("SoftwareApplication");
  const [copied, setCopied] = useState(false);

  const jsonLdSchemas = {
    SoftwareApplication: `{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Elvoro AI Marketing Platform",
  "operatingSystem": "Web",
  "applicationCategory": "BusinessApplication",
  "offers": {
    "@type": "Offer",
    "price": "99.00",
    "priceCurrency": "USD"
  },
  "description": "Agentic AI marketing systems for B2B social media management and industry analysis.",
  "author": {
    "@type": "Organization",
    "name": "Elvoro Ltd"
  }
}`,
    Organization: `{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Elvoro Ltd",
  "url": "https://elvoro.com",
  "logo": "https://elvoro.com/logo.png",
  "sameAs": [
    "https://linkedin.com/company/elvoro",
    "https://twitter.com/elvoro_ai"
  ],
  "description": "Innovative AI marketing technology company powering agentic marketing solutions."
}`,
    FAQPage: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What is Elvoro?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Elvoro is an AI marketing technology company providing agentic marketing systems."
    }
  }]
}`
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(jsonLdSchemas[schemaType]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="aeo" className="py-20 bg-white dark:bg-slate-900 border-t border-b border-slate-200 dark:border-slate-800">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-3">
            <Cpu className="h-4 w-4" />
            Top-Level AEO / GEO (AI Search Engine Optimization)
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
            AI Search Indexing & Schema Generator
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            Optimizing Elvoro's web presence not just for Google, but for ChatGPT, Perplexity, Claude, and SearchGPT using dynamic JSON-LD structured data and semantic HTML5.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          {/* Left Column: AEO Controls & Audit Scores */}
          <div className="lg:col-span-5 space-y-6">
            <div className="figma-card space-y-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Globe2 className="h-5 w-5 text-blue-600" />
                AEO & GEO Readiness Score
              </h3>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-slate-600 dark:text-slate-400">Structured Data (JSON-LD)</span>
                  <span className="text-emerald-600 dark:text-emerald-400">100 / 100</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div className="w-full h-full bg-emerald-500 rounded-full" />
                </div>

                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-slate-600 dark:text-slate-400">LLM Semantic Readability</span>
                  <span className="text-emerald-600 dark:text-emerald-400">98 / 100</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div className="w-[98%] h-full bg-emerald-500 rounded-full" />
                </div>

                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-slate-600 dark:text-slate-400">Core Web Vitals (LCP & INP)</span>
                  <span className="text-blue-600 dark:text-blue-400">100 / 100</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div className="w-full h-full bg-blue-500 rounded-full" />
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Schema Select:</p>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSchemaType("SoftwareApplication")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      schemaType === "SoftwareApplication"
                        ? "bg-blue-600 text-white shadow-sm"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900"
                    }`}
                  >
                    SaaS App Schema
                  </button>
                  <button
                    onClick={() => setSchemaType("Organization")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      schemaType === "Organization"
                        ? "bg-blue-600 text-white shadow-sm"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900"
                    }`}
                  >
                    Company Schema
                  </button>
                  <button
                    onClick={() => setSchemaType("FAQPage")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      schemaType === "FAQPage"
                        ? "bg-blue-600 text-white shadow-sm"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900"
                    }`}
                  >
                    FAQ Schema
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Code JSON-LD Preview */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-slate-950 text-slate-200 border border-slate-800 shadow-xl overflow-hidden">
              <div className="flex items-center justify-between px-5 py-3 border-b border-slate-800 bg-slate-900/60">
                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <Code2 className="h-4 w-4 text-emerald-400" />
                  <span>&lt;script type="application/ld+json"&gt;</span>
                </div>
                <button
                  onClick={copyToClipboard}
                  className="px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-300 transition-colors"
                >
                  {copied ? "Copied!" : "Copy Schema"}
                </button>
              </div>

              <pre className="p-5 font-mono text-xs text-emerald-300/90 leading-relaxed overflow-x-auto max-h-[350px]">
                {jsonLdSchemas[schemaType]}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AeoEngineSection;
