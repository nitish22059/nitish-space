import { useState } from "react";
import { motion } from "framer-motion";
import { Bot, Sparkles, Send, RefreshCw, Layers, TrendingUp, Share2, FileText, CheckCircle2, Play, Terminal } from "lucide-react";

const ElvoroAiPlayground = () => {
  const [activeTab, setActiveTab] = useState<"analysis" | "social" | "content">("analysis");
  const [isProcessing, setIsProcessing] = useState(false);
  const [industryInput, setIndustryInput] = useState("Fintech & AI SaaS");
  const [analysisResult, setAnalysisResult] = useState<any>(null);

  const runIndustryAnalysis = () => {
    setIsProcessing(true);
    setAnalysisResult(null);
    setTimeout(() => {
      setAnalysisResult({
        marketSize: "$4.2B TAM in 2026",
        growthRate: "+34.2% YoY",
        topCompetitors: ["AgenticFlow", "MarketSense AI", "HyperScale B2B"],
        agentRecommendation: "Launch targeted multi-channel campaign highlighting automated SQL data connectors and instant Stripe sub-second checkout.",
        keyKeywords: ["agentic marketing", "AI industry analysis", "B2B social automation"],
      });
      setIsProcessing(false);
    }, 900);
  };

  return (
    <section id="ai-demo" className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950 border border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-xs font-semibold mb-3">
            <Bot className="h-4 w-4" />
            Interactive Agentic Systems Sandbox
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
            Elvoro Product Architecture Demo
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            Test live interactive prototypes representing Elvoro's three core AI solutions built in React & TypeScript.
          </p>
        </div>

        {/* Interactive Container */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-xl overflow-hidden max-w-5xl mx-auto">
          {/* Tab Navigation Header */}
          <div className="flex border-b border-slate-200 dark:border-slate-800 bg-slate-100/60 dark:bg-slate-950/60 p-2 gap-2 overflow-x-auto">
            <button
              onClick={() => setActiveTab("analysis")}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all whitespace-nowrap ${
                activeTab === "analysis"
                  ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <TrendingUp className="h-4 w-4" />
              1. Agentic Industry Analysis
            </button>
            <button
              onClick={() => setActiveTab("social")}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all whitespace-nowrap ${
                activeTab === "social"
                  ? "bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Share2 className="h-4 w-4" />
              2. B2B Social Media Agent
            </button>
            <button
              onClick={() => setActiveTab("content")}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all whitespace-nowrap ${
                activeTab === "content"
                  ? "bg-white dark:bg-slate-800 text-purple-600 dark:text-purple-400 shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <FileText className="h-4 w-4" />
              3. AI Content Generator
            </button>
          </div>

          {/* Tab Content Area */}
          <div className="p-6 sm:p-8">
            {activeTab === "analysis" && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4 items-end">
                  <div className="flex-1 space-y-2 w-full">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Target Industry / Niche Market:
                    </label>
                    <input
                      type="text"
                      value={industryInput}
                      onChange={(e) => setIndustryInput(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                  <button
                    onClick={runIndustryAnalysis}
                    disabled={isProcessing}
                    className="figma-btn-primary py-3 px-6 h-[46px] whitespace-nowrap"
                  >
                    {isProcessing ? (
                      <>
                        <RefreshCw className="h-4 w-4 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Play className="h-4 w-4" />
                        Run Agent Analysis
                      </>
                    )}
                  </button>
                </div>

                {/* Agent Output Terminal Window */}
                <div className="rounded-2xl bg-slate-950 text-slate-200 p-5 font-mono text-sm border border-slate-800 space-y-4 shadow-inner">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs text-slate-500">
                    <div className="flex items-center gap-2">
                      <Terminal className="h-4 w-4 text-blue-400" />
                      <span>Elvoro Agent Execution Engine • Node.js / Next.js Server Action</span>
                    </div>
                    <span className="text-emerald-400 font-semibold">● ACTIVE</span>
                  </div>

                  {!analysisResult && !isProcessing && (
                    <p className="text-slate-500 italic">Click "Run Agent Analysis" above to trigger market intelligence pipeline...</p>
                  )}

                  {isProcessing && (
                    <div className="space-y-2 text-slate-400">
                      <p className="flex items-center gap-2 text-blue-400">
                        <RefreshCw className="h-3.5 w-3.5 animate-spin" /> [Agent 1] Crawling market signals for: {industryInput}...
                      </p>
                      <p className="flex items-center gap-2 text-indigo-400">
                        <RefreshCw className="h-3.5 w-3.5 animate-spin" /> [Agent 2] Synthesizing B2B competitor positioning...
                      </p>
                    </div>
                  )}

                  {analysisResult && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-3 text-xs">
                        <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                          <span className="text-slate-400 block">Est. Market Size:</span>
                          <span className="text-emerald-400 font-bold text-base">{analysisResult.marketSize}</span>
                        </div>
                        <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                          <span className="text-slate-400 block">Growth Momentum:</span>
                          <span className="text-blue-400 font-bold text-base">{analysisResult.growthRate}</span>
                        </div>
                      </div>

                      <div>
                        <span className="text-xs text-slate-400 block mb-1">Key Competitors Detected:</span>
                        <div className="flex flex-wrap gap-2">
                          {analysisResult.topCompetitors.map((comp: string) => (
                            <span key={comp} className="px-2.5 py-1 rounded bg-slate-800 text-xs text-slate-300 border border-slate-700">
                              {comp}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-blue-950/40 border border-blue-800/60 text-blue-200 text-xs leading-relaxed">
                        <span className="font-bold text-blue-300 block mb-1">💡 Agent Strategy Synthesis:</span>
                        {analysisResult.agentRecommendation}
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            )}

            {activeTab === "social" && (
              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-xs sm:text-sm text-indigo-900 dark:text-indigo-200">
                  <strong>B2B Social Media Management Agent:</strong> Auto-schedules, adapts brand voice, and publishes synchronized posts across LinkedIn, X (Twitter), and Threads.
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-blue-600">LinkedIn Post (Auto-Generated)</span>
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 px-2 py-0.5 rounded font-semibold">Scheduled 09:00 AM</span>
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                      🚀 AI agentic marketing isn't just about speed—it's about precision. Our new autonomous market analyzer processes 50+ data signals in seconds. #AI #MarketingTech #B2B
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 dark:text-white">X / Twitter Thread</span>
                      <span className="text-[10px] bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 px-2 py-0.5 rounded font-semibold">Published</span>
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                      1/5 How AI agentic systems are replacing traditional manual industry research. Here is what we found after benchmarking 1,000 campaigns 👇
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "content" && (
              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 text-xs sm:text-sm text-purple-900 dark:text-purple-200">
                  <strong>AI Content Generation Engine at Scale:</strong> High-throughput long-form SEO articles, landing page copy, and case studies with real-time streaming preview.
                </div>
                <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Article Title: "The Rise of Agentic AI Marketing Systems"</span>
                    <span className="text-xs text-slate-500">Words: 1,420 • Readability: Grade 9</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Modern B2B growth demands rapid content synthesis and accurate market analysis. Traditional tools require hours of manual input. Elvoro's agentic platform automates data ingestion, competitive intelligence, and content distribution at scale...
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElvoroAiPlayground;
