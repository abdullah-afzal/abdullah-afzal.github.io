import { Mail, Github, Linkedin, Calendar } from "lucide-react";
import { useEffect } from "react";

declare global {
  interface Window {
    Cal?: any;
  }
}

const Contact = () => {
  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement("script");
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.Cal) {
        window.Cal("init", { origin: "https://cal.com" });
        window.Cal("ui", {
          styles: { branding: { brandColor: "#a855f7" } },
          hideEventTypeDetails: false,
          layout: "month_view",
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const openCalendar = () => {
    if (window.Cal) {
      window.Cal("openModal", {
        calLink: "abdullah-afzal",
        config: { layout: "month_view" },
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "connect.abdullahafzal@gmail.com",
      href: "mailto:connect.abdullahafzal@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/abdullah-afzal",
      href: "https://github.com/abdullah-afzal",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/abdullah-afzal",
      href: "https://linkedin.com/in/abdullah-afzal",
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm tracking-wider mb-4 block">
            // let's connect
          </span>
          <h2 className="section-title">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Have a project in mind? Let's build something great together.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group p-5 glass rounded-xl card-hover flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-xs text-muted-foreground mb-1">
                    {item.label}
                  </p>
                  <p className="text-foreground font-medium truncate group-hover:text-primary transition-colors">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:connect.abdullahafzal@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:shadow-glow hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Send Me an Email
            </a>
            <a
              href="https://cal.com/abdullah-afzal/free-consultation" target="blank"
              className="inline-flex items-center gap-2 px-8 py-4 glass border border-primary/30 text-foreground font-semibold rounded-lg transition-all duration-300 hover:border-primary hover:shadow-glow hover:scale-105"
            >
              <Calendar className="w-5 h-5 text-primary" />
              Schedule a Meeting
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
