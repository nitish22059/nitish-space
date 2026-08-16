import { motion } from "framer-motion";
import { Code, Zap, Users, Lightbulb, CheckCircle2, GraduationCap, Building2, Briefcase } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      title: "Clean Code",
      desc: "Writing scalable, well-typed Next.js and TypeScript code adhering to strict production & security standards.",
      icon: Code,
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-50 dark:bg-blue-950/60",
    },
    {
      title: "Fast Learner",
      desc: "Rapidly mastering new AI frameworks, Supabase PostgreSQL schemas, Stripe webhooks, and founder requirements.",
      icon: Zap,
      color: "text-indigo-600 dark:text-indigo-400",
      bg: "bg-indigo-50 dark:bg-indigo-950/60",
    },
    {
      title: "Team Player",
      desc: "Proactive technical discussions that turn non-technical founder visions into concrete, launch-ready software.",
      icon: Users,
      color: "text-purple-600 dark:text-purple-400",
      bg: "bg-purple-50 dark:bg-purple-950/60",
    },
    {
      title: "Problem Solver",
      desc: "60% database query acceleration, zero-downtime microservices migrations, and real-time collaboration engines.",
      icon: Lightbulb,
      color: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-emerald-50 dark:bg-emerald-950/60",
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Building software with speed, clarity & practical execution
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
            I am a full-stack engineer driven by product quality and backend reliability. Here is a glance at my journey and engineering principles.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: My Story */}
          <motion.div
            className="lg:col-span-6 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="figma-card space-y-5">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-4">
                My Story
              </h3>

              <div className="space-y-4 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                <p>
                  I'm currently working as a <strong className="text-slate-900 dark:text-white">Digital Specialist Engineer L1 at Infosys</strong>, where I develop end-to-end features for large-scale e-commerce applications serving 12 international markets using <strong>Next.js, React, TypeScript, and Node.js</strong>.
                </p>
                <p>
                  My experience spans backend engineering at <strong className="text-slate-900 dark:text-white">Parsewave LLC</strong> (building automated LLM training data pipelines in Python & Pandas) and Associate Software Engineer at <strong className="text-slate-900 dark:text-white">Blackcoffer</strong>, where I engineered an end-to-end AI document platform with real-time multi-user editing and Supabase PostgreSQL.
                </p>
                <p>
                  I hold a <strong>Bachelor of Technology in Computer Science & Engineering</strong> from Chaitanya Bharathi Institute of Technology with an <strong>8.81 / 10 CGPA</strong>, along with active open-source contributions to OWASP-BLT and Unsiloed-AI.
                </p>
              </div>

              {/* Quick Resume Badges */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 grid sm:grid-cols-2 gap-3 text-xs">
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <Building2 className="h-4 w-4 text-blue-600 shrink-0" />
                  <span>Infosys • Next.js Engineer</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <Briefcase className="h-4 w-4 text-indigo-600 shrink-0" />
                  <span>Parsewave LLC • LLM Data Pipelines</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <GraduationCap className="h-4 w-4 text-purple-600 shrink-0" />
                  <span>CBIT Hyderabad • 8.81 CGPA</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>OWASP & Unsiloed Contributor</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 4 Icon Feature Cards */}
          <motion.div
            className="lg:col-span-6 grid sm:grid-cols-2 gap-5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="figma-card hover:scale-[1.02] transition-transform space-y-3"
                >
                  <div className={`h-11 w-11 rounded-xl ${item.bg} ${item.color} flex items-center justify-center`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
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
