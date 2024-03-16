const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

// Configuración de Multer para la recepción de archivos
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Directorio donde se guardarán los archivos
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Nombre del archivo guardado
  }
});

const upload = multer({ storage: storage });

// Ruta para la carga del formulario
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Ruta para manejar la recepción del archivo
app.post('/upload', upload.single('archivo'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No se ha enviado ningún archivo');
  }

  res.send('Archivo recibido y guardado correctamente');
});

// Puerto en el que se ejecutará el servidor
const PORT = 3000;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
