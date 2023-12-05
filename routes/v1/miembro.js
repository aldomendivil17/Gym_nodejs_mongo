const express = require('express');
const router = express.Router();
const miembroControl = require('../../controllers/miembroControl');

// Rutas protegidas con token JWT válido
router.get('/miembro', (req, res) => {
    miembroControl.getAllMiembros(req, res);
});

router.post('/miembro', (req, res) => {
    miembroControl.addMiembro(req, res);
});

router.get('/miembro/:id', (req, res) => {
    miembroControl.getMiembroById(req, res);
});

router.put('/miembro/:id', (req, res) => {
    miembroControl.updateMiembro(req, res);
});

router.delete('/miembro/:id', (req, res) => {
    miembroControl.deleteMiembro(req, res);
});

router.get('/totalMiembros', (req, res) => {
    miembroControl.getTotalMiembros(req, res);
});

router.get('/ganancias', (req, res) => {
    miembroControl.getGananciasDelMes(req, res);
});
module.exports = router;
