const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/gimnasio');

mongoose.connection.on('open', () => {
    console.log("Se ha conectado");
});

const MembresiaController = require('./controllers/membresiaController');

// Datos de prueba
// const datosNuevaMembresia = {
//     tipo: '2 semanas',
//     costo: 700,
//     fecha_renovacion: new Date(2012, 10, 10)
//   };

// Ejecutar las operaciones
// MembresiaController.agregarMembresia(datosNuevaMembresia);
// MembresiaController.actualizarMembresiaPorId("6519e6f49c86558810c26754", {costo: 150})
// MembresiaController.eliminarMembresiaPorId("651c9702c1559867867db62b");