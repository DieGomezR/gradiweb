# Shopify Simulator

---

## **Resumen del Proyecto**

Este proyecto consiste en la creación de una simulación de una tienda online basada en la arquitectura de Shopify. El objetivo principal fue desarrollar un entorno interactivo que permita mostrar productos, colecciones, y secciones personalizables mediante el uso del lenguaje Liquid, combinado con JavaScript para efectos dinámicos y SCSS para un diseño moderno y modular. Además, se implementó un servidor local usando Express para simular la experiencia de navegación y visualización de datos dinámicos de productos y colecciones en tiempo real.

---

## **Características del Proyecto**

- **Plantillas dinámicas**: Uso de Liquid para crear páginas con datos configurables.
- **JavaScript avanzado**: Animaciones basadas en `IntersectionObserver` y carga optimizada de contenido.
- **Estilos modernos**: Estructura modular con SCSS, utilizando variables y mixins.
- **Webpack integrado**: Automatización del proceso de compilación de activos.
- **Servidor Express**: Para probar y simular las funcionalidades de Shopify localmente.

---

## **Estructura del Proyecto**

```
/gradiweb
├── /assets                 # Imágenes, fuentes y otros recursos estáticos
│   ├── hero_banner_img.avif
│   ├── homepage_bottom_banner.avif
│   ├── ket_club.jpg
│   ├── shuffle_crewneck_black.avif
│   ├── shuffle_crewneck_grey.avif
│   ├── shuffle_essentials.webp
│   ├── shuffle_hat_black.avif
│   ├── shuffle_hat_purple.avif
│   ├── shuffle_hoodie_black.avif
│   ├── shuffle_hoodie_purple.avif
│   ├── shuffle_t-shirt_black.avif
│   ├── shuffle_t_shirt_white.avif
│   ├── waifu_body_pillow.avif
│   └── /fonts
│       ├── Aeonik-Regular.otf
│       ├── Aeonik-Bold.otf
│       ├── Countach-Bold.otf
│       └── Countach-Regular.otf
├── /config                 # Configuración dinámica para el proyecto
│   ├── settings_schema.json
│   └── settings_data.json
├── /data                   # Datos simulados para productos y colecciones
│   ├── products.json
│   └── collections.json
├── /public                # Archivos compilados para el navegador
│   ├── main.js
│   └── /assets
│       ├── (Imágenes y fuentes, similar a /assets)
├── /sections              # Secciones dinámicas de Liquid
│   ├── /header
│   │   └── header.liquid
│   ├── /hero
│   │   └── hero.liquid
│   ├── /products
│   │   └── featured-products.liquid
│   ├── /collections
│   │   └── latest-collection.liquid
│   └── /footer
│       └── footer.liquid
├── /snippets              # Componentes reutilizables
│   ├── /header
│   │   ├── content-mobile.liquid
│   │   ├── logo-header.liquid
│   │   ├── menu-header.liquid
│   │   ├── menu-mobile.liquid
│   │   ├── payments-header.liquid
│   │   └── /responsive
│   │       └── mobile-logo.liquid
│   ├── marquee.liquid
│   ├── /hero
│   │   └── marquee-hero.liquid
│   ├── /top-bar
│   │   └── top-bar.liquid
│   ├── /collection
│   │   └── collection-card.liquid
│   ├── /products
│   │   └── products-cards.liquid
│   └── /footer
│       ├── links-footer.liquid
│       ├── logo-footer.liquid
│       ├── menu-footer.liquid
│       ├── socials-footer.liquid
│       ├── suscription-footer.liquid
│       ├── payments-footer.liquid
│       └── /responsive
│           └── menu-mobile.liquid
├── /src                   # Archivos fuente
│   ├── app.js
│   └── /styles
│       ├── styles.scss
│       ├── /base
│       │   ├── _body.scss
│       │   ├── _fonts.scss
│       │   ├── _letter.scss
│       │   ├── _index.scss
│       │   └── _helpers.scss
│       ├── /sections
│       │   ├── _header.scss
│       │   ├── _index.scss
│       │   ├── _latest-collection.scss
│       │   ├── _footer.scss
│       │   ├── _hero.scss
│       │   └── _featured-products.scss
│       ├── /snippets
│       │   ├── _index.scss
│       │   ├── /header
│       │   │   ├── _logo-header.scss
│       │   │   ├── _menu-header.scss
│       │   │   ├── _menu-mobile.scss
│       │   │   ├── _payments-header.scss
│       │   │   └── /mobile
│       │   │       └── _mobile-logo.scss
│       │   ├── /hero
│       │   │   └── _hero.scss
│       │   ├── /collection
│       │   │   └── _collection-card.scss
│       │   ├── /top-header
│       │   │   └── _top-bar.scss
│       │   ├── /product
│       │   │   └── _product-card.scss
│       │   └── /footer
│       │       ├── _logo-footer.scss
│       │       ├── _links-footer.scss
│       │       ├── _menu-footer.scss
│       │       ├── _socials-footer.scss
│       │       ├── _suscription-footer.scss
│       │       ├── _payments-footer.scss
│       │       └── /responsive
│       │           └── _menu-mobile.scss
│       └── /utils
│           ├── _colors.scss
│           ├── _mixins.scss
│           ├── _variables.scss
│           └── _index.scss
├── /templates             # Plantillas principales
│   └── index.liquid
├── package.json           # Dependencias del proyecto
├── webpack.config.js      # Configuración de Webpack
├── server.js              # Configuración del servidor Express
└── Readme.md              # Documentación del proyecto
```

