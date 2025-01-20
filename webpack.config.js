const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  // Modo de compilación: "development" para desarrollo
  // Cambiar a "production" para optimización y reducción del tamaño
  mode: "development",

  // Archivo de entrada principal
  entry: "./src/app.js",

  // Configuración de salida
  output: {
    path: path.resolve(__dirname, "public"), // Directorio de salida
    filename: "main.js", // Nombre del archivo generado
    clean: true, // Limpia la carpeta de salida antes de compilar
    assetModuleFilename: "assets/[name][ext]", // Carpeta para los recursos
  },

  // Configuración de loaders
  module: {
    rules: [
      {
        test: /\.scss$/, // Procesa archivos SCSS
        use: ["style-loader", "css-loader", "sass-loader"], // Aplica loaders en orden
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|avif)$/i, // Procesa imágenes y recursos
        type: "asset/resource", // Genera un archivo de salida
        generator: {
          filename: "assets/[name][ext]", // Ubicación de los archivos generados
        },
      },
    ],
  },

  // Configuración de plugins
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "assets", // Carpeta de origen
          to: "assets", // Carpeta de destino en el directorio de salida
        },
      ],
    }),
  ],
};

/**
 * Explicación para cambiar entre modo "development" y "production":
 * 
 * 1. **Modo "development"**:
 *    - Este modo se utiliza durante el desarrollo para facilitar la depuración.
 *    - Configuración actual:
 *      ```javascript
 *      mode: "development"
 *      ```
 *    - Genera archivos no minificados, con mapas de fuente (source maps) para facilitar la depuración.
 * 
 * 2. **Modo "production"**:
 *    - Este modo se utiliza para el despliegue en entornos de producción.
 *    - Cambia la configuración a:
 *      ```javascript
 *      mode: "production"
 *      ```
 *    - Webpack minificará los archivos, optimizará el código y reducirá el tamaño final.
 *    - Puedes ejecutar Webpack en modo producción con el siguiente comando:
 *      ```
 *      webpack --mode production
 *      ```
 */
