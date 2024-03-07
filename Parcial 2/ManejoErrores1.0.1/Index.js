const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Ruta de ejemplo que genera un error
app.get('/error', (req, res, next) => {
  const err = new Error('Este es un error de ejemplo');
  err.status = 500;
  next(err);
});

// Función manejadora de errores
function errorHandler(err, req, res, next) {
  const statusCode = err.status || 500;
  const errorMessage = err.message || 'Error interno del servidor';

  // Objeto estándar con información del error
  const errorResponse = {
    status: statusCode,
    error: {
      message: errorMessage,
    },
  };

  // Enviar la respuesta al cliente
  res.status(statusCode).json(errorResponse);
}

// Middleware para manejar errores
app.use(errorHandler);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express iniciado en http://localhost:${PORT}`);
});
