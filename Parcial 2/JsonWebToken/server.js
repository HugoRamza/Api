const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3000;
const SECRET_KEY = 'mysecretkey'; // Clave secreta para firmar los tokens
app.use(express.json());// Middleware para parsear el cuerpo de las solicitudes

app.post('/login', (req, res) => {// Ruta para iniciar sesión y obtener un token JWT    
    const { username, password } = req.body;// Aquí deberías tener lógica para autenticar al usuario, por ejemplo, consultando una base de datos
    if (username === 'usuario' && password === 'contraseña') {// Verifica las credenciales del usuario (esto es un ejemplo básico)
        const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' }); // Genera un token JWT con el nombre de usuario y firma con la clave secreta
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Credenciales inválidas' });
    }
});
function verifyToken(req, res, next) {// Middleware para proteger rutas que requieren autenticación
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(403).json({ message: 'Token de autenticación no proporcionado' });
    }
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Token de autenticación inválido' });
        }
        req.user = decoded;
        next();
    });
}
app.get('/datos-protegidos', verifyToken, (req, res) => {// Ruta protegida que requiere un token JWT válido
    res.json({ message: 'Datos protegidos' });
});
app.listen(PORT, () => {// Iniciar el servidor
    console.log(`Servidor Express corriendo en el puerto ${PORT}`);
});
