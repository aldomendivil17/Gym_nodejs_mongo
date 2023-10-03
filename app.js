const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/gimnasio');

mongoose.connection.on('open', () => {
    console.log("Se ha conectado");
});

const MembresiaController = require('./controllers/membresiaController');

// Ejecutar las operaciones
MembresiaController.agregarMembresia();
// MembresiaController.buscarMembresiaPorId('6519e475bd75a9aa07956582');
// MembresiaController.actualizarMembresiaPorId('6519e475bd75a9aa07956582');
// MembresiaController.eliminarMembresiaPorId('6519e475bd75a9aa07956582');
