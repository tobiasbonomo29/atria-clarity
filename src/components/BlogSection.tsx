import { CalendarDays } from "lucide-react";

const posts = [
  {
    title: "¿Qué tipo de seguro automotriz necesitas en Chile?",
    excerpt: "Conoce las diferencias entre un seguro obligatorio (SOAP) y un seguro completo para proteger tu vehículo.",
    date: "10 Feb 2026",
  },
  {
    title: "5 claves para elegir un seguro de vida",
    excerpt: "Factores importantes que debes considerar antes de contratar un seguro de vida para ti y tu familia.",
    date: "5 Feb 2026",
  },
  {
    title: "¿Cómo funciona la cobertura de un seguro de hogar?",
    excerpt: "Entiende qué cubre y qué no cubre un seguro de hogar estándar en el mercado chileno.",
    date: "28 Ene 2026",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 lg:py-28 relative">
      <div className="absolute inset-0 bg-secondary/30 pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            <span className="gradient-text">Blog</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Artículos y guías para que tomes mejores decisiones.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {posts.map((post) => (
            <article key={post.title} className="glass-card-hover overflow-hidden flex flex-col">
              {/* Placeholder image */}
              <div className="h-44 bg-gradient-to-br from-primary/20 to-accent/10" />
              <div className="p-6 flex flex-col flex-1 gap-3">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <CalendarDays size={14} />
                  {post.date}
                </div>
                <h3 className="text-base font-semibold text-foreground leading-snug">{post.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{post.excerpt}</p>
                <a href="#" className="text-sm font-medium text-primary hover:text-electric-glow transition-colors mt-2">
                  Leer →
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 rounded-lg border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-200"
          >
            Ver más artículos
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
