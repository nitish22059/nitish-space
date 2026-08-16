import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Full-Stack Web Developer Opportunity",
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
    }, 600);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
      <div className="section-container">
        {/* Header matching Figma */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] dark:text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-[#64748B] dark:text-slate-400 text-base sm:text-lg leading-relaxed">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        {/* 2-Column Contact Layout matching Figma */}
        <div className="grid lg:grid-cols-12 gap-10 max-w-5xl mx-auto items-start">
          {/* Left Column: Form Card */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="figma-card space-y-6">
              <h3 className="text-xl font-bold text-[#0F172A] dark:text-white">Send me a message</h3>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-center space-y-3">
                  <div className="h-12 w-12 rounded-full bg-[#0F172A] text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-bold text-[#0F172A] dark:text-white">Message Sent!</h4>
                  <p className="text-xs sm:text-sm text-[#64748B] dark:text-slate-300">
                    Thank you for reaching out. I will respond to your message shortly at <strong>{formData.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", subject: "Full-Stack Opportunity", message: "" });
                    }}
                    className="figma-btn-outline text-xs py-2 px-4 mt-2"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-slate-900 outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Email</label>
                      <input
                        type="email"
                        required
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-slate-900 outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Subject</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-slate-900 outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Message</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Your Message..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-slate-900 outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="figma-btn-dark w-full py-3 text-sm font-semibold"
                  >
                    {loading ? "Sending..." : "Send Message"}
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Right Column: Contact Details */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <div className="figma-card space-y-6">
              <h3 className="text-xl font-bold text-[#0F172A] dark:text-white">Let's Connect</h3>

              <div className="space-y-4">
                <a
                  href="mailto:nitishnaik2022@gmail.com"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 hover:border-slate-300 transition-colors group"
                >
                  <div className="h-10 w-10 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white flex items-center justify-center shrink-0 border border-slate-200/80">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Email</p>
                    <p className="text-sm font-bold text-[#0F172A] dark:text-white group-hover:underline">
                      nitishnaik2022@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+919346144318"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 hover:border-slate-300 transition-colors group"
                >
                  <div className="h-10 w-10 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white flex items-center justify-center shrink-0 border border-slate-200/80">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Phone</p>
                    <p className="text-sm font-bold text-[#0F172A] dark:text-white group-hover:underline">
                      +91 9346144318
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                  <div className="h-10 w-10 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white flex items-center justify-center shrink-0 border border-slate-200/80">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Location</p>
                    <p className="text-sm font-bold text-[#0F172A] dark:text-white">
                      Bengaluru / Remote International
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
                  className="figma-btn-outline text-xs py-2 px-4 flex-1 justify-center"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Nitish-Naik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="figma-btn-outline text-xs py-2 px-4 flex-1 justify-center"
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
