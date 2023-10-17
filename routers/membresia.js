const express = require('express');
const router = express.Router();
const membresiaController = require('../controllers/membresiaController');

// Rutas
router.get('/', membresiaController.getAllMembresias);
router.post('/membresia', membresiaController.addMembresia);
router.get('/membresia/:id', membresiaController.getMembresiaById);
router.put('/membresia/:id', membresiaController.updateMembresia);
router.delete('/membresia/:id', membresiaController.deleteMembresia);

module.exports = router;