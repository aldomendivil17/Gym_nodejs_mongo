// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/gimnasio');

// mongoose.connection.on('open', () => {
//     console.log("Se ha conectado");
// });

const conectarBaseDeDatos = require('./db');
const MembresiaController = require('./controllers/membresiaController');
const InventarioController = require('./controllers/inventarioController');
const ClaseController = require('./controllers/claseController');

conectarBaseDeDatos();


//DAtos de prueba CLASE 
const datosNuevaClase = {
    id: 1,
    nombre: 'Spinning',
    horario: 'Lunes 8:00 am',
    costo: 100,
    capacidad_maxima: 20,
    entrenadores: [{
        nombre: 'Juan',
        apellido_parterno: 'Perez',
        apellido_materno: 'Gomez',
        fecha_nacimiento: new Date(1990, 10, 10),
        correo_electronico: 'juan@gmail.com',
        numero_celular: '1234567890'
    },
    {
        nombre: 'Pedro',
        apellido_parterno: 'Gastelum',
        apellido_materno: 'Robles',
        fecha_nacimiento: new Date(1999, 10, 10),
        correo_electronico: 'pedro@gmail.com',
        numero_celular: '0987654321'
    }]
};


// Ejecutar las operaciones CLASE
// ClaseController.buscarClasePorId("1");
ClaseController.agregarClase(datosNuevaClase);


// // Datos de prueba INVENTARIO (Maquina)
// const datosNuevoInventarioMaquina = {
//     id: 1,
//     tipo: 'Maquina',
//     nombre: 'Banco de pecho',
//     marca: 'Life Fitness',
//     modelo: 'G7',
//     fecha_adquisicion: new Date(2002, 10, 10),
//     costo: 5000,
//     cantidad: 3
// };

// // Datos de prueba (Producto)
// const datosNuevoInventarioProducto = {
//     id: 2,
//     tipo: 'Producto',
//     nombre: 'Proteina',
//     marca: 'Optimum Nutrition',
//     contenido: '5 lbs',
//     precio: 500
// };

// Ejecutar las operaciones INVENTARIO
// InventarioController.buscarInventarioPorId("2");
// InventarioController.agregarMaquina(datosNuevoInventarioMaquina);
// InventarioController.agregarProducto(datosNuevoInventarioProducto);
// InventarioController.actualizarInventarioPorId("6519e6f49c86558810c26754", {cantidad: 2})
// InventarioController.eliminarInventarioPorId("1");



// Datos de prueba MEMBRESIA
// const datosNuevaMembresia = {
//     id: 1,
//     tipo: '5 semanas',
//     costo: 10000,
//     fecha_renovacion: new Date(2002, 10, 10)
//   };

// Ejecutar las operaciones MEMBRESIA
// MembresiaController.buscarMembresiaPorId("1");
// MembresiaController.agregarMembresia(datosNuevaMembresia);
// MembresiaController.actualizarMembresiaPorId("6519e6f49c86558810c26754", {costo: 150})
// MembresiaController.eliminarMembresiaPorId("1");