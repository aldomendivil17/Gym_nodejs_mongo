const express = require('express');
const router = express.Router();
const claseControl = require('../../controllers/claseControl');
const verifyToken = require('../protected');

// Rutas protegidas con token JWT válido
router.get('/clase', verifyToken, (req, res) => {
    claseControl.getAllClases(req, res);
});

router.post('/clase', verifyToken, (req, res, next) => {
    claseControl.addClase(req, res, next);
});

router.get('/clase/:id', verifyToken, (req, res) => {
    claseControl.getClaseById(req, res);
});

router.put('/clase/:id', verifyToken, (req, res, next) => {
    claseControl.updateClase(req, res);
});

router.delete('/clase/:id', verifyToken, (req, res) => {
    claseControl.deleteClase(req, res);
});

module.exports = router;