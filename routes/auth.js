const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const bcrypt = require('bcrypt');
const Administrador = require('../models/administrador');

// Cargar la clave secreta desde las variables de entorno
const secretKey = process.env.SECRET_KEY;

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
router.post('/login', async (req, res) => {
    const { usuario, contraseña } = req.body;
     try {
        const administrador = await Administrador.findOne({ usuario });
        if (!administrador) {
            res.status(401).json({ mensaje: 'Nombre de usuario o contraseña incorrectos' });
            return;
        }

        const esContraseñaValida = await bcrypt.compare(contraseña, administrador.contraseña);
        if (!esContraseñaValida) {
            res.status(401).json({ mensaje: 'Nombre de usuario o contraseña incorrectos' });
            return;
        }

        const expiresIn = 10000000; // 60 segundos (1 minutos)

        const token = jwt.sign({ userId: usuario.id }, secretKey, { expiresIn });

        res.json({ token });
        console.log(token)

     } catch (error) {
         res.status(500).json({ mensaje: 'Error al iniciar sesión' });
     }
});

module.exports = router;
