# Guillermo Barros - Portfolio Profesional

Portfolio web moderno y responsive desarrollado con React, TypeScript y Tailwind CSS. Diseñado para showcase profesional de proyectos y habilidades como Desarrollador de Aplicaciones Multiplataforma.

## 🚀 Características

- **Diseño Moderno**: Interfaz elegante y profesional con Tailwind CSS
- **Responsive**: Optimizado para todos los dispositivos (mobile-first)
- **TypeScript**: Código tipado y mantenible
- **SEO Optimizado**: Meta tags, structured data y Open Graph
- **Navegación Fija**: Header con fondo consistente en toda la página
- **Contacto Directo**: Botones directos para correo y redes sociales
- **Código Limpio**: Sin comentarios innecesarios ni código no utilizado
- **Componentes Modulares**: Arquitectura basada en componentes reutilizables

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 19, TypeScript, Tailwind CSS
- **Build Tool**: Create React App
- **Icons**: SVG inline icons
- **Favicon**: Personalizado (favicon.png)
- **Manifest**: Configuración PWA optimizada

## 📁 Estructura del Proyecto

```
portfolio/
├── public/
│   ├── index.html          # SEO optimizado con meta tags
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Header.tsx      # Navegación principal
│   │   ├── Hero.tsx        # Sección hero con CTA
│   │   ├── About.tsx       # Sobre mí y formación
│   │   ├── Projects.tsx    # Portfolio de proyectos
│   │   ├── Skills.tsx      # Habilidades técnicas
│   │   ├── Contact.tsx     # Información de contacto y redes sociales
│   │   └── Footer.tsx      # Pie de página
│   ├── App.tsx             # Componente principal
│   ├── index.css           # Estilos con Tailwind
│   └── index.tsx           # Punto de entrada
├── tailwind.config.js      # Configuración de Tailwind
├── postcss.config.js       # Configuración de PostCSS
└── package.json
```

## 🎯 Secciones del Portfolio

1. **Header**: Navegación fija con fondo consistente
2. **Hero**: Presentación personal con enlaces directos a GitHub
3. **About**: Formación académica y experiencia profesional
4. **Projects**: Portfolio de proyectos con imágenes personalizadas
5. **Skills**: Habilidades técnicas con indicadores de nivel
6. **Contact**: Información de contacto directo y redes sociales
7. **Footer**: Enlaces rápidos e información de contacto

## 🚀 Getting Started

### Prerrequisitos

- Node.js (v14 o superior)
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone <repository-url>
cd portfolio

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start
```

La aplicación se abrirá automáticamente en `http://localhost:3000`

### Scripts Disponibles

```bash
npm start          # Inicia servidor de desarrollo
npm test           # Ejecuta tests en modo watch
npm run build      # Build para producción
npm run eject      # Eject (one-way operation)
```

## 🎨 Personalización

### Colores y Tema

Los colores principales están configurados en `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Escala de colores primarios (azul)
  },
  secondary: {
    // Escala de colores secundarios (gris)
  }
}
```

### Información Personal

Actualiza la información personal en cada componente:

- **Hero.tsx**: Nombre, título y descripción principal
- **About.tsx**: Educación y experiencia (sin filosofía profesional)
- **Projects.tsx**: Portfolio de proyectos con imágenes personalizadas
- **Skills.tsx**: Habilidades técnicas y aprendizaje continuo
- **Contact.tsx**: Información de contacto y redes sociales
- **Footer.tsx**: Información de contacto y redes sociales
- **public/index.html**: Meta tags y SEO
- **public/manifest.json**: Configuración de PWA

### SEO y Meta Tags

El archivo `public/index.html` incluye:

- Meta tags básicos
- Open Graph para redes sociales
- Twitter Cards
- Structured Data (Schema.org)
- Tema de color personalizado

## 📱 Responsive Design

El portfolio está optimizado para:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🚀 Deploy

### Build de Producción

```bash
npm run build
```

El build optimizado se generará en la carpeta `build/`.

### Opciones de Deploy

- **Vercel**: Configuración automática
- **Netlify**: Drag & drop del folder `build`
- **GitHub Pages**: Usando `gh-pages`
- **Hosting tradicional**: Upload del folder `build`

## 🔧 Configuración Adicional

### Environment Variables

Crea un archivo `.env` para variables de entorno:

```env
REACT_APP_EMAIL=barrosguillermo24@gmail.com
REACT_APP_LINKEDIN=https://www.linkedin.com/in/guillermo-barros-rodriguez-046665296/
REACT_APP_GITHUB=https://github.com/GuillermoBR24
```

### Análisis y Tracking

Añade Google Analytics o cualquier servicio de tracking en `public/index.html`.

## 📝 Licencia

Este proyecto es de uso privado para fines de portfolio profesional.

## 🤝 Contribuciones

Este es un portfolio personal, pero si encuentras mejoras o sugerencias, siéntete libre de abrir un issue.

---

**Desarrollado con ❤️ por Guillermo Barros**
