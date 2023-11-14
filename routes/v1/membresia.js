const express = require('express');
const router = express.Router();
const membresiaControl = require('../../controllers/membresiaControl');
const verifyToken = require('../protected');

// Rutas protegidas con token JWT válido
router.get('/membresia', verifyToken, (req, res) => {
    membresiaControl.getAllMembresias(req, res);
});

router.post('/membresia', verifyToken, (req, res, next) => {
    membresiaControl.addMembresia(req, res, next);
});

router.get('/membresia/:id', verifyToken, (req, res) => {
    membresiaControl.getMembresiaById(req, res);
});

router.put('/membresia/:id', verifyToken, (req, res) => {
    membresiaControl.updateMembresia(req, res);
});

router.delete('/membresia/:id', verifyToken, (req, res) => {
    membresiaControl.deleteMembresia(req, res);
});

module.exports = router;
