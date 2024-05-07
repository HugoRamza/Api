const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'Documentación de la API utilizando Swagger/OpenAPI',
    },
  },
  apis: ['./routes/*.js'], // Ruta de los archivos que contienen las definiciones de rutas
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
