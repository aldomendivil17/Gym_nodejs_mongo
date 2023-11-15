const dotenv = require('dotenv');
dotenv.config();

const conectarBaseDeDatos = require('./db');

conectarBaseDeDatos();

// Prueba router membresia
const express = require('express');
const app = express();

// Middleware para analizar JSON
app.use(express.json());

// Rutas para páginas
const pages = require('./routes/pages');
app.use('', pages);
app.use(express.static('views'));

app.use((req, res, next) => {
  if (req.path === '/login/') {
    // Redirigir a la versión sin barra diagonal al final
    res.redirect(301, '/login');
  } else {
    next();
  }
});

app.use((req, res, next) => {
  if (req.path === '/index.html') {
    // Redirigir a la versión sin barra diagonal al final
    res.redirect(301, '/index');
  } else {
    next();
  }
});


// rutas para API version 1 
const membresiaRoutes = require('./routes/v1/membresia');
app.use('/api/v1', membresiaRoutes);
const miembroRoutes = require('./routes/v1/miembro');
app.use('/api/v1', miembroRoutes);
const claseRoutes = require('./routes/v1/clase');
app.use('/api/v1', claseRoutes);



// Middleware de rutas para la autenticación
const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

// Middleware de rutas protegidas
const protectedRoutes = require('./routes/protected');
app.use('/protegido', protectedRoutes);


// Middleware de errores
const errorHandler = require('./middlewares/errorHandler');
app.use(errorHandler);


const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});











// Datos de prueba MIEMBRO
// const datosNuevoMiembro = {
//     nombre: 'Aldo',
//     apellido_parterno: 'Mendivil',
//     apellido_materno: 'Ochoa',
//     fecha_nacimiento: new Date(2002, 8, 17),
//     numero_celular: '1234567890',
//     id_membresia: "6519e39a402b34a8161150cb",
//     clases_inscritas: ["651cfbdf83b265cfcbc9ca1e", "651e1a5d5be614f71d9b5a21"]
// };

// Ejecutar las operaciones MIEMBRO
// MiembroController.buscarMiembroPorId("651e19bd024e23caf7cf76b4");
// MiembroController.agregarMiembro(datosNuevoMiembro);



//Datos de prueba CLASE 
// const datosNuevaClase = {
//     id: 2,
//     nombre: 'Crossfit',
//     horario: 'Lunes 8:00 am',
//     costo: 100,
//     capacidad_maxima: 20,
//     entrenadores: [{
//         nombre: 'Juan',
//         apellido_parterno: 'Perez',
//         apellido_materno: 'Gomez',
//         fecha_nacimiento: new Date(1990, 10, 10),
//         correo_electronico: 'juan@gmail.com',
//         numero_celular: '1234567890'
//     },
//     {
//         nombre: 'Pedro',
//         apellido_parterno: 'Gastelum',
//         apellido_materno: 'Robles',
//         fecha_nacimiento: new Date(1999, 10, 10),
//         correo_electronico: 'pedro@gmail.com',
//         numero_celular: '0987654321'
//     }]
// };


// Ejecutar las operaciones CLASE
// ClaseController.buscarClasePorId("1");
// ClaseController.agregarClase(datosNuevaClase);


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