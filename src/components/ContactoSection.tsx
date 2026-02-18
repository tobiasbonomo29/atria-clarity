import { MessageCircle, Mail, Clock, MapPin } from "lucide-react";

const ContactoSection = () => {
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
          {/* ====== ZOHO WEB-TO-LEAD FORM START ====== */}
          <form
            id="webform7089296000000668409"
            action="https://crm.zoho.com/crm/WebToLeadForm"
            name="WebToLeads7089296000000668409"
            method="POST"
            onSubmit={() => { document.charset = "UTF-8"; return (window as any).checkMandatory7089296000000668409(); }}
            acceptCharset="UTF-8"
            className="glass-card p-8 space-y-5"
          >
            {/* Campos Hidden de Zoho */}
            <input type="text" style={{ display: 'none' }} name="xnQsjsdp" value="fa835586eb169c242b4e458eb201272dbe445d0cccfa9f53db9b31da5318ee99" />
            <input type="hidden" name="zc_gad" id="zc_gad" value="" />
            <input type="text" style={{ display: 'none' }} name="xmIwtLD" value="14681b5f694bbd3692242fa31d8e55f85515d85140350911f6496b87e23ed2f9242b0c546fb19777c86b836576597d7c" />
            <input type="text" style={{ display: 'none' }} name="actionType" value="TGVhZHM=" />
            <input type="text" style={{ display: 'none' }} name="returnURL" value="https://tobiasbonomo29.github.io/atria-clarity/" />
            <input type="text" style={{ display: 'none' }} name="aG9uZXlwb3Q" value="" />

            <div>
              <label htmlFor="LEADCF1" className="block text-sm font-medium text-foreground mb-1.5">
                Tipo de cliente *
              </label>
              <select
                id="LEADCF1"
                name="LEADCF1"
                required
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              >
                <option value="Persona">Persona</option>
                <option value="Empresa">Empresa</option>
              </select>
            </div>

            <div>
              <label htmlFor="Last_Name" className="block text-sm font-medium text-foreground mb-1.5">
                Apellidos *
              </label>
              <input
                type="text"
                id="Last_Name"
                name="Last Name"
                required
                maxLength={80}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Tus apellidos"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="Email" className="block text-sm font-medium text-foreground mb-1.5">
                  Email *
                </label>
                <input
                  type="email"
                  id="Email"
                  name="Email"
                  required
                  maxLength={100}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label htmlFor="Mobile" className="block text-sm font-medium text-foreground mb-1.5">
                  Móvil *
                </label>
                <input
                  type="tel"
                  id="Mobile"
                  name="Mobile"
                  required
                  maxLength={30}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="+56 9 1234 5678"
                />
              </div>
            </div>

            <div>
              <label htmlFor="LEADCF2" className="block text-sm font-medium text-foreground mb-1.5">
                Tipo de seguro * <span className="text-xs text-muted-foreground">(puedes seleccionar varios)</span>
              </label>
              <select
                id="LEADCF2"
                name="LEADCF2"
                required
                multiple
                size={6}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              >
                <option value="Vehículo Particular">Vehículo Particular</option>
                <option value="Vida">Vida</option>
                <option value="Salud">Salud</option>
                <option value="Incendio Particular">Incendio Particular</option>
                <option value="Incendio Empresa">Incendio Empresa</option>
                <option value="Flota de vehículos">Flota de vehículos</option>
              </select>
            </div>

            <div>
              <label htmlFor="Description" className="block text-sm font-medium text-foreground mb-1.5">
                Mensaje
              </label>
              <textarea
                id="Description"
                name="Description"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                placeholder="Cuéntanos qué necesitas..."
              />
            </div>

            <button
              type="submit"
              id="formsubmit"
              className="w-full py-3.5 rounded-lg text-base font-semibold text-accent-foreground transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
              style={{ background: "var(--gradient-accent)" }}
            >
              Enviar Cotización
            </button>
          </form>
          {/* ====== ZOHO WEB-TO-LEAD FORM END ====== */}

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

        {/* Zoho Validation Scripts */}
        <script dangerouslySetInnerHTML={{ __html: `
          function validateEmail7089296000000668409() {
            var form = document.forms['WebToLeads7089296000000668409'];
            var emailFld = form.querySelectorAll('[type=email]');
            for(var i = 0; i < emailFld.length; i++) {
              var emailVal = emailFld[i].value;
              if ((emailVal.replace(/^\\s+|\\s+$/g, '')).length != 0) {
                var atpos = emailVal.indexOf('@');
                var dotpos = emailVal.lastIndexOf('.');
                if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
                  alert('Introduzca una dirección de correo electrónico válida.');
                  emailFld[i].focus();
                  return false;
                }
              }
            }
            return true;
          }

          function checkMandatory7089296000000668409() {
            var mndFileds = new Array('Last Name', 'Email', 'Mobile', 'LEADCF1', 'LEADCF2');
            var fldLangVal = new Array('Apellidos', 'Correo electrónico', 'Móvil', 'Tipo de cliente', 'Tipo de seguro');
            
            for (var i = 0; i < mndFileds.length; i++) {
              var fieldObj = document.forms['WebToLeads7089296000000668409'][mndFileds[i]];
              if (fieldObj) {
                if (((fieldObj.value).replace(/^\\s+|\\s+$/g, '')).length == 0) {
                  alert(fldLangVal[i] + ' no puede estar vacío.');
                  fieldObj.focus();
                  return false;
                } else if (fieldObj.nodeName == 'SELECT') {
                  if (fieldObj.options[fieldObj.selectedIndex].value == '-None-') {
                    alert(fldLangVal[i] + ' no puede ser nulo.');
                    fieldObj.focus();
                    return false;
                  }
                }
              }
            }
            
            if (!validateEmail7089296000000668409()) {
              return false;
            }
            
            var urlparams = new URLSearchParams(window.location.search);
            if (urlparams.has('service') && (urlparams.get('service') === 'smarturl')) {
              var webform = document.getElementById('webform7089296000000668409');
              var service = urlparams.get('service');
              var smarturlfield = document.createElement('input');
              smarturlfield.setAttribute('type', 'hidden');
              smarturlfield.setAttribute('value', service);
              smarturlfield.setAttribute('name', 'service');
              webform.appendChild(smarturlfield);
            }
            
            document.querySelector('.glass-card button[type="submit"]').setAttribute('disabled', 'true');
            return true;
          }
        `}} />
      </div>
    </section>
  );
};

export default ContactoSection;
