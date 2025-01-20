const express = require('express');
const { Liquid } = require('liquidjs');
const path = require('path');
const fs = require('fs');

const app = express();

// Configuración del motor Liquid
const engine = new Liquid({
  root: [
    path.resolve(__dirname, 'templates'), // Ruta para las plantillas principales
    path.resolve(__dirname, 'sections'), // Ruta para las secciones
    path.resolve(__dirname, 'snippets')  // Ruta para los snippets reutilizables
  ],
  extname: '.liquid', // Extensión de los archivos Liquid
});

// Configuración de Express para usar Liquid como motor de vistas
app.engine('liquid', engine.express());
app.set('views', path.resolve(__dirname, 'templates')); // Directorio de las plantillas
app.set('view engine', 'liquid'); // Motor de vistas

// Servir archivos estáticos desde el directorio "public"
app.use(express.static('public'));

// Datos importados
const products = require('./data/products.json'); // Productos
const collections = require('./data/collections.json'); // Colecciones
const settings = JSON.parse(fs.readFileSync('./config/settings_data.json', 'utf-8')); // Configuración de secciones

// Ruta principal
app.get('/', (req, res) => {
  res.render('index', { 
    products,         // Productos disponibles
    collections,      // Colecciones disponibles
    settings: settings.sections // Configuración de las secciones
  });
});

// Inicialización del servidor
const PORT = process.env.PORT || 3000; // Puerto de escucha
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`); // Mensaje al iniciar el servidor
});
