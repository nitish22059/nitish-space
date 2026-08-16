import { GraduationCap, GitPullRequest } from "lucide-react";
import { motion } from "framer-motion";

const EducationSection = () => {
  return (
    <section id="education" className="py-16 bg-[#F8FAFC] border-t border-slate-200/80">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Education Card matching screenshot style */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm"
          >
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
              <div className="h-10 w-10 rounded-xl bg-[#F1F5F9] text-slate-800 flex items-center justify-center">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#0F172A]">Education</h3>
                <p className="text-xs text-[#64748B]">Degree & Academic Performance</p>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-[#0F172A] text-sm sm:text-base">
                Chaitanya Bharathi Institute of Technology, Hyderabad
              </h4>
              <p className="text-xs sm:text-sm text-[#64748B]">
                Bachelor of Technology in Computer Science & Engineering
              </p>
              <div className="pt-2 flex items-center justify-between text-xs font-semibold">
                <span className="text-[#64748B]">CGPA Score:</span>
                <span className="px-3 py-1 rounded-full bg-[#F1F5F9] text-[#0F172A] font-bold border border-slate-200/60">
                  8.81 / 10 CGPA
                </span>
              </div>
            </div>
          </motion.div>

          {/* Open Source Contributions Card matching screenshot style */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm"
          >
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
              <div className="h-10 w-10 rounded-xl bg-[#F1F5F9] text-slate-800 flex items-center justify-center">
                <GitPullRequest className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#0F172A]">Open Source Contributions</h3>
                <p className="text-xs text-[#64748B]">Community Repositories & Tools</p>
              </div>
            </div>

            <div className="space-y-3 pt-1">
              <div className="p-3 rounded-xl bg-[#F8FAFC] border border-slate-200/60 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-[#0F172A]">OWASP-BLT</p>
                  <p className="text-[11px] text-[#64748B]">Bug Logging Tool & Security Dashboards</p>
                </div>
                <span className="bg-[#F1F5F9] text-[#334155] text-[10px] font-medium rounded px-2 py-0.5">Contributor</span>
              </div>

              <div className="p-3 rounded-xl bg-[#F8FAFC] border border-slate-200/60 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-[#0F172A]">Unsiloed-AI</p>
                  <p className="text-[11px] text-[#64748B]">Open AI Research & Dataset Utilities</p>
                </div>
                <span className="bg-[#F1F5F9] text-[#334155] text-[10px] font-medium rounded px-2 py-0.5">Contributor</span>
              </div>

              <div className="p-3 rounded-xl bg-[#F8FAFC] border border-slate-200/60 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-[#0F172A]">Parsewave LLC</p>
                  <p className="text-[11px] text-[#64748B]">Structured Data & LLM Pipeline Tools</p>
                </div>
                <span className="bg-[#F1F5F9] text-[#334155] text-[10px] font-medium rounded px-2 py-0.5">Developer</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
