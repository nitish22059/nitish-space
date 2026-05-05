const AboutSection = () => {
  const focusAreas = [
    {
      title: "Data-heavy backend systems",
      text: "Queues, Redis Streams, PostgreSQL, async processing, and reliable APIs for workflows that need to keep moving under load.",
    },
    {
      title: "Crawling and automation",
      text: "Web scraping runtimes, source-specific plugins, retry handling, dead-letter queues, deduplication, and structured outputs.",
    },
    {
      title: "Product engineering",
      text: "Next.js, React, TypeScript, and AI integrations that turn backend capability into usable products.",
    },
  ];

  return (
    <section className="py-20">
      <div className="section-container">
        <div className="max-w-3xl mb-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-2">What I Do</p>
          <h2 className="text-3xl font-semibold mb-3">I like building the plumbing behind useful products.</h2>
          <p className="text-muted-foreground">
            My best work sits where product engineering meets data infrastructure: crawl, stream, process, store, and expose data through clean interfaces.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {focusAreas.map((area) => (
            <article key={area.title} className="bg-card border border-border rounded-lg p-5 shadow-sm">
              <h3 className="font-semibold text-lg mb-2">{area.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{area.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
