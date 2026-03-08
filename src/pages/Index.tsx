import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Edit3,
  MousePointer2,
  MessageSquare,
  Zap,
  Shield,
  Users,
  ArrowRight,
  Star,
  CheckCircle2,
} from "lucide-react";

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-accent/10 blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl animate-pulse-glow" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-in-down">
            <Zap className="h-3.5 w-3.5" />
            Real-time collaboration, reimagined
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            Collaborate in
            <span className="gradient-text block">Real Time</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            SyncSpace brings your team together with live editing, cursor tracking, and smart comments — all in one seamless workspace.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
            <Button size="lg" className="gradient-primary shadow-glow text-base px-8 h-12 hover:opacity-90 transition-all" asChild>
              <Link to="/signup">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8 h-12 glass hover:bg-muted/50 transition-all" asChild>
              <Link to="/editor/demo">See Demo</Link>
            </Button>
          </div>

          {/* Mock editor preview */}
          <div className="mt-16 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <div className="glass rounded-2xl shadow-glow p-1 max-w-3xl mx-auto">
              <div className="bg-card rounded-xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-destructive/60" />
                    <div className="w-3 h-3 rounded-full bg-accent/60" />
                    <div className="w-3 h-3 rounded-full bg-primary/40" />
                  </div>
                  <span className="text-xs text-muted-foreground ml-2 font-mono">Project Brief.doc</span>
                  <div className="ml-auto flex items-center gap-1">
                    <div className="w-5 h-5 rounded-full gradient-primary" />
                    <div className="w-5 h-5 rounded-full bg-accent -ml-1.5 ring-2 ring-card" />
                    <div className="w-5 h-5 rounded-full bg-primary/60 -ml-1.5 ring-2 ring-card" />
                  </div>
                </div>
                <div className="p-6 text-left space-y-3">
                  <div className="h-3 bg-foreground/10 rounded w-3/4" />
                  <div className="h-3 bg-foreground/10 rounded w-full" />
                  <div className="h-3 bg-foreground/10 rounded w-5/6" />
                  <div className="flex items-center gap-2 mt-4">
                    <div className="h-4 w-1 bg-primary rounded animate-cursor-blink" />
                    <span className="text-xs text-primary font-medium">Sarah typing...</span>
                  </div>
                  <div className="h-3 bg-foreground/10 rounded w-2/3" />
                  <div className="h-3 bg-foreground/10 rounded w-4/5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: Edit3,
    title: "Live Editing",
    description: "Edit documents simultaneously with your team. Changes appear instantly for everyone.",
  },
  {
    icon: MousePointer2,
    title: "Cursor Tracking",
    description: "See exactly where your collaborators are working in real-time with colored cursors.",
  },
  {
    icon: MessageSquare,
    title: "Smart Comments",
    description: "Leave contextual feedback directly in the document. Threaded discussions keep conversations organized.",
  },
  {
    icon: Zap,
    title: "Instant Sync",
    description: "Zero-latency updates powered by conflict-free data structures. Never lose a keystroke.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "End-to-end encryption, SOC 2 compliance, and granular access controls for your peace of mind.",
  },
  {
    icon: Users,
    title: "Team Workspaces",
    description: "Organize documents by project, team, or topic. Invite collaborators with a single link.",
  },
];

function FeaturesSection() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section id="features" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Features</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Everything you need to <span className="gradient-text">collaborate</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Purpose-built tools for seamless real-time teamwork.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`group glass rounded-2xl p-6 hover:shadow-glow-sm transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <f.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { step: "01", title: "Create a workspace", description: "Sign up and create your team workspace in seconds." },
  { step: "02", title: "Invite your team", description: "Share a link to invite collaborators to your documents." },
  { step: "03", title: "Start collaborating", description: "Edit together in real-time with live cursors and comments." },
];

function HowItWorksSection() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">How It Works</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Up and running in <span className="gradient-text">minutes</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <div
              key={s.step}
              className={`text-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <div className="text-5xl font-display font-bold gradient-text mb-4">{s.step}</div>
              <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: "Alex Chen",
    role: "Product Lead, Vercel",
    quote: "SyncSpace transformed how our team collaborates. The real-time editing is buttery smooth.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Engineering Manager, Stripe",
    quote: "We replaced three tools with SyncSpace. The cursor tracking alone saves us hours of miscommunication.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Founder, BuildKit",
    quote: "The best collaboration tool I've ever used. Clean, fast, and the comments system is brilliant.",
    rating: 5,
  },
];

function TestimonialsSection() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section id="testimonials" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Testimonials</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
            Loved by <span className="gradient-text">teams</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`glass rounded-2xl p-6 transition-all duration-700 hover:-translate-y-1 hover:shadow-glow-sm ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-foreground leading-relaxed mb-4">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full gradient-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={`gradient-primary rounded-3xl p-12 md:p-16 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to collaborate smarter?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Join thousands of teams using SyncSpace to work together in real-time.
          </p>
          <Button
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-base px-8 h-12 shadow-lg"
            asChild
          >
            <Link to="/signup">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <div className="flex items-center justify-center gap-6 mt-6 text-primary-foreground/70 text-sm">
            <span className="flex items-center gap-1"><CheckCircle2 className="h-4 w-4" /> Free forever plan</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="h-4 w-4" /> No credit card</span>
          </div>
        </div>
      </div>
    </section>
  );
}

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <FeaturesSection />
    <HowItWorksSection />
    <TestimonialsSection />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
