const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "Next.js",
        "React",
        "TypeScript",
        "Redux",
        "Context API",
        "TailwindCSS",
        "SSR/SSG/ISR",
        "Jest",
        "React Testing Library",
      ],
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express",
        "REST APIs",
        "GraphQL",
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "API Routes",
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        "Docker",
        "AWS",
        "Railway",
        "GitHub Actions",
        "GitLab CI/CD",
        "Meilisearch",
        "Webhooks",
      ],
    },
    {
      title: "Specialties",
      skills: [
        "E-commerce Systems",
        "Multi-vendor Platforms",
        "Payment Gateways",
        "ERP Integration",
        "Plugin Development",
        "Authentication",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 md:py-32 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm tracking-wider mb-4 block">
            // tech stack
          </span>
          <h2 className="section-title">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="p-6 glass rounded-xl card-hover"
            >
              <h3 className="font-mono text-primary text-sm mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="skill-tag"
                    style={{
                      animationDelay: `${categoryIndex * 100 + skillIndex * 50}ms`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
