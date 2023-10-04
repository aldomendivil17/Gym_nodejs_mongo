// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/gimnasio');

// mongoose.connection.on('open', () => {
//     console.log("Se ha conectado");
// });

const conectarBaseDeDatos = require('./db');
const MembresiaController = require('./controllers/membresiaController');

conectarBaseDeDatos();

// Datos de prueba
// const datosNuevaMembresia = {
//     id: 1,
//     tipo: '5 semanas',
//     costo: 10000,
//     fecha_renovacion: new Date(2002, 10, 10)
//   };

// Ejecutar las operaciones
// MembresiaController.buscarMembresiaPorId("1");
// MembresiaController.agregarMembresia(datosNuevaMembresia);
// MembresiaController.actualizarMembresiaPorId("6519e6f49c86558810c26754", {costo: 150})
// MembresiaController.eliminarMembresiaPorId("1");