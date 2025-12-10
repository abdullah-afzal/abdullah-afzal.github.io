import { Github, Package, Star } from "lucide-react";

const OpenSource = () => {
  const packages = [
    {
      name: "medusa-bundled-products",
      description: "Bundled product management system for Medusa e-commerce",
      icon: Package,
    },
    {
      name: "medusa-product-reviews",
      description: "Review & rating module for enhanced customer feedback",
      icon: Star,
    },
    {
      name: "medusa-payment-coinbase",
      description: "Crypto payment gateway integration for Coinbase Commerce",
      icon: Package,
    },
    {
      name: "medusa-plugin-static-pages",
      description: "CMS-like static page system for content management",
      icon: Package,
    },
    {
      name: "currency-code-converter",
      description: "Lightweight utility package for currency code conversion",
      icon: Package,
    },
  ];

  return (
    <section id="opensource" className="py-24 md:py-32">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm tracking-wider mb-4 block">
            // open source
          </span>
          <h2 className="section-title">
            Community <span className="text-gradient">Contributions</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Building tools that help developers create better e-commerce experiences
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {packages.map((pkg, index) => (
            <a
              key={pkg.name}
              href={`https://github.com/abdullah-afzal/${pkg.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 glass rounded-xl card-hover flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <pkg.icon className="w-5 h-5 text-primary" />
                </div>
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              <h3 className="font-mono text-sm font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {pkg.name}
              </h3>

              <p className="text-sm text-muted-foreground flex-1">
                {pkg.description}
              </p>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://github.com/abdullah-afzal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass rounded-lg font-medium transition-all duration-300 hover:bg-primary/10 hover:border-primary/50"
          >
            <Github className="w-4 h-4" />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
