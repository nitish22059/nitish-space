import { motion } from "framer-motion";
import { Code, Zap, Users, Lightbulb, GraduationCap, Building2, Briefcase, CheckCircle2 } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      title: "Clean Code",
      desc: "Writing readable, maintainable, and type-safe Next.js & TypeScript code built for long-term scalability.",
      icon: Code,
    },
    {
      title: "Fast Learner",
      desc: "Quickly adapting to new AI frameworks, Supabase PostgreSQL schemas, Stripe webhooks, and project requirements.",
      icon: Zap,
    },
    {
      title: "Team Player",
      desc: "Collaborating effectively with non-technical founders & cross-functional teams to turn vision into reality.",
      icon: Users,
    },
    {
      title: "Problem Solver",
      desc: "Architecting high-performance database queries, real-time collaboration engines, and zero-downtime migrations.",
      icon: Lightbulb,
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
      <div className="section-container">
        {/* Section Header matching Figma */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] dark:text-white tracking-tight">
            About Me
          </h2>
          <p className="text-[#64748B] dark:text-slate-400 text-base sm:text-lg leading-relaxed">
            Passionate software engineer with experience building scalable applications
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
          {/* Left Column: My Story matching Figma */}
          <motion.div
            className="lg:col-span-6 space-y-6"
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="figma-card space-y-5">
              <h3 className="text-xl font-bold text-[#0F172A] dark:text-white border-b border-slate-100 dark:border-slate-800 pb-4">
                My Story
              </h3>

              <div className="space-y-4 text-[#64748B] dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I'm a <strong className="text-[#0F172A] dark:text-white">Digital Specialist Engineer L1 at Infosys</strong>, where I develop end-to-end features for large-scale e-commerce platforms serving 12 international markets using <strong>Next.js, React, TypeScript, and Node.js</strong>.
                </p>
                <p>
                  My background spans backend engineering at <strong className="text-[#0F172A] dark:text-white">Parsewave LLC</strong> (building automated LLM training data pipelines in Python & Pandas) and Associate Software Engineer at <strong className="text-[#0F172A] dark:text-white">Blackcoffer</strong>, where I built an end-to-end AI document platform with real-time multi-user editing and Supabase PostgreSQL.
                </p>
                <p>
                  I graduated with a <strong>Bachelor of Technology in Computer Science & Engineering</strong> from Chaitanya Bharathi Institute of Technology with an <strong>8.81 / 10 CGPA</strong>, along with open-source contributions to OWASP-BLT and Unsiloed-AI.
                </p>
              </div>

              {/* Quick Resume Badges */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 grid sm:grid-cols-2 gap-3 text-xs">
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium">
                  <Building2 className="h-4 w-4 text-slate-900 shrink-0" />
                  <span>Infosys • Next.js Engineer</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium">
                  <Briefcase className="h-4 w-4 text-slate-900 shrink-0" />
                  <span>Parsewave LLC • LLM Pipelines</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium">
                  <GraduationCap className="h-4 w-4 text-slate-900 shrink-0" />
                  <span>CBIT Hyderabad • 8.81 CGPA</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium">
                  <CheckCircle2 className="h-4 w-4 text-slate-900 shrink-0" />
                  <span>OWASP & Unsiloed Contributor</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 4 Feature Cards matching Figma */}
          <motion.div
            className="lg:col-span-6 grid sm:grid-cols-2 gap-5"
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
          >
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="figma-card hover:border-slate-300 transition-all space-y-3"
                >
                  <div className="h-10 w-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white flex items-center justify-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-lg font-bold text-[#0F172A] dark:text-white">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-[#64748B] dark:text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
