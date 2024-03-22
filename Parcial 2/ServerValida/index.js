const express = require('express');
const { body, validationResult } = require('express-validator');

const app = express();

// Middleware para permitir el uso de JSON en las peticiones
app.use(express.json());

// Middleware de validación
const validarDatos = [
    body('nombre').isLength({ min: 1 }).withMessage('El campo nombre es obligatorio'),
];

// Ruta para manejar las peticiones POST
app.post('/crear', validarDatos, (req, res) => {
    // Verificar si hubo errores de validación
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    res.send('Datos guardados correctamente');
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor Express iniciado en el puerto ${PORT}`);
});
