import { Users, Smartphone, Eye, ShieldCheck } from "lucide-react";

const pillars = [
  { icon: Users, title: "Asesoría humana", desc: "Un equipo de personas reales que te acompañan en cada decisión." },
  { icon: Smartphone, title: "Proceso digital simple", desc: "Cotiza y contrata desde cualquier dispositivo en minutos." },
  { icon: Eye, title: "Transparencia y claridad", desc: "Sin letra chica. Te explicamos todo de forma clara y directa." },
  { icon: ShieldCheck, title: "Acompañamiento en siniestros", desc: "Estamos contigo cuando más lo necesitas, gestionamos por ti." },
];

const steps = [
  { num: "01", title: "Te asesoramos", desc: "Conversamos para entender qué necesitas." },
  { num: "02", title: "Cotizás y contratás", desc: "Te mostramos las mejores opciones y contratas online." },
  { num: "03", title: "Te acompañamos", desc: "Ante cualquier siniestro o duda, estamos contigo." },
];

const PorQueSection = () => {
  return (
    <section id="porque" className="py-20 lg:py-28 relative">
      <div className="absolute inset-0 bg-secondary/30 pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            ¿Por qué <span className="gradient-text-accent">Atria One</span>?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Combinamos tecnología y trato humano para que tengas la mejor experiencia.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto mb-20">
          {pillars.map((p) => (
            <div key={p.title} className="glass-card-hover p-6 text-center flex flex-col items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center">
                <p.icon size={26} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-foreground mb-10">¿Cómo funciona?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <div key={s.num} className="flex flex-col items-center text-center gap-3">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-extrabold gradient-text-accent border-2 border-accent/30">
                  {s.num}
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute" />
                )}
                <h4 className="text-lg font-semibold text-foreground">{s.title}</h4>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PorQueSection;
