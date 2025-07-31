const AboutSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="section-container">
        <h2 className="section-title fade-in">About</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-8 shadow-sm fade-in fade-in-delay-1">
            <p className="text-lg leading-relaxed text-center">
              I'm a final‑year student at{" "}
              <span className="font-semibold text-primary">
                Chaitanya Bharathi Institute of Technology
              </span>{" "}
              (Hyderabad). Passionate about building Software Products. I contribute to open‑source and build real‑world applications 
              that solve meaningful problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;