const express = require('express');
const router = express.Router();
const claseControl = require('../../controllers/claseControl');

// Rutas
router.get('/clase', claseControl.getAllClases);
router.post('/clase', claseControl.addClase);
router.get('/clase/:id', claseControl.getClaseById);
router.put('/clase/:id', claseControl.updateClase);
router.delete('/clase/:id', claseControl.deleteClase);

module.exports = router;