---

## **Requisitos Previos**

- **Node.js**: v14 o superior
- **npm**: Administrador de paquetes

---

## **Instalación y Configuración**

1. Clonar el repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd gradiweb
   ```

2. Instalar las dependencias:
   ```bash
   npm install
   ```

3. Compilar los activos (JavaScript y SCSS):
   ```bash
   npm run build
   ```

4. Iniciar el servidor:
   ```bash
   npm start
   ```

5. Acceder al proyecto en el navegador:
   ```
   http://localhost:3000
   ```

---

## **Detalles Técnicos**

### **Liquid**

- **Plantillas dinámicas**: Incluyen secciones como `hero`, `featured-products` y `footer` entre otras.
- **Uso de snippets**: Reutilización de componentes como `product-card` y `collection-card` y algunos marquee.
- **Iteraciones**: Visualización de datos de `/data/products.json` y `/data/collections.json`.

### **JavaScript**

- Animaciones al hacer scroll con `IntersectionObserver`.
- Lógica personalizada para carga diferida y efectos interactivos.
- Gestión de eventos para mejorar la experiencia de usuario.

### **SCSS**

- Estilos organizados en secciones (`_header.scss`, `_footer.scss`) y utilidades (`_mixins.scss`, `_variables.scss`).
- Uso de mixins y variables para facilitar la personalización.

### **Webpack**

- Compilación de JavaScript y SCSS en un solo archivo para producción.
- Copia automática de activos al directorio `/public`.

---

## **Personalización**

1. **Editar Secciones**: Modifica los archivos en `/sections` para cambiar el contenido y diseño.
2. **Actualizar Configuración**: Modifica los valores en `/config/settings_data.json`.
3. **Cambiar Estilos**: Ajusta los archivos SCSS en `/src` para personalizar colores, fuentes y diseño general.
4. **Añadir Snippets**: Crea nuevos componentes reutilizables en `/snippets` y úsalos en tus plantillas.

---

## **Contribución**

1. Haz un fork del repositorio.
2. Crea una nueva rama para tu funcionalidad:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. Envía un pull request para revisión.

---

## **Licencia**

Este proyecto está bajo la licencia ISC. Consulta el archivo `LICENSE` para más información.

---

Para más información sobre Liquid, visita la [documentación oficial](https://shopify.dev/docs/themes/liquid).

