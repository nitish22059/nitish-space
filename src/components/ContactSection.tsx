import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Linkedin, Github, Mail, Send } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  // Removed form state and handler. Using mailto link instead.

  return (
    <section id="connect" className="py-20">
      <div className="section-container">
        <h2 className="section-title fade-in">Connect with me</h2>
        <div className="max-w-2xl mx-auto">
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12 fade-in fade-in-delay-1">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-2"
                onClick={() => window.open('https://www.linkedin.com/in/nitish-naik-', '_blank')}
              >
                <motion.div
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Linkedin className="h-5 w-5" />
                </motion.div>
                LinkedIn
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-2"
                onClick={() => window.open('https://github.com/Nitish-Naik', '_blank')}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Github className="h-5 w-5" />
                </motion.div>
                GitHub
              </Button>
            </motion.div>
          </div>

          {/* Direct Email Button */}
          <div className="bg-card border border-border rounded-lg p-8 shadow-sm fade-in fade-in-delay-2 flex flex-col items-center">
            <a
              href="mailto:nitishnaik2022@gmail.com?subject=Contact%20from%20Portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg text-lg font-semibold hover:bg-primary/90 transition"
            >
              <Mail className="h-5 w-5" />
              Email Me
            </a>
            <p className="mt-4 text-muted-foreground text-center text-sm">Or reach out on LinkedIn/GitHub above.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;