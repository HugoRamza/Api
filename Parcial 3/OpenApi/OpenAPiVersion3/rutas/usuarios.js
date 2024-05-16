const express = require('express');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Usuarios
 *   description: API para los usuarios del sistema
 */

/**
 * @swagger
 * /usuarios:
 *   get:
 *     summary: Devuelve la lista de todos los usuarios
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: La lista de los usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Usuario'
 */
router.get('/', (req, res) => {
  res.send([
    { id: 1, nombre: 'Juan Pérez', correo: 'juan@example.com' },
    { id: 2, nombre: 'Ana Gómez', correo: 'ana@example.com' }
  ]);
});

/**
 * @swagger
 * /usuarios/{id}:
 *   get:
 *     summary: Obtiene el usuario por id
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: El ID del usuario
 *     responses:
 *       200:
 *         description: El usuario con el id especificado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 *       404:
 *         description: Usuario no encontrado
 */
router.get('/:id', (req, res) => {
  const usuario = { id: req.params.id, nombre: 'Juan Pérez', correo: 'juan@example.com' };
  res.send(usuario);
});

/**
 * @swagger
 * /usuarios:
 *   post:
 *     summary: Crea un nuevo usuario
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuario'
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 *       500:
 *         description: Error en el servidor
 */
router.post('/', (req, res) => {
  const usuario = req.body;
  usuario.id = Math.floor(Math.random() * 1000);
  res.status(201).send(usuario);
});

/**
 * @swagger
 * /usuarios/{id}:
 *   put:
 *     summary: Actualiza el usuario por id
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: El ID del usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuario'
 *     responses:
 *       200:
 *         description: Usuario actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error en el servidor
 */
router.put('/:id', (req, res) => {
  const usuario = req.body;
  usuario.id = req.params.id;
  res.send(usuario);
});

/**
 * @swagger
 * /usuarios/{id}:
 *   delete:
 *     summary: Elimina el usuario por id
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: El ID del usuario
 *     responses:
 *       200:
 *         description: Usuario eliminado
 *       404:
 *         description: Usuario no encontrado
 */
router.delete('/:id', (req, res) => {
  res.send({ message: `Usuario ${req.params.id} eliminado` });
});

module.exports = router;
