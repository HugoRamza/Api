const express = require('express');
const app = express();
const { swaggerUI, swaggerDocument, options } = require('./swaggerConfig');
const path = require('path');

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument, options));

app.get('/redoc', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>API Documentation</title>
      <meta charset="utf-8"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700|Roboto:300,400,700">
      <style>
        body {
          margin: 0;
          padding: 0;
        }
        redoc {
          display: block;
          margin: 0 auto;
        }
      </style>
    </head>
    <body>
      <redoc spec-url='/swagger.json'></redoc>
      <script src="https://cdn.redoc.ly/redoc/latest/bundles/redoc.standalone.js"> </script>
    </body>
    </html>
  `);
});

// Ruta para servir el archivo swagger.json
app.get('/swagger.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'swagger.json'));
});

// Inicia tu servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
