import { Client } from "@notionhq/client";

// Inicializar cliente de Notion
const notion = new Client({
  auth: import.meta.env.VITE_NOTION_API_KEY,
});

// IDs de las bases de datos (se configuran en .env)
const BLOG_DATABASE_ID = import.meta.env.VITE_NOTION_BLOG_DATABASE_ID;
const FAQ_DATABASE_ID = import.meta.env.VITE_NOTION_FAQ_DATABASE_ID;

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
 * Obtener posts del blog desde Notion
 */
export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    if (!BLOG_DATABASE_ID) {
      console.warn("VITE_NOTION_BLOG_DATABASE_ID no configurado");
      return [];
    }

    const response = await (notion.databases as any).query({
      database_id: BLOG_DATABASE_ID,
      filter: {
        property: "Publicado",
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: "Fecha",
          direction: "descending",
        },
      ],
    });

    return response.results.map((page: any) => {
      const props = page.properties;
      return {
        id: page.id,
        title: props.Título?.title?.[0]?.plain_text || "Sin título",
        excerpt: props.Resumen?.rich_text?.[0]?.plain_text || "",
        content: props.Contenido?.rich_text?.[0]?.plain_text || "",
        date: props.Fecha?.date?.start || new Date().toISOString(),
        image: props.Imagen?.url || props.Imagen?.files?.[0]?.file?.url,
        published: props.Publicado?.checkbox || false,
      };
    });
  } catch (error) {
    console.error("Error al obtener posts del blog:", error);
    return [];
  }
}

/**
 * Obtener FAQs desde Notion
 */
export async function getFAQs(): Promise<FAQItem[]> {
  try {
    if (!FAQ_DATABASE_ID) {
      console.warn("VITE_NOTION_FAQ_DATABASE_ID no configurado");
      return [];
    }

    const response = await (notion.databases as any).query({
      database_id: FAQ_DATABASE_ID,
      filter: {
        property: "Publicado",
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: "Orden",
          direction: "ascending",
        },
      ],
    });

    return response.results.map((page: any) => {
      const props = page.properties;
      return {
        id: page.id,
        question: props.Pregunta?.title?.[0]?.plain_text || "Sin pregunta",
        answer: props.Respuesta?.rich_text?.[0]?.plain_text || "",
        order: props.Orden?.number || 0,
        published: props.Publicado?.checkbox || false,
      };
    });
  } catch (error) {
    console.error("Error al obtener FAQs:", error);
    return [];
  }
}
