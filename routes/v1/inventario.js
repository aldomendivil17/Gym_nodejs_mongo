const express = require('express');
const router = express.Router();
const inventarioControl = require('../../controllers/inventarioControl');

// Rutas
router.get('/inventario', inventarioControl.getAllInventarios);
router.post('/inventario', inventarioControl.addInventario);
router.get('/inventario/:id', inventarioControl.getInventarioById);
router.put('/inventario/:id', inventarioControl.updateInventario);
router.delete('/inventario/:id', inventarioControl.deleteInventario);

module.exports = router;