import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Qué necesito para cotizar?",
    a: "Solo necesitas tu RUT, algunos datos básicos y saber qué tipo de seguro te interesa. Nuestro equipo te guiará en el proceso.",
  },
  {
    q: "¿Cuánto demora la contratación?",
    a: "El proceso es rápido. Una vez que elijas tu plan, puedes contratar en menos de 10 minutos de forma 100% digital.",
  },
  {
    q: "¿Puedo hablar con un asesor?",
    a: "¡Claro! Contamos con asesores disponibles por WhatsApp, teléfono y email para resolver todas tus dudas.",
  },
  {
    q: "¿Qué pasa si tengo un siniestro?",
    a: "Te acompañamos en todo el proceso. Nos encargamos de la gestión con la aseguradora para que tú solo te preocupes de lo importante.",
  },
  {
    q: "¿Cómo funciona el pago?",
    a: "Puedes pagar con tarjeta de crédito, débito o PAC. Las opciones varían según la aseguradora y el tipo de seguro.",
  },
];

const FAQSection = () => {
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
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="glass-card px-6 border-glass-border"
              >
                <AccordionTrigger className="text-left text-foreground font-medium hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.a}
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
