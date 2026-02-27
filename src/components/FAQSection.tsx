import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useQuery } from "@tanstack/react-query";
import { getFAQs, type FAQItem } from "@/lib/notion";

// FAQs de respaldo (fallback) si Notion no está configurado
const fallbackFAQs: FAQItem[] = [
  {
    id: "1",
    question: "¿Qué necesito para cotizar?",
    answer: "Solo necesitas tu RUT, algunos datos básicos y saber qué tipo de seguro te interesa. Nuestro equipo te guiará en el proceso.",
    order: 1,
    published: true,
  },
  {
    id: "2",
    question: "¿Cuánto demora la contratación?",
    answer: "El proceso es rápido. Una vez que elijas tu plan, puedes contratar en menos de 10 minutos de forma 100% digital.",
    order: 2,
    published: true,
  },
  {
    id: "3",
    question: "¿Puedo hablar con un asesor?",
    answer: "¡Claro! Contamos con asesores disponibles por WhatsApp, teléfono y email para resolver todas tus dudas.",
    order: 3,
    published: true,
  },
  {
    id: "4",
    question: "¿Qué pasa si tengo un siniestro?",
    answer: "Te acompañamos en todo el proceso. Nos encargamos de la gestión con la aseguradora para que tú solo te preocupes de lo importante.",
    order: 4,
    published: true,
  },
  {
    id: "5",
    question: "¿Cómo funciona el pago?",
    answer: "Puedes pagar con tarjeta de crédito, débito o PAC. Las opciones varían según la aseguradora y el tipo de seguro.",
    order: 5,
    published: true,
  },
];

const FAQSection = () => {
  // Intentar obtener FAQs desde Notion
  const { data: notionFAQs } = useQuery({
    queryKey: ["faqs"],
    queryFn: getFAQs,
    staleTime: 5 * 60 * 1000, // Cache por 5 minutos
  });

  // Usar FAQs de Notion si están disponibles, sino usar fallback
  const faqs = notionFAQs && notionFAQs.length > 0 ? notionFAQs : fallbackFAQs;

  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Preguntas <span className="gradient-text">Frecuentes</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={`faq-${faq.id}`}
                className="glass-card px-6 border-glass-border"
              >
                <AccordionTrigger className="text-left text-foreground font-medium hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
