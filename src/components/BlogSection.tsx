import { CalendarDays } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getBlogPosts, type BlogPost } from "@/lib/notion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

// Posts de respaldo (fallback) si Notion no está configurado
const fallbackPosts: BlogPost[] = [
  {
    id: "1",
    title: "¿Qué tipo de seguro automotriz necesitas en Chile?",
    excerpt: "Conoce las diferencias entre un seguro obligatorio (SOAP) y un seguro completo para proteger tu vehículo.",
    content: "",
    date: "2026-02-10",
    published: true,
  },
  {
    id: "2",
    title: "5 claves para elegir un seguro de vida",
    excerpt: "Factores importantes que debes considerar antes de contratar un seguro de vida para ti y tu familia.",
    content: "",
    date: "2026-02-05",
    published: true,
  },
  {
    id: "3",
    title: "¿Cómo funciona la cobertura de un seguro de hogar?",
    excerpt: "Entiende qué cubre y qué no cubre un seguro de hogar estándar en el mercado chileno.",
    content: "",
    date: "2026-01-28",
    published: true,
  },
];

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("es-CL", { day: "numeric", month: "short", year: "numeric" });
};

const BlogSection = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Intentar obtener posts desde Notion
  const { data: notionPosts } = useQuery({
    queryKey: ["blog-posts"],
    queryFn: getBlogPosts,
    staleTime: 5 * 60 * 1000, // Cache por 5 minutos
  });

  // Usar posts de Notion si están disponibles, sino usar fallback
  const posts = notionPosts && notionPosts.length > 0 ? notionPosts : fallbackPosts;

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
          {posts.slice(0, 3).map((post) => (
            <article key={post.id} className="glass-card-hover overflow-hidden flex flex-col">
              {/* Image */}
              {post.image ? (
                <img src={post.image} alt={post.title} className="h-44 w-full object-cover" />
              ) : (
                <div className="h-44 bg-gradient-to-br from-primary/20 to-accent/10" />
              )}
              <div className="p-6 flex flex-col flex-1 gap-3">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <CalendarDays size={14} />
                  {formatDate(post.date)}
                </div>
                <h3 className="text-base font-semibold text-foreground leading-snug">{post.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{post.excerpt}</p>
                <button
                  onClick={() => setSelectedPost(post)}
                  className="text-sm font-medium text-primary hover:text-electric-glow transition-colors mt-2 text-left"
                >
                  Leer →
                </button>
              </div>
            </article>
          ))}
        </div>

        {posts.length > 3 && (
          <div className="text-center mt-10">
            <a
              href="#contacto"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-200"
            >
              Ver más artículos
            </a>
          </div>
        )}
      </div>

      {/* Modal de detalle del post */}
      <Dialog open={!!selectedPost} onOpenChange={(open) => !open && setSelectedPost(null)}>
        <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold gradient-text mb-4">
              {selectedPost?.title}
            </DialogTitle>
          </DialogHeader>
          
          {selectedPost && (
            <div className="space-y-6">
              {/* Fecha */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CalendarDays size={16} />
                {formatDate(selectedPost.date)}
              </div>

              {/* Imagen si existe */}
              {selectedPost.image && (
                <img 
                  src={selectedPost.image} 
                  alt={selectedPost.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              )}

              {/* Excerpt */}
              {selectedPost.excerpt && (
                <p className="text-lg text-muted-foreground font-medium italic border-l-4 border-primary pl-4">
                  {selectedPost.excerpt}
                </p>
              )}

              {/* Contenido completo */}
              <div className="prose prose-invert max-w-none">
                <div className="text-foreground leading-relaxed whitespace-pre-wrap">
                  {selectedPost.content || "Este artículo aún no tiene contenido disponible."}
                </div>
              </div>

              {/* CTA al final del post */}
              <div className="pt-6 border-t border-border">
                <p className="text-center text-muted-foreground mb-4">
                  ¿Necesitas más información sobre seguros?
                </p>
                <div className="flex justify-center">
                  <a
                    href="#contacto"
                    onClick={() => setSelectedPost(null)}
                    className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-colors"
                  >
                    Contáctanos
                  </a>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default BlogSection;
