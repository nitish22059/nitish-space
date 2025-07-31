import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Linkedin, Github, Mail, Send } from "lucide-react";

const ContactSection = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    if (!email.includes("@")) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setEmail("");
      setMessage("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-20">
      <div className="section-container">
        <h2 className="section-title fade-in">Connect with me</h2>
        <div className="max-w-2xl mx-auto">
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12 fade-in fade-in-delay-1">
            <Button
              variant="outline"
              size="lg"
              className="flex items-center gap-2"
              onClick={() => window.open('https://linkedin.com/in/pnitish', '_blank')}
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="flex items-center gap-2"
              onClick={() => window.open('https://github.com/pnitish', '_blank')}
            >
              <Github className="h-5 w-5" />
              GitHub
            </Button>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-lg p-8 shadow-sm fade-in fade-in-delay-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your email address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Hi Nitish, I'd love to connect about..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full min-h-[120px]"
                  required
                />
              </div>
              
              <Button
                type="submit"
                size="lg"
                className="w-full flex items-center justify-center gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <Mail className="h-4 w-4 animate-pulse" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;