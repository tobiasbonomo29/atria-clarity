import { useState } from "react";
import { Car, Home, Heart, Activity, Plane, Building2, ShieldAlert, PawPrint, ChevronDown, ChevronUp } from "lucide-react";

const mainProducts = [
  { icon: Car, title: "Seguro Automotriz", desc: "Protección completa para tu vehículo contra accidentes, robos e imprevistos." },
  { icon: Home, title: "Seguro Hogar", desc: "Resguarda tu hogar y tus pertenencias ante siniestros y daños." },
  { icon: Heart, title: "Seguro Vida", desc: "Tranquilidad para ti y tu familia con coberturas adaptadas a tus necesidades." },
  { icon: Activity, title: "Seguro Salud", desc: "Acceso a atención médica de calidad cuando más lo necesitas." },
];

const extraProducts = [
  { icon: Plane, title: "Viajes", desc: "Viaja seguro con cobertura médica y de equipaje en todo el mundo." },
  { icon: Building2, title: "Empresas / Pyme", desc: "Soluciones a medida para proteger tu negocio y empleados." },
  { icon: ShieldAlert, title: "Accidentes Personales", desc: "Cobertura ante accidentes que afecten tu capacidad de trabajo." },
  { icon: PawPrint, title: "Mascotas", desc: "Cuidado veterinario y protección para los miembros peludos de tu familia." },
];

const ProductosSection = () => {
  const [expanded, setExpanded] = useState(false);

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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {mainProducts.map((p) => (
            <div key={p.title} className="glass-card-hover p-6 flex flex-col items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center">
                <p.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{p.desc}</p>
              <a href="#contacto" className="text-sm font-medium text-primary hover:text-electric-glow transition-colors">
                Ver detalles →
              </a>
            </div>
          ))}
        </div>

        {/* Extra products */}
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
              <a href="#contacto" className="text-sm font-medium text-primary hover:text-electric-glow transition-colors">
                Ver detalles →
              </a>
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
      </div>
    </section>
  );
};

export default ProductosSection;
