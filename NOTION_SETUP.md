# Guía de Configuración: Notion CMS para Atria One Seguros

Esta guía explica cómo configurar Notion para gestionar el contenido del Blog y las Preguntas Frecuentes de forma simple y sin tocar código.

---

## 📋 ¿Qué es esto?

Notion funciona como un **panel de administración** donde puedes:
- ✅ Escribir posts de blog como si fuera Word
- ✅ Agregar/editar preguntas frecuentes
- ✅ Ver cambios en el sitio automáticamente (sin redesplegar)
- ✅ 100% gratis

---

## 🚀 Paso 1: Crear cuenta en Notion

1. Ve a https://www.notion.so/signup
2. Crea una cuenta gratuita (con tu email)
3. Inicia sesión en Notion

---

## 📁 Paso 2: Crear las bases de datos

### A. Base de datos de Blog

1. En Notion, crea una nueva página llamada **"Blog Atria One"**
2. Escribe `/database` y selecciona **"Table - Inline"**
3. Configura las siguientes **propiedades** (columnas):

| Nombre | Tipo | Descripción |
|--------|------|-------------|
| **Título** | Title | El título del post |
| **Resumen** | Text | Descripción corta (2-3 líneas) |
| **Contenido** | Text | Contenido completo del artículo |
| **Fecha** | Date | Fecha de publicación |
| **Imagen** | URL o File | URL de la imagen destacada |
| **Publicado** | Checkbox | ✅ = se muestra en el sitio |

**Ejemplo de post:**
```
Título: ¿Qué tipo de seguro automotriz necesitas?
Resumen: Conoce las diferencias entre SOAP y seguro completo.
Contenido: [Texto completo del artículo aquí...]
Fecha: 27/02/2026
Imagen: https://example.com/imagen.jpg
Publicado: ✅
```

### B. Base de datos de FAQs

1. En Notion, crea una nueva página llamada **"FAQs Atria One"**
2. Escribe `/database` y selecciona **"Table - Inline"**
3. Configura las siguientes **propiedades**:

| Nombre | Tipo | Descripción |
|--------|------|-------------|
| **Pregunta** | Title | La pregunta |
| **Respuesta** | Text | La respuesta completa |
| **Orden** | Number | 1, 2, 3... (orden de aparición) |
| **Publicado** | Checkbox | ✅ = se muestra en el sitio |

**Ejemplo de FAQ:**
```
Pregunta: ¿Qué necesito para cotizar?
Respuesta: Solo necesitas tu RUT y algunos datos básicos...
Orden: 1
Publicado: ✅
```

---

## 🔑 Paso 3: Crear integración de Notion

1. Ve a https://www.notion.so/my-integrations
2. Clic en **"+ New integration"**
3. Llena el formulario:
   - Name: `Atria One Website`
   - Associated workspace: Tu workspace
   - Type: Internal
4. Clic en **"Submit"**
5. **COPIA EL TOKEN** (empieza con `secret_...`) - lo necesitarás después

---

## 🔗 Paso 4: Conectar las bases de datos

### Para la base de datos de Blog:
1. Abre la página **"Blog Atria One"** en Notion
2. Clic en los **3 puntos** (⋯) arriba a la derecha
3. Clic en **"Add connections"**
4. Selecciona **"Atria One Website"**
5. Clic en **"Confirm"**
6. Copia el **ID de la base de datos** de la URL:
   ```
   https://notion.so/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx?v=...
                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                    Este es el Database ID
   ```

### Para la base de datos de FAQs:
1. Repite los pasos anteriores con **"FAQs Atria One"**
2. Copia también su **Database ID**

---

## ⚙️ Paso 5: Configurar variables de entorno

1. Crea un archivo `.env` en la raíz del proyecto (al lado de `package.json`)
2. Pega este contenido y **rellena con tus valores**:

```env
VITE_NOTION_API_KEY=secret_TU_TOKEN_AQUI
VITE_NOTION_BLOG_DATABASE_ID=TU_BLOG_DATABASE_ID_AQUI
VITE_NOTION_FAQ_DATABASE_ID=TU_FAQ_DATABASE_ID_AQUI
```

**⚠️ IMPORTANTE:** 
- Nunca compartas el archivo `.env` públicamente
- Ya está en `.gitignore` para no subirlo a GitHub

---

## 📝 Paso 6: Configurar variables en GitHub (para producción)

Para que funcione en el sitio público:

1. Ve a tu repositorio en GitHub
2. Clic en **Settings** → **Secrets and variables** → **Actions**
3. Clic en **"New repository secret"** (3 veces)
4. Agrega estos 3 secretos:

