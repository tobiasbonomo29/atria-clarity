// Script para generar contenido estático desde Notion en tiempo de build
import { config } from "dotenv";
import { Client } from "@notionhq/client";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cargar variables de entorno desde .env
config();

// Inicializar cliente de Notion
const notion = new Client({
  auth: process.env.VITE_NOTION_API_KEY,
});

const BLOG_DATABASE_ID = process.env.VITE_NOTION_BLOG_DATABASE_ID;
const FAQ_DATABASE_ID = process.env.VITE_NOTION_FAQ_DATABASE_ID;

async function fetchBlogPosts() {
  if (!BLOG_DATABASE_ID) {
    console.log("⚠️  BLOG_DATABASE_ID no configurado, usando datos de respaldo");
    return [];
  }

  try {
    console.log("📝 Obteniendo posts del blog desde Notion...");
    
    const response = await notion.databases.query({
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

    const posts = response.results.map((page) => {
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

    console.log(`✅ ${posts.length} posts obtenidos`);
    return posts;
  } catch (error) {
    console.error("❌ Error al obtener posts:", error.message);
    return [];
  }
}

async function fetchFAQs() {
  if (!FAQ_DATABASE_ID) {
    console.log("⚠️  FAQ_DATABASE_ID no configurado, usando datos de respaldo");
    return [];
  }

  try {
    console.log("❓ Obteniendo FAQs desde Notion...");
    
    const response = await notion.databases.query({
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

    const faqs = response.results.map((page) => {
      const props = page.properties;
      return {
        id: page.id,
        question: props.Pregunta?.title?.[0]?.plain_text || "Sin pregunta",
        answer: props.Respuesta?.rich_text?.[0]?.plain_text || "",
        order: props.Orden?.number || 0,
        published: props.Publicado?.checkbox || false,
      };
    });

    console.log(`✅ ${faqs.length} FAQs obtenidas`);
    return faqs;
  } catch (error) {
    console.error("❌ Error al obtener FAQs:", error.message);
    return [];
  }
}

async function main() {
  console.log("🚀 Generando contenido desde Notion...\n");

  const [blogPosts, faqs] = await Promise.all([
    fetchBlogPosts(),
    fetchFAQs(),
  ]);

  // Crear directorio si no existe
  const dataDir = path.join(__dirname, "../src/data");
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  // Guardar como JSON
  fs.writeFileSync(
    path.join(dataDir, "blog.json"),
    JSON.stringify(blogPosts, null, 2)
  );
  
  fs.writeFileSync(
    path.join(dataDir, "faqs.json"),
    JSON.stringify(faqs, null, 2)
  );

  console.log("\n✨ Contenido generado exitosamente:");
  console.log(`   📝 Blog: src/data/blog.json (${blogPosts.length} posts)`);
  console.log(`   ❓ FAQs: src/data/faqs.json (${faqs.length} preguntas)\n`);
}

main().catch(console.error);
