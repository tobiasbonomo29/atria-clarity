const FooterSection = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Política de privacidad</a>
          <span>·</span>
          <a href="#" className="hover:text-foreground transition-colors">Términos y condiciones</a>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Atria One Seguros. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
