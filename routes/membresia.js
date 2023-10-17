const express = require('express');
const router = express.Router();
const membresiaControl = require('../controllers/membresiaControl');

// Rutas
router.get('/', membresiaControl.getAllMembresias);
// router.post('/membresia', membresiaController.addMembresia);
router.get('/membresia/:id', membresiaControl.getMembresiaById);
// router.put('/membresia/:id', membresiaController.updateMembresia);
// router.delete('/membresia/:id', membresiaController.deleteMembresia);

module.exports = router;