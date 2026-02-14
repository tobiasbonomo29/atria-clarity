# 🚀 Checklist de Deployment - Atria One Seguros

## ✅ Tareas Completadas

### Configuración Vite
- [x] `base: '/atria-one-seguros/'` configurado en `vite.config.ts`
- [x] Scripts npm verificados (dev, build, preview)

### GitHub Pages
- [x] Workflow `.github/workflows/deploy.yml` creado
- [x] Configurado para deploy automático en push a main
- [x] Permisos correctos (pages: write, id-token: write)

### Router
- [x] Cambiado de BrowserRouter a HashRouter (evita 404s)
- [x] Rutas configuradas en `src/App.tsx`

### SEO
- [x] Title y meta description actualizados
- [x] Open Graph tags configurados
- [x] Twitter cards configurados
- [x] Favicon SVG creado
- [x] Idioma HTML cambiado a "es"

### UX
- [x] Scroll suave activado (`scroll-behavior: smooth`)
- [x] Scroll offset para header fijo (`scroll-margin-top: 80px`)
- [x] Navigation con anclas (#inicio, #productos, etc.)
- [x] FAQ accordion funcional (shadcn/ui)

### Formulario Zoho
- [x] Convertido a HTML puro (sin React state)
- [x] Marcadores claros para pegar snippet
- [x] Campos mapeados a nombres estándar Zoho
- [x] Instrucciones en código y README

### Documentación
- [x] README completo con instrucciones
- [x] Sección de troubleshooting
- [x] Guía de integración Zoho paso a paso

---

## 📋 Tareas Pendientes (Para el Usuario)

### Antes del Primer Deploy

1. **Habilitar GitHub Pages**
   - Ir a Settings → Pages
   - Source: "GitHub Actions"
   
2. **Actualizar datos de contacto**
   - [ ] WhatsApp en `HeroSection.tsx` y `ContactoSection.tsx`
   - [ ] Email en `ContactoSection.tsx`
   - [ ] Teléfono en `ContactoSection.tsx`

3. **Configurar Zoho CRM**
   - [ ] Obtener snippet de Web-to-Lead de Zoho
   - [ ] Pegar campos hidden en `ContactoSection.tsx`
   - [ ] Actualizar action URL del form
   - [ ] Verificar mapeo de campos si es necesario

4. **Assets de marca**
   - [ ] Reemplazar `public/og.jpg` con imagen real (1200x630px)
   - [ ] Actualizar `public/favicon.svg` si tienes logo real
   - [ ] Revisar imágenes en `src/assets/`

5. **Verificar Base Path**
   - [ ] Si el repo NO se llama "atria-one-seguros", actualizar en `vite.config.ts`

### Después del Deploy

6. **Testing Post-Deploy**
   - [ ] Verificar que assets cargan correctamente
   - [ ] Probar navegación entre secciones
   - [ ] Enviar test form a Zoho
   - [ ] Verificar preview en redes sociales (Twitter Card Validator, Facebook Debugger)

7. **Configuración Adicional (Opcional)**
   - [ ] Custom domain en GitHub Pages
   - [ ] Google Analytics / Tag Manager
   - [ ] Meta Pixel o tracking adicional

---

## 🔧 Comandos Útiles

### Desarrollo Local
```bash
npm install       # Primera vez
npm run dev       # http://localhost:8080
npm run build     # Buildear
npm run preview   # Ver build local
```

### Testing
```bash
npm run test        # Run tests
npm run test:watch  # Watch mode
npm run lint        # Linter
```

### Deploy
```bash
git add .
git commit -m "Deploy to production"
git push origin main
# GitHub Actions se encarga del resto
```

---

## 🐛 Problemas Comunes

### Assets no cargan (404)
**Causa**: Base path incorrecto  
**Solución**: Verificar `base` en `vite.config.ts` coincida con nombre del repo

### Form no envía
**Causa**: Campos hidden de Zoho no pegados o action URL incorrecta  
**Solución**: Revisar `ContactoSection.tsx`, buscar comentarios `ZOHO`

### 404 al recargar
**Causa**: Se usa BrowserRouter en lugar de HashRouter  
**Solución**: Ya corregido en `App.tsx` - verificar que no se haya revertido

---

## 📞 Soporte

- **README**: Ver instrucciones completas en `README.md`
- **Código**: Buscar comentarios con "TODO" o "INSTRUCCIONES"
- **Zoho Docs**: https://www.zoho.com/crm/help/web-forms/

---

**Última actualización**: 2026-02-14
