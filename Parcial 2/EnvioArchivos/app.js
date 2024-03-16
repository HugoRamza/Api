const express = require('express');
const app = express();
const path = require('path');

// Directorio de archivos estáticos
app.use(express.static(path.join(__dirname, 'archivos')));

// Ruta para enviar un archivo
app.get('/enviar-archivo', (req, res) => {
    const filePath = path.join(__dirname, 'archivos', 'imagen.png');
    res.sendFile(filePath);
});

// Ruta para descargar un archivo
app.get('/descargar-archivo', (req, res) => {
    const filePath = path.join(__dirname, 'archivos', 'archivo.pdf');
    res.download(filePath, 'archivo.pdf', (err) => {
        if (err) {
            console.log('Error al descargar el archivo:', err);
            res.status(500).send('Error al descargar el archivo');
        }
    });
});

// Puerto en el que se ejecutará el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
