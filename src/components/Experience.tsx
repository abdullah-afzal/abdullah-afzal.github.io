import { Briefcase, Calendar, GraduationCap } from "lucide-react";

const EXPERIENCES = [
  {
    company: "CityLink Group of Companies",
    role: "Software Engineer",
    period: "2024 — Present",
    logo: "/clgoc.webp",
    achievements: [
      
    ],
  },
  {
    company: "Medusajs.club",
    role: "Software Engineer",
    period: "2023 — 2024",
    logo: "medusajs.png",
    achievements: [
    ]
  },
  {
    company: "CodeTuple Solutions",
    role: "Software Engineer",
    period: "2023 — 2024",
    logo: "codetuple.svg",
    achievements: [
      "Built and maintained 7+ full-scale web applications using Next.js, React, TypeScript, and Node.js",
      "Developed 12+ custom backend plugins including payments, reviews, automation, and ERP integrations",
      "Integrated major payment gateways: Stripe, Coinbase, MyFatoorah, Tap, Tabby, and Tamara",
      "Created scalable APIs using Node.js, Express, and Next.js API routes with PostgreSQL/MongoDB",
      "Engineered high-performance UIs using SSR, SSG, ISR, and design systems",
      "Implemented authentication & authorization using JWT, OAuth, and NextAuth.js",
      "Deployed applications using Docker and AWS, optimized for 10k+ product catalogs",
    ],
  },
];

const EDUCATION = {
  degree: "BS Computer Science",
  institution: "PUCIT — Punjab University College of Information Technology",
  period: "2019 — 2023",
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm tracking-wider mb-4 block">
            // experience
          </span>
          <h2 className="text-4xl font-bold">
            Professional <span className="text-primary">Journey</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Timeline Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-transparent" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-24">
                {/* Timeline Indicator */}
                <div className="absolute left-[-4px] md:left-6 top-8 w-2 h-2 md:w-4 md:h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]" />

                <div className="glass rounded-xl p-6 md:p-8 transition-all hover:border-primary/50">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center ">
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold leading-none">{exp.role}</h3>
                        <p className="text-primary font-medium mt-1">{exp.company}</p>
                      </div>
                    </div>
                    {/* <div className="flex items-center gap-2 text-muted-foreground font-mono text-sm bg-secondary/50 px-3 py-1 rounded-full w-fit">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div> */}
                  </div>

                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground text-sm md:text-base leading-relaxed">
                        <span className="text-primary mt-1.5 text-xs">▹</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* Education Section */}
            <div className="relative pl-8 md:pl-24">
              <div className="absolute left-[-4px] md:left-6 top-6 w-2 h-2 md:w-4 md:h-4 rounded-full bg-background border-2 border-primary" />
              
              <div className="p-6 glass rounded-xl border-dashed border-primary/30">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-xl">
                      <GraduationCap className="text-primary w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{EDUCATION.degree}</h3>
                      <p className="text-muted-foreground text-sm">{EDUCATION.institution}</p>
                    </div>
                  </div>
                  <span className="text-muted-foreground font-mono text-sm">{EDUCATION.period}</span>
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