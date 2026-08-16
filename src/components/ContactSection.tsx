import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
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
    <section id="contact" className="py-20 bg-[#F8FAFC] border-t border-slate-200/80">
      <div className="section-container">
        {/* Header matching screenshot */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Get In Touch
          </h2>
          <p className="text-[#64748B] text-base sm:text-lg leading-relaxed">
            Let's discuss your next project or potential collaboration opportunities
          </p>
        </div>

        {/* 2-Column Contact Layout matching screenshot */}
        <div className="grid lg:grid-cols-12 gap-10 max-w-5xl mx-auto items-start">
          {/* Left Column: Form Card matching screenshot */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
              <div>
                <h3 className="text-lg font-bold text-[#0F172A]">Send me a message</h3>
                <p className="text-xs text-[#64748B]">I'll get back to you within 24 hours</p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-[#F1F5F9] text-center space-y-3">
                  <div className="h-10 w-10 rounded-full bg-[#0B0F17] text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <h4 className="text-base font-bold text-[#0F172A]">Message Sent!</h4>
                  <p className="text-xs text-[#64748B]">
                    Thank you! I will respond to <strong>{formData.email}</strong> within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="figma-btn-outline text-xs py-2 px-4 mt-2"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 pt-1">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#0F172A]">Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-[#F1F5F9] border-none text-sm text-[#0F172A] focus:ring-2 focus:ring-slate-900 outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#0F172A]">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-[#F1F5F9] border-none text-sm text-[#0F172A] focus:ring-2 focus:ring-slate-900 outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#0F172A]">Subject</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-[#F1F5F9] border-none text-sm text-[#0F172A] focus:ring-2 focus:ring-slate-900 outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#0F172A]">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-[#F1F5F9] border-none text-sm text-[#0F172A] focus:ring-2 focus:ring-slate-900 outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="figma-btn-dark w-full py-3 text-sm font-semibold rounded-lg"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Right Column: Let's Connect Details matching screenshot */}
          <motion.div
            className="lg:col-span-5 space-y-6 pt-2"
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <div className="space-y-5">
              <div>
                <h3 className="text-lg font-bold text-[#0F172A]">Let's Connect</h3>
                <p className="text-xs text-[#64748B] leading-relaxed pt-2">
                  I'm always interested in hearing about new opportunities, whether it's a freelance project, full-time position, or just a chat about technology and innovation.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <a
                  href="mailto:nitishnaik2022@gmail.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="h-10 w-10 rounded-xl bg-[#E2E8F0] text-slate-800 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0F172A] group-hover:underline">Email</p>
                    <p className="text-xs text-[#64748B]">nitishnaik2022@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+919346144318"
                  className="flex items-center gap-4 group"
                >
                  <div className="h-10 w-10 rounded-xl bg-[#E2E8F0] text-slate-800 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0F172A] group-hover:underline">Phone</p>
                    <p className="text-xs text-[#64748B]">+91 9346144318</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-[#E2E8F0] text-slate-800 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0F172A]">Location</p>
                    <p className="text-xs text-[#64748B]">Bengaluru / Remote International</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
