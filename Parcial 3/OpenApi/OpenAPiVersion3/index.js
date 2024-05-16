const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
app.use(express.json());

// Configuración de Swagger
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API CRUD',
      version: '1.0.0',
      description: 'Una simple API CRUD'
    },
    tags: [
      {
        name: 'Usuarios',
        description: 'API para los usuarios del sistema'
      }
    ],
    components: {
      schemas: {
        Usuario: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              description: 'El ID auto-generado del usuario'
            },
            nombre: {
              type: 'string',
              description: 'El nombre del usuario'
            },
            correo: {
              type: 'string',
              description: 'El correo del usuario'
            }
          },
          required: ['nombre', 'correo']
        }
      }
    }
  },
  apis: ['./rutas/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Rutas
const rutasUsuarios = require('./rutas/usuarios');
app.use('/usuarios', rutasUsuarios);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
