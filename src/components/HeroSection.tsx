import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-abstract.png";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-accent/10 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="space-y-6 animate-fade-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            <span className="gradient-text">Protección digital,</span>
            <br />
            <span className="text-foreground">asesoría humana</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed animate-fade-up-delay-1">
            Seguros claros, atención rápida y acompañamiento real en todo el proceso.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-up-delay-2">
            <a
              href="#contacto"
              className="inline-flex items-center px-7 py-3.5 rounded-lg text-base font-semibold text-accent-foreground transition-all duration-200 hover:opacity-90 hover:scale-105 shadow-lg"
              style={{ background: "var(--gradient-accent)" }}
            >
              Cotizar
            </a>
            <a
              href="https://wa.me/56900000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-base font-semibold border border-primary/40 text-primary hover:bg-primary/10 transition-all duration-200"
            >
              <MessageCircle size={20} />
              Hablar por WhatsApp
            </a>
          </div>
        </div>

        {/* Visual */}
        <div className="hidden lg:flex justify-center animate-fade-up-delay-3">
          <img
            src={heroImage}
            alt="Formas abstractas representando protección digital"
            className="w-full max-w-lg rounded-3xl"
            style={{ animation: "float 6s ease-in-out infinite" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
