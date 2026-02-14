const companies = ["Renta Nacional", "BCI Seguros", "ANS"];

const CompaniasSection = () => {
  return (
    <section id="companias" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Nuestras <span className="gradient-text">Compañías</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-12">
          Trabajamos con aseguradoras líderes para ofrecerte las mejores coberturas.
        </p>

        <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
          {companies.map((name) => (
            <div
              key={name}
              className="glass-card px-10 py-8 flex items-center justify-center min-w-[200px]"
            >
              <span className="text-lg font-semibold text-muted-foreground">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompaniasSection;
