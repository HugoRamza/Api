const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Obtiene todos los usuarios
 *     description: Retorna una lista de todos los usuarios registrados.
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/users', (req, res) => {
  // Lógica para obtener y retornar usuarios
  res.send('Lista de usuarios');
});

module.exports = router;
