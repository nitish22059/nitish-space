import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, Linkedin, Github, MessageSquare, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Elvoro Ltd Web Development Opportunity",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Let's build something extraordinary together
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
            Whether you are Elvoro's founder looking for a full-stack Next.js developer or have a project inquiry, drop a message below.
          </p>
        </div>

        {/* 2-Column Figma Contact Layout */}
        <div className="grid lg:grid-cols-12 gap-10 max-w-5xl mx-auto items-start">
          {/* Left Column: Form Card */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="figma-card space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-blue-600" />
                Send Me a Message
              </h3>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-center space-y-3">
                  <div className="h-12 w-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">Message Sent Successfully!</h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    Thank you for reaching out! I will respond to your message promptly at <strong>{formData.email || "your email"}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", subject: "Elvoro Ltd Web Development", message: "" });
                    }}
                    className="figma-btn-secondary text-xs py-2 px-4 mt-2"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Your Name:</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Founder / Hiring Manager"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Your Email:</label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Subject:</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Message:</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Share project details, timeline, or interview details..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="figma-btn-primary w-full py-3 text-sm font-semibold"
                  >
                    {loading ? "Sending Message..." : "Send Message"}
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Right Column: Contact Details */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="figma-card space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Let's Connect</h3>

              <div className="space-y-4">
                <a
                  href="mailto:nitishnaik2022@gmail.com"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 hover:border-blue-500/50 transition-colors group"
                >
                  <div className="h-10 w-10 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Direct Email</p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                      nitishnaik2022@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+919346144318"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 hover:border-blue-500/50 transition-colors group"
                >
                  <div className="h-10 w-10 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Phone / WhatsApp</p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors">
                      +91 9346144318
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                  <div className="h-10 w-10 rounded-lg bg-purple-50 dark:bg-purple-950 text-purple-600 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Location</p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                      Bengaluru / Hyderabad, India (Open to Remote International)
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
                <a
                  href="https://linkedin.com/in/nitish-naik1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="figma-btn-secondary text-xs py-2 px-4 flex-1"
                >
                  <Linkedin className="h-4 w-4 text-blue-600" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Nitish-Naik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="figma-btn-secondary text-xs py-2 px-4 flex-1"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
