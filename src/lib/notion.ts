// Importar datos estáticos generados en build time
import blogData from "@/data/blog.json";
import faqData from "@/data/faqs.json";

// Tipos para Blog
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image?: string;
  published: boolean;
}

// Tipos para FAQ
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  order: number;
  published: boolean;
}

/**
 * Obtener posts del blog desde datos estáticos
 */
export async function getBlogPosts(): Promise<BlogPost[]> {
  // Retornar datos estáticos generados en build time
  return blogData as BlogPost[];
}

/**
 * Obtener FAQs desde datos estáticos
 */
export async function getFAQs(): Promise<FAQItem[]> {
  // Retornar datos estáticos generados en build time
  return faqData as FAQItem[];
}
