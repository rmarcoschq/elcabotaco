# El Cabo Taco – Sitio Web
## Cevichería & Seafood | Puerto Peñasco, Sonora

---

## Estructura de Archivos

```
cabo-taco/
├── index.html              ← Página principal
├── css/
│   └── style.css           ← Estilos del sitio
├── js/
│   ├── translations.js     ← Textos en Español / English
│   └── main.js             ← Interactividad del sitio
└── images/
    ├── logo.png            ← Logo circular El Cabo Taco
    ├── food-aguachile.png  ← Foto Atún Cabo / Aguachile
    ├── food-ceviche.png    ← Foto Ceviche Mixto
    ├── food-coctel.png     ← Foto Cóctel de Camarón
    ├── restaurant-group.png ← Foto clientes en el restaurante
    ├── menu-es-front.png   ← Menú en Español – Frente
    ├── menu-es-back.png    ← Menú en Español – Reverso
    ├── menu-en-front.png   ← Menu in English – Front
    └── menu-en-back.png    ← Menu in English – Back
```

---

## Cómo Subir al Servidor

### Opción A – FTP (más común)
1. Conectarte a tu servidor con un cliente FTP (FileZilla, Cyberduck)
2. Subir **toda la carpeta `cabo-taco/`** a la raíz de tu sitio (usualmente `public_html/` o `www/`)
3. Asegúrate de mantener la estructura de carpetas exacta

### Opción B – cPanel File Manager
1. Acceder a cPanel → File Manager
2. Navegar a `public_html/`
3. Subir el archivo ZIP y extraerlo ahí

### Opción C – Git / GitHub Pages
1. `git init` en la carpeta
2. `git add . && git commit -m "El Cabo Taco launch"`
3. Subir a tu repositorio y activar GitHub Pages

---

## Personalizaciones Pendientes

### 🔴 REEMPLAZAR ANTES DE PUBLICAR

1. **Número de WhatsApp** — Busca `52XXXXXXXXXX` en todo el proyecto y reemplaza con el número real (formato internacional, sin +, sin espacios)
   - Archivos: `index.html`

2. **Dirección exacta en el mapa** — El mapa de Google Maps usa coordenadas genéricas de Puerto Peñasco. Para precisión:
   - Ve a Google Maps, busca tu restaurante
   - Haz clic en "Compartir" → "Insertar un mapa"
   - Copia el `src="..."` del iframe y reemplázalo en `index.html` (busca `maps.google.com/maps/embed`)
   - O actualiza la URL de "Cómo Llegar" con la ubicación exacta

3. **Fotos Placeholder** — Dos tarjetas de platillos muestran "Foto próximamente" (🌮 y 🐙). Cuando tengas fotos reales del Taco Gobernador y el Pulpo Cabo, agrégalas a `/images/` y reemplaza el div `.placeholder-img` con un `<img>` real.

4. **Fotos de Galería** — Hay 2 espacios adicionales con "📸 Tu foto aquí". Reemplaza las divs `.placeholder-gallery` con imágenes reales del restaurante.

5. **Horario** — Verifica el horario en la sección Ubicación / Location (actualmente "10:00 AM – 8:00 PM"). Actualiza en `js/translations.js` bajo las claves `location.hours.text`.

---

## Características del Sitio

- ✅ **Bilingüe** — Español / English con toggle en tiempo real
- ✅ **Responsive** — Optimizado para móvil, tablet y escritorio
- ✅ **Menú interactivo** — Ampliación de imágenes del menú con lightbox
- ✅ **Galería** — Mosaico con efecto hover y lightbox
- ✅ **Mapa integrado** — Google Maps embebido
- ✅ **WhatsApp flotante** — Botón de contacto siempre visible
- ✅ **Animaciones marinas** — Olas, burbujas, logo flotante
- ✅ **SEO básico** — Meta tags en español
- ✅ **Accesibilidad** — ARIA labels, keyboard navigation, reduced motion

---

## Redes Sociales Enlazadas

- 🔵 Facebook: `https://www.facebook.com/p/El-Cabo-Taco-61551436047336/`
- 📸 Instagram: `https://www.instagram.com/el_cabo_taco/`
- 💬 WhatsApp: Requiere actualizar número (ver arriba)

---

© 2025 El Cabo Taco – Puerto Peñasco, Sonora, México
