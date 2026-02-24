import { useState } from "react";
import { Car, Truck, Heart, Activity, Flame, Building2, ChevronDown, ChevronUp } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const mainProducts = [
  { 
    icon: Car, 
    title: "Vehículo Particular", 
    desc: "Protege tu auto ante accidentes, robos y daños a terceros, con cobertura clara y sin letra chica. Te acompañamos en cada siniestro, para que conduzcas con tranquilidad.",
    detalles: {
      coberturas: [
        "Responsabilidad Civil obligatoria",
        "Daños a terceros",
        "Robo total o parcial",
        "Incendio",
        "Asistencia en ruta 24/7",
        "Vehículo de reemplazo"
      ],
      beneficios: [
        "Cotización personalizada según uso del vehículo",
        "Cobertura flexible y adaptable",
        "Red de talleres autorizados",
        "Atención inmediata ante siniestros"
      ]
    }
  },
  { 
    icon: Heart, 
    title: "Vida", 
    desc: "Respalda económicamente a tu familia frente a imprevistos, asegurando su estabilidad futura. Una decisión clara hoy para dar tranquilidad mañana.",
    detalles: {
      coberturas: [
        "Muerte natural o accidental",
        "Invalidez total y permanente",
        "Enfermedades graves",
        "Renta mensual por invalidez",
        "Gastos funerarios",
        "Anticipos por enfermedad terminal"
      ],
      beneficios: [
        "Protección financiera para beneficiarios",
        "Planes flexibles según edad y necesidades",
        "Sin exámenes médicos en planes básicos",
        "Asesoría personalizada"
      ]
    }
  },
  { 
    icon: Activity, 
    title: "Salud", 
    desc: "Complementa tu sistema de salud con coberturas médicas, hospitalarias y ambulatorias. Accede a atención oportuna sin comprometer tu estabilidad financiera.",
    detalles: {
      coberturas: [
        "Hospitalización",
        "Cirugías",
        "Consultas médicas",
        "Exámenes de laboratorio",
        "Medicamentos",
        "Atención ambulatoria"
      ],
      beneficios: [
        "Red de clínicas y hospitales de prestigio",
        "Cobertura de preexistencias según plan",
        "Telemedicina incluida",
        "Reembolsos rápidos"
      ]
    }
  },
  { 
    icon: Truck, 
    title: "Flota de Vehículos", 
    desc: "Protección integral para los vehículos de tu empresa, con gestión centralizada y eficiente. Reducimos riesgos para que tu operación no se detenga.",
    detalles: {
      coberturas: [
        "Responsabilidad civil comercial",
        "Daños materiales a la flota",
        "Robo de vehículos",
        "Accidentes de conductores",
        "Gestión de asistencia 24/7",
        "Seguimiento GPS opcional"
      ],
      beneficios: [
        "Descuentos por volumen",
        "Gestión centralizada de pólizas",
        "Reportes mensuales de siniestralidad",
        "Asesoría en prevención de riesgos"
      ]
    }
  },
  { 
    icon: Flame, 
    title: "Incendio Particular", 
    desc: "Resguarda tu hogar frente a incendios, daños estructurales y eventos imprevistos. Protege lo que más valoras con respaldo profesional.",
    detalles: {
      coberturas: [
        "Daños por incendio",
        "Explosión",
        "Rayo",
        "Contenido del hogar",
        "Responsabilidad civil",
        "Gastos de extinción"
      ],
      beneficios: [
        "Valuación profesional de bienes",
        "Reposición de contenidos",
        "Cobertura de arriendos alternativos",
        "Asesoría en prevención"
      ]
    }
  },
  { 
    icon: Building2, 
    title: "Incendio Empresa", 
    desc: "Cubre tu empresa ante incendios y riesgos asociados como sismo o paralización. Una solución integral para proteger tu patrimonio y continuidad operativa.",
    detalles: {
      coberturas: [
        "Edificios e instalaciones",
        "Maquinaria y equipos",
        "Mercaderías y stock",
        "Pérdida de beneficios",
        "Responsabilidad civil",
        "Gastos de remoción de escombros"
      ],
      beneficios: [
        "Valuación técnica especializada",
        "Planes de continuidad de negocio",
        "Asesoría en medidas de prevención",
        "Cobertura de lucro cesante"
      ]
    }
  },
];

const extraProducts = [
];

const ProductosSection = () => {
  const [expanded, setExpanded] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<typeof mainProducts[0] | null>(null);

  return (
    <section id="productos" className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Nuestros <span className="gradient-text">Productos</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Encuentra el seguro que necesitas con asesoría personalizada.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {mainProducts.map((p) => (
            <div key={p.title} className="glass-card-hover p-6 flex flex-col items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center">
                <p.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{p.desc}</p>
              <button 
                onClick={() => setSelectedProduct(p)}
                className="text-sm font-medium text-primary hover:text-electric-glow transition-colors"
              >
                Ver detalles →
              </button>
            </div>
          ))}
        </div>

        {/* Extra products */}
        {extraProducts.length > 0 && (
          <>
            <div
              className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto mt-5 overflow-hidden transition-all duration-500 ${
                expanded ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {extraProducts.map((p) => (
                <div key={p.title} className="glass-card-hover p-6 flex flex-col items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center">
                    <p.icon size={24} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{p.desc}</p>
                  <button 
                    onClick={() => setSelectedProduct(p)}
                    className="text-sm font-medium text-primary hover:text-electric-glow transition-colors"
                  >
                    Ver detalles →
                  </button>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <button
                onClick={() => setExpanded(!expanded)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-200"
              >
                {expanded ? "Menos productos" : "Más productos"}
                {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
            </div>
          </>
        )}

        {/* Modal de detalles */}
        <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl flex items-center gap-3">
                {selectedProduct && (
                  <>
                    <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center">
                      <selectedProduct.icon size={24} className="text-primary" />
                    </div>
                    {selectedProduct.title}
                  </>
                )}
              </DialogTitle>
              <DialogDescription className="text-base pt-2">
                {selectedProduct?.desc}
              </DialogDescription>
            </DialogHeader>

            {selectedProduct?.detalles && (
              <div className="space-y-6 pt-4">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Coberturas Incluidas</h4>
                  <ul className="space-y-2">
                    {selectedProduct.detalles.coberturas.map((cobertura, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">✓</span>
                        <span>{cobertura}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Beneficios</h4>
                  <ul className="space-y-2">
                    {selectedProduct.detalles.beneficios.map((beneficio, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-accent mt-1">★</span>
                        <span>{beneficio}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-border">
                  <a
                    href="#contacto"
                    onClick={() => setSelectedProduct(null)}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold text-accent-foreground w-full sm:w-auto transition-all duration-200 hover:opacity-90"
                    style={{ background: "var(--gradient-accent)" }}
                  >
                    Solicitar Cotización
                  </a>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default ProductosSection;
