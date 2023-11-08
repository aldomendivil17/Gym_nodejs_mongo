const express = require('express');
const router = express.Router();
const inventarioControl = require('../../controllers/inventarioControl');

// Rutas protegidas con token JWT válido
router.get('/inventario', (req, res) => {
    inventarioControl.getAllInventarios(req, res);
});

router.post('/inventario', (req, res) => {
    inventarioControl.addInventario(req, res);
});

router.get('/inventario/:id', (req, res) => {
    inventarioControl.getInventarioById(req, res);
});

router.put('/inventario/:id', (req, res) => {
    inventarioControl.updateInventario(req, res);
});

router.delete('/inventario/:id', (req, res) => {
    inventarioControl.deleteInventario(req, res);
});

module.exports = router;