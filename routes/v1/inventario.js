const express = require('express');
const router = express.Router();
const InventarioControl = require('../../controllers/inventarioControl');
const verifyToken = require('../protected');

// Rutas protegidas con token JWT válido
router.get('/inventario', verifyToken, (req, res) => {
    InventarioControl.getAllInventarios(req, res);
});

router.post('/inventario', verifyToken, (req, res) => {
    InventarioControl.addInventario(req, res);
});

router.get('/inventario/:id', verifyToken, (req, res) => {
    InventarioControl.getInventarioById(req, res);
});

router.put('/inventario/:id', verifyToken, (req, res) => {
    InventarioControl.updateInventario(req, res);
});

router.delete('/inventario/:id', verifyToken, (req, res) => {
    InventarioControl.deleteInventario(req, res);
});

module.exports = router;