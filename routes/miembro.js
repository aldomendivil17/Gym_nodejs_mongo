const express = require('express');
const router = express.Router();
const miembroControl = require('../controllers/miembroControl');

// Rutas
router.get('/miembro', miembroControl.getAllMiembros);
router.post('/miembro', miembroControl.addMiembro);
router.get('/miembro/:id', miembroControl.getMiembroById);
router.put('/miembro/:id', miembroControl.updateMiembro);
router.delete('/miembro/:id', miembroControl.deleteMiembro);

module.exports = router;
