import { GraduationCap, Award, BookOpen, GitPullRequest } from "lucide-react";
import { motion } from "framer-motion";

const EducationSection = () => {
  return (
    <section id="education" className="py-16 bg-slate-50 dark:bg-slate-950">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="figma-card space-y-4"
          >
            <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="h-10 w-10 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 flex items-center justify-center">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Education</h3>
                <p className="text-xs text-slate-500">Degree & Academic Performance</p>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-slate-900 dark:text-white text-base">
                Chaitanya Bharathi Institute of Technology, Hyderabad
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 font-medium">
                Bachelor of Technology in Computer Science & Engineering
              </p>
              <div className="pt-2 flex items-center justify-between text-xs font-semibold">
                <span className="text-slate-500">CGPA Score:</span>
                <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-200/60 dark:border-emerald-800/60">
                  8.81 / 10 CGPA
                </span>
              </div>
            </div>
          </motion.div>

          {/* Open Source Contributions Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="figma-card space-y-4"
          >
            <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="h-10 w-10 rounded-xl bg-purple-50 dark:bg-purple-950 text-purple-600 flex items-center justify-center">
                <GitPullRequest className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Open Source Contributions</h3>
                <p className="text-xs text-slate-500">Community Repositories & Tools</p>
              </div>
            </div>

            <div className="space-y-3 pt-1">
              <div className="p-3 rounded-xl bg-slate-100/60 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">OWASP-BLT</p>
                  <p className="text-[11px] text-slate-500">Bug Logging Tool & Security Dashboards</p>
                </div>
                <span className="figma-badge text-[10px]">Contributor</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-100/60 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">Unsiloed-AI</p>
                  <p className="text-[11px] text-slate-500">Open AI Research & Dataset Utilities</p>
                </div>
                <span className="figma-badge text-[10px]">Contributor</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-100/60 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">Parsewave LLC</p>
                  <p className="text-[11px] text-slate-500">Structured Data & LLM Pipeline Tools</p>
                </div>
                <span className="figma-badge text-[10px]">Developer</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
