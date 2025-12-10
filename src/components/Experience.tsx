import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const achievements = [
    "Built and maintained 7+ full-scale web applications using Next.js, React, TypeScript, and Node.js",
    "Developed 12+ custom backend plugins including payments, reviews, automation, and ERP integrations",
    "Created scalable APIs using Node.js, Express, and Next.js API routes with PostgreSQL/MongoDB",
    "Engineered high-performance UIs using SSR, SSG, ISR, reusable components, and design systems",
    "Implemented authentication & authorization using JWT, OAuth, and NextAuth.js",
    "Integrated major payment gateways: Stripe, Coinbase, MyFatoorah, Tap, Tabby, and Tamara",
    "Deployed applications using Docker, AWS, and Railway, optimized for 10k+ product catalogs",
  ];

  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm tracking-wider mb-4 block">
            // experience
          </span>
          <h2 className="section-title">
            Professional <span className="text-gradient">Journey</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

            {/* Experience card */}
            <div className="relative md:pl-24">
              {/* Timeline dot */}
              <div className="absolute left-6 top-8 w-4 h-4 rounded-full bg-primary shadow-glow hidden md:block" />

              <div className="glass rounded-xl p-8 card-hover">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Briefcase className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Software Engineer</h3>
                        <p className="text-primary font-medium">CodeTuple Solutions</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground font-mono text-sm">
                    <Calendar className="w-4 h-4" />
                    2023 — Present
                  </div>
                </div>

                <ul className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex gap-3 text-muted-foreground">
                      <span className="text-primary mt-1.5 text-xs">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mt-12 relative md:pl-24">
            <div className="absolute left-6 top-6 w-4 h-4 rounded-full bg-secondary border-2 border-primary hidden md:block" />
            
            <div className="p-6 glass rounded-xl card-hover">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <span className="text-primary font-bold">🎓</span>
                </div>
                <div>
                  <h3 className="font-bold">BS Computer Science</h3>
                  <p className="text-muted-foreground">PUCIT — Punjab University College of Information Technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
