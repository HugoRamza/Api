//Declaracion de mis constantes
const express = require('express');
const jwt = require('jsonwebtoken');
const fs = require('fs');
//Puerto que voy a utilizar
const app = express();
const port = 3000;
//constante que guarda y abre el archivo de mi clave privada y publica
const privateKey = fs.readFileSync('private.key', 'utf8');
const publicKey = fs.readFileSync('public.key', 'utf8');

app.use(express.json()); //uso de la app express.json

app.post('/login', (req, res) => {// mi Ruta para generar el token JWT
  const { username, password } = req.body;   
  const token = jwt.sign({ username }, privateKey, { algorithm: 'RS256' }); //generamos un token con el nombre de usuario
  res.json({ token });
});
function verifyToken(req, res, next) {// Middleware para verificar el token en las rutas protegidas
  const token = req.headers.authorization;
  if (!token) { //validamos que mi token sea igual, si no muestra un status 401
    return res.status(401).json({ message: 'Token not provided' });
  }
  jwt.verify(token.split(' ')[1], publicKey, { algorithms: ['RS256'] }, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = decoded;
    next();
  });
}

app.get('/protected', verifyToken, (req, res) => {// Ruta protegida que requiere el token JWT
  res.json({ message: 'Esta es una ruta protegida por token generado con el metodo bearer', user: req.user });
});

app.listen(port, () => {// Iniciamos el servidor 3000
  console.log(`Server running on port ${port}`);
});
