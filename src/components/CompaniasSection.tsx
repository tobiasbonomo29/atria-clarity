import logoRentaNacional from "@/assets/logo-renta-nacional.jpg";
import logoBCI from "@/assets/logo-bci.png";
import logoANS from "@/assets/logo-ans.jpg";

const companies = [
  { name: "Renta Nacional", logo: logoRentaNacional },
  { name: "BCI Seguros", logo: logoBCI },
  { name: "ANS", logo: logoANS },
];

const CompaniasSection = () => {
  return (
    <section id="companias" className="py-20 lg:py-28 bg-secondary/20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Nuestras <span className="gradient-text">Compañías</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-12">
          Trabajamos con aseguradoras líderes para ofrecerte las mejores coberturas.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {companies.map((company) => (
            <div
              key={company.name}
              className="glass-card-hover p-8 flex flex-col items-center justify-center gap-4 bg-background/40"
            >
              <div className="w-full h-24 flex items-center justify-center">
                <img 
                  src={company.logo} 
                  alt={`Logo ${company.name}`}
                  className="max-w-full max-h-full object-contain filter brightness-100 hover:brightness-110 transition-all duration-300"
                />
              </div>
              <div className="border-t border-border/40 w-full pt-4">
                <p className="text-base font-semibold text-foreground">{company.name}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Comparamos múltiples opciones para encontrar la mejor cobertura al mejor precio
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompaniasSection;
