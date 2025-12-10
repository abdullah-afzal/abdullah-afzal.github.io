import { Code2, Database, Cloud, Layers } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Frontend Excellence",
      description: "Next.js, React, TypeScript with SSR/SSG optimization",
    },
    {
      icon: Database,
      title: "Backend Systems",
      description: "Node.js, Express, PostgreSQL, MongoDB",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Docker, AWS, Railway, CI/CD pipelines",
    },
    {
      icon: Layers,
      title: "E-Commerce Expert",
      description: "Multi-vendor platforms, payment gateways, ERP integration",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm tracking-wider mb-4 block">
            // about me
          </span>
          <h2 className="section-title">
            Building the <span className="text-gradient">Future</span> of Web
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Full Stack Developer with <span className="text-foreground font-semibold">3+ years</span> of experience 
              building scalable, production-grade web applications. I specialize in creating robust 
              solutions that handle complex business requirements while maintaining clean, maintainable code.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From <span className="text-foreground font-semibold">e-commerce platforms</span> serving 10k+ products 
              to <span className="text-foreground font-semibold">SaaS applications</span> and internal tools, 
              I've delivered end-to-end solutions focusing on performance, security, and exceptional user experience.
            </p>
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-primary font-medium link-underline"
              >
                Let's build something together
                <span className="text-xl">→</span>
              </a>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="p-6 glass rounded-xl card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
