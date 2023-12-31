const express = require('express');
const router = express.Router();
const path = require('path'); // Importa el módulo 'path'
const verifyToken = require('./protected');


// Ruta para mostrar la página de inicio de sesión
router.get('/login', (req, res) => {
    const loginPath = path.join(__dirname, '../views/login.html');
    res.sendFile(loginPath);
});

router.get('/index', verifyToken, (req, res) => {
    const token = req.header('Authorization');
    console.log("se viene el token")
    console.log(token)
});

module.exports = router;