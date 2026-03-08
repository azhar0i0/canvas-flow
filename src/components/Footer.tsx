import { Link } from "react-router-dom";

const footerLinks = {
  Product: ["Features", "Pricing", "Security", "Integrations"],
  Company: ["About", "Blog", "Careers", "Contact"],
  Resources: ["Documentation", "Help Center", "Community", "API"],
  Legal: ["Privacy", "Terms", "Cookie Policy"],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src="/favicon.png" alt="SyncSpace" className="h-7 w-7" />
              <span className="font-display text-lg font-bold gradient-text">SyncSpace</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Real-time collaboration for modern teams. Built by azhar0i0.
            </p>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display font-semibold text-sm mb-4 text-foreground">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2026 SyncSpace by azhar0i0. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {["Twitter", "GitHub", "Discord"].map((s) => (
              <a key={s} href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
