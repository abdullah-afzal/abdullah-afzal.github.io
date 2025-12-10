import { Github, Linkedin, Mail, ChevronDown, Calendar } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-50 animate-pulse-glow" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-[100px] animate-float delay-300" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="section-container relative z-10 text-center">
        <div className="opacity-0 animate-fade-up">
          <span className="inline-block font-mono text-primary text-sm md:text-base mb-4 tracking-wider">
            &lt;hello world /&gt;
          </span>
        </div>

        <h1 className="opacity-0 animate-fade-up delay-100 text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          I'm <span className="text-gradient">Abdullah Afzal</span>
        </h1>

        <p className="opacity-0 animate-fade-up delay-200 text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 font-light">
          Full Stack Developer crafting scalable web applications with{" "}
          <span className="text-foreground font-medium">Next.js</span>,{" "}
          <span className="text-foreground font-medium">React</span>,{" "}
          <span className="text-foreground font-medium">TypeScript</span> &{" "}
          <span className="text-foreground font-medium">Node.js</span>
        </p>

        <div className="opacity-0 animate-fade-up delay-300 flex items-center justify-center gap-4 mb-12">
          <a
            href="mailto:connect.abdullahafzal@gmail.com"
            className="group flex items-center gap-2 px-6 py-3 bg-gradient-primary text-primary-foreground font-medium rounded-lg transition-all duration-300 hover:shadow-glow hover:scale-105"
          >
            <Mail className="w-4 h-4" />
            Get in Touch
          </a>
          <a
            href="https://github.com/abdullah-afzal"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 glass rounded-lg font-medium transition-all duration-300 hover:bg-secondary hover:border-primary/50"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>

        <div className="opacity-0 animate-fade-up delay-400 flex items-center justify-center gap-6">
          <a
            href="https://github.com/abdullah-afzal"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass rounded-full transition-all duration-300 hover:bg-primary/10 hover:border-primary/50 hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/abdullah-afzal"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass rounded-full transition-all duration-300 hover:bg-primary/10 hover:border-primary/50 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:connect.abdullahafzal@gmail.com"
            className="p-3 glass rounded-full transition-all duration-300 hover:bg-primary/10 hover:border-primary/50 hover:scale-110"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
           <a href="https://cal.com/abdullah-afzal/free-consultation"
              target="blank"
              className="p-3 glass rounded-full transition-all duration-300 hover:bg-primary/10 hover:border-primary/50 hover:scale-110"
            >
              <Calendar className="w-5 h-5" />
            </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-primary transition-colors"
        aria-label="Scroll to About section"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
};

export default Hero;