| Name | Value |
|------|-------|
| `VITE_NOTION_API_KEY` | Tu token de Notion |
| `VITE_NOTION_BLOG_DATABASE_ID` | ID de la base de datos de blog |
| `VITE_NOTION_FAQ_DATABASE_ID` | ID de la base de datos de FAQs |

5. Edita el archivo `.github/workflows/deploy.yml` y agrega al final del paso `npm run build`:

```yaml
- name: Build
  run: npm run build
  env:
    VITE_NOTION_API_KEY: ${{ secrets.VITE_NOTION_API_KEY }}
    VITE_NOTION_BLOG_DATABASE_ID: ${{ secrets.VITE_NOTION_BLOG_DATABASE_ID }}
    VITE_NOTION_FAQ_DATABASE_ID: ${{ secrets.VITE_NOTION_FAQ_DATABASE_ID }}
```

---

## ✅ Paso 7: Probar que funciona

1. **En local:**
   ```bash
   npm run dev
   ```
   Abre http://localhost:8080/atria-clarity/

2. **En producción:**
   - Haz push de los cambios a GitHub
   - Espera 2-3 minutos al deploy
   - Visita https://tobiasbonomo29.github.io/atria-clarity/

---

## 📚 Cómo usar Notion día a día

### Publicar un nuevo post de blog:

1. Abre la base de datos **"Blog Atria One"** en Notion
2. Clic en **"+ New"**
3. Llena todos los campos:
   - Título: Nombre del artículo
   - Resumen: 2-3 líneas
   - Contenido: Tu artículo completo
   - Fecha: Fecha de hoy
   - Imagen: URL de una imagen (opcional)
   - **Publicado: ✅** (muy importante)
4. Cierra la página
5. **Espera 5 minutos** → El post aparecerá automáticamente en el sitio

### Agregar una nueva FAQ:

1. Abre **"FAQs Atria One"** en Notion
2. Clic en **"+ New"**
3. Llena:
   - Pregunta: Tu pregunta
   - Respuesta: La respuesta completa
   - Orden: Número (1, 2, 3...)
   - **Publicado: ✅**
4. Cierra
5. Espera 5 minutos → Aparecerá en el sitio

### Editar contenido existente:

1. Simplemente abre el post/FAQ en Notion
2. Edita lo que necesites
3. Guarda
4. Espera 5 minutos → Los cambios se reflejarán automáticamente

### Ocultar contenido:

- Desmarca el checkbox **"Publicado"** ❌
- El contenido desaparecerá del sitio en 5 minutos

---

## 🔍 Solución de problemas

### "No veo mis posts/FAQs en el sitio"

✅ **Verifica:**
1. El checkbox "Publicado" está marcado ✅
2. Las variables de entorno están bien configuradas
3. Esperaste al menos 5 minutos (hay caché)
4. En Notion, la integración "Atria One Website" está conectada

### "Error de Notion API"

✅ **Verifica:**
1. El token empieza con `secret_`
2. Los Database IDs son correctos (32 caracteres)
3. Las bases de datos tienen las propiedades correctas
4. La integración tiene acceso a ambas bases de datos

### "El sitio muestra contenido antiguo"

- Hay un **cache de 5 minutos**
- Espera o recarga con `Ctrl + Shift + R` (Windows) o `Cmd + Shift + R` (Mac)

---

## 💡 Consejos

### Para imágenes en posts:
1. **Opción 1:** Sube a un servicio gratuito como:
   - Imgur (https://imgur.com)
   - Cloudinary (https://cloudinary.com)
   - Unsplash (imágenes libres: https://unsplash.com)
   
2. **Opción 2:** Usa el campo "File" en Notion (menos recomendado, URLs temporales)

### Estructura de un buen post:
```
Título: Claro y descriptivo (máx 60 caracteres)
Resumen: 2-3 líneas que enganchen al lector
Contenido: 
  - Introducción
  - 3-5 puntos principales
  - Conclusión con call-to-action
Imagen: Relacionada con el tema, buena calidad
```

### Mejores prácticas FAQs:
- Ordena por relevancia (las más importantes primero)
- Respuestas concisas (2-4 líneas)
- Lenguaje simple y claro
- Actualiza regularmente según consultas reales

---

## 📞 Soporte

Si tienes problemas con la configuración:
1. Revisa esta guía paso a paso
2. Verifica la consola del navegador (F12 → Console) en busca de errores
3. Contacta al equipo de desarrollo

---

## 🎉 ¡Listo!

Ahora puedes gestionar todo el contenido desde Notion sin tocar código. Los cambios se reflejan automáticamente en el sitio.

**Recuerda:** Los posts/FAQs con "Publicado" ✅ se muestran, los sin marcar ❌ están ocultos.
