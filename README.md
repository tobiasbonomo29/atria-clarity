# Atria One Seguros

Landing page de seguros profesional construida con React + Vite + TypeScript + Tailwind CSS + shadcn/ui.

## 🚀 Quick Start

### Desarrollo Local

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo (http://localhost:8080)
npm run dev

# 3. Buildear para producción
npm run build

# 4. Preview del build local
npm run preview
```

### Scripts Disponibles

```bash
npm run dev         # Servidor desarrollo
npm run build       # Build producción
npm run build:dev   # Build development
npm run preview     # Preview del build
npm run lint        # ESLint
npm run test        # Tests con Vitest
npm run test:watch  # Tests en watch mode
```

## 📦 Deploy a GitHub Pages

### Configuración Inicial (una sola vez)

1. **En GitHub**: Ve a tu repositorio → Settings → Pages
2. **Source**: Selecciona "GitHub Actions" (no "Deploy from branch")
3. **Push a main**: El workflow `.github/workflows/deploy.yml` se ejecutará automáticamente

### Deploy Automático

Cada `push` a la rama `main` dispara el workflow de GitHub Actions que:
- Instala dependencias
- Buildea el proyecto
- Despliega a GitHub Pages

Tu sitio estará disponible en: `https://TU_USERNAME.github.io/atria-one-seguros/`

### Configuración Manual del Base Path

Si cambias el nombre del repo, actualiza el `base` en `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/NOMBRE-DE-TU-REPO/',
  // ...
});
```

## 🔗 Integración Zoho CRM (Web-to-Lead)

### Paso 1: Obtener el Snippet de Zoho

1. En Zoho CRM: **Setup** → **Channels** → **Webforms** → **Web-to-Lead Form**
2. Crea o edita tu formulario
3. Copia el código HTML generado

### Paso 2: Integrar en el Proyecto

Abre `src/components/ContactoSection.tsx` y busca:

```html
<!-- ====== CAMPOS HIDDEN DE ZOHO - PEGAR AQUÍ ====== -->
```

Pega los campos `<input type="hidden">` que Zoho te proporciona. Ejemplo típico:

```html
<input type="hidden" name="xnQsjsdp" value="abc123xyz..." />
<input type="hidden" name="zc_gad" value="" />
<input type="hidden" name="xmIwtLD" value="def456uvw..." />
<input type="hidden" name="actionType" value="TGVhZHM=" />
<input type="hidden" name="returnURL" value="https://TU_USERNAME.github.io/atria-one-seguros/#/contacto" />
```

### Paso 3: Actualizar Action URL

En la línea del `<form>`, reemplaza:

```html
<form action="https://crm.zoho.com/crm/WebToLeadForm" ...>
```

Con la URL real que Zoho te proporciona.

### Paso 4: Mapear Campos (si es necesario)

Los campos actuales están mapeados a nombres estándar de Zoho:
- `Last Name` → Nombre completo
- `Email` → Email
- `Phone` → Teléfono
- `Lead Source` → Tipo de seguro
- `Description` → Mensaje

Si tu instancia de Zoho usa nombres diferentes, ajusta el atributo `name` de cada input.

## 🔧 Configuración de Links

### WhatsApp

Busca `WHATSAPP_LINK` o `wa.me/56900000000` en:
- `src/components/HeroSection.tsx`
- `src/components/ContactoSection.tsx`

Reemplaza con tu número real (formato: `wa.me/56912345678`).

### Email y Datos de Contacto

Edita `src/components/ContactoSection.tsx` y actualiza:
- Email: `contacto@atriaone.cl`
- Teléfono: `+56 9 0000 0000`
- Horario y ubicación según necesites

## 🎨 Tecnologías

- **React 18** + **TypeScript**
- **Vite 5** (build tool)
- **Tailwind CSS** (estilos)
- **shadcn/ui** (componentes UI)
- **React Router** (HashRouter para GitHub Pages)
- **Lucide React** (iconos)
- **Vitest** (testing)

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── ui/              # shadcn/ui components (NO editar manualmente)
│   ├── Header.tsx       # Navegación sticky
│   ├── HeroSection.tsx  # Hero con CTA
│   ├── ProductosSection.tsx
│   ├── ContactoSection.tsx  # ← Form Zoho aquí
│   └── ...
├── pages/
│   └── Index.tsx        # Página principal (one-page)
├── lib/
│   └── utils.ts         # Helpers (cn, etc.)
└── index.css            # Estilos globales + custom utilities
```

## 🐛 Troubleshooting

### Assets no cargan en GitHub Pages
- Verifica que `base: '/atria-one-seguros/'` esté en `vite.config.ts`
- Confirma que el nombre del repo coincida con el base path

### Form no envía a Zoho
- Verifica que el `action` del form sea la URL correcta de Zoho
- Confirma que los campos hidden estén pegados
- NO uses `e.preventDefault()` en el form

### 404 al recargar página
- Usamos HashRouter (`/#/`) para evitar esto
- Asegúrate de que `App.tsx` importe `HashRouter` en lugar de `BrowserRouter`

## 📝 Notas

- **Lovable Integration**: Este proyecto fue generado con Lovable. Los cambios via Lovable se commitean automáticamente.
- **shadcn/ui**: Los componentes en `src/components/ui/` son gestionados por shadcn CLI. No los edites manualmente; usa `bunx shadcn@latest add <component>`.
- **Testing**: Configurado con Vitest + @testing-library/react.

## 📄 Licencia

Proyecto privado - Atria One Seguros © 2026


## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
