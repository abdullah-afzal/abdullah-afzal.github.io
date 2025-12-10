import { ExternalLink, Globe } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Luxury For You",
      description:
        "Full-stack e-commerce architecture with Next.js, MyFatoorah payment integration, SSR storefront, and Railway deployment for optimal performance.",
      tags: ["Next.js", "MyFatoorah", "SSR", "Railway"],
      type: "E-Commerce",
    },
    {
      title: "Ajoli Center / Sondos",
      description:
        "Multilingual e-commerce platform featuring ERP synchronization, OTP login system, and automated email/WhatsApp notification workflows.",
      tags: ["Multilingual", "ERP Sync", "OTP Auth", "Automation"],
      type: "E-Commerce",
    },
    {
      title: "Almila (UAE & SA)",
      description:
        "Multi-region store with shared inventory management, Buy Now Pay Later integrations (Tabby, Tamara), and AWS hosting infrastructure.",
      tags: ["Multi-region", "BNPL", "AWS", "Inventory"],
      type: "E-Commerce",
    },
    {
      title: "SaaS Internal Tools",
      description:
        "Built comprehensive dashboards, admin panels, and internal tools using React and Node.js for streamlined business operations.",
      tags: ["React", "Node.js", "Dashboard", "Admin Panel"],
      type: "SaaS",
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm tracking-wider mb-4 block">
            // featured work
          </span>
          <h2 className="section-title">
            Selected <span className="text-gradient">Projects</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group p-6 glass rounded-xl card-hover relative overflow-hidden"
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl transition-all duration-500 group-hover:bg-primary/10" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {project.type}
                  </span>
                  <Globe className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
