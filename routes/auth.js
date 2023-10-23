const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const bcrypt = require('bcrypt');
const Administrador = require('../models/administrador');

// Cargar la clave secreta desde las variables de entorno
const secretKey = process.env.SECRET_KEY;

// Usuarios de ejemplo (esto debe almacenarse en una base de datos en una aplicación real)
const users = [
    { id: 1, username: 'user1', password: 'pass1' },
    { id: 2, username: 'user2', password: 'pass2' },
];

// Ruta para registrar un nuevo usuario
router.post('/registro', async (req, res) => {
    const { usuario, contraseña } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(contraseña, 10);
        console.log(hashedPassword);
        const nuevoAdministrador = new Administrador({ usuario, contraseña: hashedPassword });
        await nuevoAdministrador.save();
        res.json({ mensaje: 'Administrador registrado con éxito' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al registrar el administrador' });
    }
});



// Ruta para autenticar y obtener un token JWT
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find((u) => u.username === username);

    if (!user || user.password !== password) {
        return res.status(401).json({ error: 'Credenciales inválidas' });
    }
    // Configura la duración de 1 minutos en segundos
    const expiresIn = 30; // 60 segundos (1 minutos)

    const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn });

    //   const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1h' });
    res.json({ token });
    console.log(token)
});

module.exports = router;
