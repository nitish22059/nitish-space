import { motion } from "framer-motion";
import { Sparkles, Check, ArrowRight, ShieldCheck, Zap, Code2, Database, CreditCard, Layout, Rocket, FileCode2 } from "lucide-react";

const ElvoroProposalSection = () => {
  const deliverables = [
    {
      title: "Figma to Launch-Ready Next.js 15",
      desc: "Pixel-perfect conversion of Elvoro's Figma designs into semantic, accessible, production-grade Next.js App Router code.",
      icon: Layout,
    },
    {
      title: "Supabase & Postgres Data Architecture",
      desc: "Clean relational database schemas, secure Row Level Security (RLS) policies, and high-performance queries.",
      icon: Database,
    },
    {
      title: "Stripe Billing & Subscriptions",
      desc: "Complete Stripe checkout, Webhooks handling, tier management, and customer portal integration.",
      icon: CreditCard,
    },
    {
      title: "Top-Level AEO & GEO ('AI SEO')",
      desc: "Structured JSON-LD schema markup, OpenGraph metadata, fast SSR/SSG rendering for ChatGPT & Perplexity discovery.",
      icon: Zap,
    },
  ];

  const requirementsChecklist = [
    { req: "Next.js (React) & Vercel", proof: "Built 12-market international platform at Infosys & AI Document engine at Blackcoffer" },
    { req: "TypeScript (JavaScript)", proof: "Full type-safe codebases across all professional projects & open source" },
    { req: "Tailwind CSS & Modern UI", proof: "Expert in responsive UI/UX, animations, glassmorphism & component systems" },
    { req: "SQL (Postgres, Supabase)", proof: "60% query optimization at Blackcoffer & PostgreSQL FOR UPDATE SKIP LOCKED queues" },
    { req: "Stripe Integration", proof: "Implemented webhooks, multi-tier pricing, and payment checkout flows" },
    { req: "Founder Collaboration", proof: "Proactive technical communication to support non-technical founders & fast execution" },
  ];

  return (
    <section id="elvoro" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold mb-4">
            <Sparkles className="h-4 w-4" />
            Proposal for Elvoro Ltd • $3,000–$5,000 Fixed Contract
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Why Nitish Naik is the Ideal Developer for Elvoro
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Elvoro is building cutting-edge AI marketing systems. Here is my practical execution plan to transform your Figma design into a launch-ready, high-converting Next.js website.
          </p>
        </div>

        {/* 4 Deliverable Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {deliverables.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 shadow-lg"
              >
                <div className="h-12 w-12 rounded-xl bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Requirement Verification Matrix */}
        <div className="bg-slate-800/90 border border-slate-700 rounded-3xl p-6 sm:p-10 shadow-2xl max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 border-b border-slate-700/80 pb-6">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-emerald-400" />
                Elvoro Tech Stack Qualifications Verification
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Matching every requirement from your job description against verified professional experience.
              </p>
            </div>
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold whitespace-nowrap">
              100% Qualification Match
            </span>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {requirementsChecklist.map((item) => (
              <div key={item.req} className="p-4 rounded-xl bg-slate-900/60 border border-slate-700/60 flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-200">{item.req}</p>
                  <p className="text-xs text-slate-400 mt-0.5 leading-snug">{item.proof}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="mt-8 pt-6 border-t border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <p className="text-sm font-bold text-white">Ready to begin immediately</p>
              <p className="text-xs text-slate-400">Fixed price upon completion ($3,000–$5,000) with ongoing support.</p>
            </div>
            <a
              href="#contact"
              className="figma-btn-elvoro text-sm py-2.5 px-6"
            >
              Start Conversation
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElvoroProposalSection;
