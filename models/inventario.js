const mongoose = require('mongoose');


const inventarioSchema = new mongoose.Schema({
    tipo: {
        type: String,
        required: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    marca: {
        type: String,
        required: true,
    },
    costo: {
        type: Number,
        required: true,
    },
    cantidad: {
        type: Number,
        required: true,
    },
    modelo: {
        type: String
    },
    fecha_adquisicion: {
        type: Date
    },
    categoria: {
        type: String,
    },
    contenido: {
        type: String,
    },
    precio_venta: {
        type: Number,
    },
});


const maquinaInventarioSchema = new mongoose.Schema({
    modelo: {
        type: String,
        required: true,
    },
    fecha_adquisicion: {
        type: Date,
        required: true,
    },
});
  
  const productoInventarioSchema = new mongoose.Schema({
    categoria: {
        type: String,
    },
    contenido: {
        type: String,
    },
    precio_venta: {
        type: Number,
        required: true,
    },
});


const Inventario = mongoose.model('Inventario', inventarioSchema);

const MaquinaInventario = Inventario.discriminator('Maquina', maquinaInventarioSchema);
const ProductoInventario = Inventario.discriminator('Producto', productoInventarioSchema);

module.exports = Inventario;

