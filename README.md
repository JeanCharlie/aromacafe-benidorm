# 🍵 AromaCafe

Una aplicación web inspirada en una cafetería de especialidad encantadora en Benidorm. Este proyecto es una recreación ficticia creada para practicar y demostrar habilidades en Next.js, React y Tailwind CSS. No es el sitio web oficial de la cafetería mencionada, y no tiene fines de lucro. Es una creación personal para aprender y experimentar con las tecnologías utilizadas.

![AromaCafe Preview](/public/posts/coffee.jpg)

## ✨ Características

- 🎨 Diseño moderno y responsive
- 🚀 Rendimiento optimizado
- 📱 PWA compatible
- 🌐 SEO optimizado
- 🗺️ Integración con mapas para ubicación
- 📸 Galería de imágenes
- 🍽️ Menú digital interactivo
- 📱 Diseño mobile-first
- 🌍 Soporte multiidioma

## 🛠️ Tecnologías

- **Framework:** Next.js 14
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Fuentes:** Satisfy & seri
- **Mapas:** Leaflet
- **Optimización de imágenes:** Next/Image
- **Iconos:** Lucide React

## 🚀 Inicio Rápido

```bash
# Clonar el repositorio
git clone https://github.com/JeanCharlie/aromacafe-benidorm.git

# Navegar al directorio
cd aromacafe

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

## 📁 Estructura del Proyecto

```
aromacafe/
├── app/
│   ├── [locale]/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── ...
├── public/
│   ├── featured/
│   └── hero/
    └── ...
```

## 🔧 Configuración

### Metadatos

Los metadatos SEO se configuran en `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "AromaCafe | El mejor café de la ciudad",
  description: "Descubre la experiencia única de AromaCafe..."
};
```

## 📱 PWA

La aplicación está configurada como PWA. Para construir la versión de producción:

```bash
npm run build
```

## 🌐 SEO

Implementamos las mejores prácticas de SEO:

- Meta tags dinámicos
- Open Graph
- Twitter Cards
- Sitemap XML
- robots.txt
- Schema.org markup

## 📦 Scripts Disponibles

```json
{
  "dev": "Inicia el servidor de desarrollo",
  "build": "Construye la aplicación para producción",
  "start": "Inicia el servidor de producción",
  "lint": "Ejecuta el linter",
  "format": "Formatea el código"
}
```

## 🎨 Personalización

### Temas

Los colores principales se pueden modificar en `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#4A3728',
        secondary: '#F5E6D3',
        // ... más colores
      }
    }
  }
}
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea tu rama de característica (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Distribuido bajo la licencia MIT. Ver `LICENSE` para más información.

## 👥 Equipo

- Diseño UI/UX - [JeanCharlie]
- Desarrollo Frontend - [JeanCharlie]
- SEO & Optimización - [JeanCharlie]

## 📞 Contacto

- Facebook: [@aromacafe](https://www.facebook.com/p/Aroma-Cafe-100089038656584/?locale=es_LA)
- Instagram: [@aromacafe](https://www.instagram.com/aromacafe.es/)

## 🙏 Agradecimientos

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com/)
- [Leaflet](https://leafletjs.com/)
