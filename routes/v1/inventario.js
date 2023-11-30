const express = require('express');
const router = express.Router();
const inventarioControl = require('../../controllers/inventarioControl');
const verifyToken = require('../protected');

// Rutas protegidas con token JWT válido
router.get('/inventario', verifyToken, (req, res) => {
    inventarioControl.getAllInventarios(req, res);
});

router.post('/inventario', verifyToken, (req, res) => {
    inventarioControl.addInventario(req, res);
});

router.get('/inventario/:id', verifyToken, (req, res) => {
    inventarioControl.getInventarioById(req, res);
});

router.put('/inventario/:id', verifyToken, (req, res) => {
    inventarioControl.updateInventario(req, res);
});

router.delete('/inventario/:id', verifyToken, (req, res) => {
    inventarioControl.deleteInventario(req, res);
});

module.exports = router;