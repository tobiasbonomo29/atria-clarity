const MobileCotizar = () => {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 lg:hidden">
      <a
        href="#contacto"
        className="flex items-center justify-center w-full py-3.5 rounded-xl text-base font-semibold text-accent-foreground shadow-xl transition-all duration-200 hover:opacity-90"
        style={{ background: "var(--gradient-accent)" }}
      >
        Cotizar ahora
      </a>
    </div>
  );
};

export default MobileCotizar;
