import { motion } from "framer-motion";
import { Code2, Zap, Users, Coffee } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      title: "Clean Code",
      desc: "Writing maintainable, scalable, and efficient code is my passion",
      icon: Code2,
    },
    {
      title: "Fast Learner",
      desc: "Quick to adapt to new technologies and frameworks",
      icon: Zap,
    },
    {
      title: "Team Player",
      desc: "Collaborative approach to solving complex problems",
      icon: Users,
    },
    {
      title: "Problem Solver",
      desc: "Love tackling challenging technical problems over coffee",
      icon: Coffee,
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#F8FAFC] border-t border-slate-200/80">
      <div className="section-container">
        {/* Section Header matching screenshot */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            About Me
          </h2>
          <p className="text-[#64748B] text-base sm:text-lg leading-relaxed">
            Passionate software engineer with experience building web applications
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
          {/* Left Column: My Story matching screenshot */}
          <motion.div
            className="lg:col-span-6 space-y-6"
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 space-y-5 shadow-sm">
              <h3 className="text-xl font-bold text-[#0F172A] border-b border-slate-100 pb-4">
                My Story
              </h3>

              <div className="space-y-4 text-[#64748B] text-sm sm:text-base leading-relaxed">
                <p>
                  I'm a <strong className="text-[#0F172A]">Digital Specialist Engineer L1 at Infosys</strong>, where I develop end-to-end features for large-scale e-commerce platforms serving 12 international markets using <strong>Next.js, React, TypeScript, and Node.js</strong>.
                </p>
                <p>
                  My background includes backend engineering at <strong className="text-[#0F172A]">Parsewave LLC</strong> (building automated LLM training data pipelines in Python & Pandas) and Associate Software Engineer at <strong className="text-[#0F172A]">Blackcoffer</strong>, where I built an end-to-end AI document platform with real-time multi-user editing and Supabase PostgreSQL.
                </p>
                <p>
                  I graduated with a <strong>Bachelor of Technology in Computer Science & Engineering</strong> from Chaitanya Bharathi Institute of Technology with an <strong>8.81 / 10 CGPA</strong>, along with open-source contributions to OWASP-BLT and Unsiloed-AI.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 2x2 Grid of 4 Feature Cards matching screenshot */}
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
                  className="bg-white border border-slate-200/80 rounded-2xl p-6 text-center space-y-3 shadow-sm hover:border-slate-300 transition-all"
                >
                  <div className="h-10 w-10 rounded-xl bg-[#F1F5F9] text-slate-800 flex items-center justify-center mx-auto">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-base font-bold text-[#0F172A]">{item.title}</h4>
                  <p className="text-xs text-[#64748B] leading-relaxed">{item.desc}</p>
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
