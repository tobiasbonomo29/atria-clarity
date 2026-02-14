import { useState } from "react";
import { MessageCircle, Mail, Clock, MapPin } from "lucide-react";

const ContactoSection = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    tipoSeguro: "",
    mensaje: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: integrar con Zoho Web-to-Lead
    alert("¡Gracias! Nos pondremos en contacto contigo pronto.");
  };

  return (
    <section id="contacto" className="py-20 lg:py-28 relative">
      <div className="absolute inset-0 bg-secondary/30 pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            <span className="gradient-text-accent">Contacto</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            ¿Listo para cotizar? Escríbenos o completa el formulario.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Form — Zoho Web-to-Lead ready */}
          <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-1.5">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                maxLength={100}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Tu nombre completo"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  maxLength={255}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-foreground mb-1.5">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  maxLength={20}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="+56 9 1234 5678"
                />
              </div>
            </div>
            <div>
              <label htmlFor="tipoSeguro" className="block text-sm font-medium text-foreground mb-1.5">
                Tipo de seguro
              </label>
              <select
                id="tipoSeguro"
                name="tipoSeguro"
                value={formData.tipoSeguro}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              >
                <option value="">Seleccionar...</option>
                <option value="automotriz">Seguro Automotriz</option>
                <option value="hogar">Seguro Hogar</option>
                <option value="vida">Seguro Vida</option>
                <option value="salud">Seguro Salud</option>
                <option value="viajes">Viajes</option>
                <option value="empresas">Empresas / Pyme</option>
                <option value="accidentes">Accidentes Personales</option>
                <option value="mascotas">Mascotas</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium text-foreground mb-1.5">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                rows={4}
                maxLength={1000}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                placeholder="Cuéntanos qué necesitas..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 rounded-lg text-base font-semibold text-accent-foreground transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
              style={{ background: "var(--gradient-accent)" }}
            >
              Enviar
            </button>
          </form>

          {/* Contact info */}
          <div className="glass-card p-8 flex flex-col gap-6 justify-center">
            <h3 className="text-xl font-bold text-foreground">Hablemos</h3>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <MessageCircle size={22} className="text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground">WhatsApp</p>
                  <p className="text-sm text-muted-foreground">+56 9 0000 0000</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail size={22} className="text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground">contacto@atriaone.cl</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock size={22} className="text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground">Horario</p>
                  <p className="text-sm text-muted-foreground">Lun - Vie, 9:00 a 18:00</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin size={22} className="text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground">Ubicación</p>
                  <p className="text-sm text-muted-foreground">Chile</p>
                </div>
              </div>
            </div>
            <a
              href="https://wa.me/56900000000"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 w-full py-3.5 rounded-lg text-base font-semibold border-2 border-primary text-primary hover:bg-primary/10 transition-all duration-200"
            >
              <MessageCircle size={20} />
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactoSection;
