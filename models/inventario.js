const mongoose = require('mongoose');


const inventarioSchema = new mongoose.Schema({
    id: Number,
    tipo: String,
    nombre: String,
    marca: String,
    costo: Number,
    cantidad: Number
});


const maquinaInventarioSchema = new mongoose.Schema({
    modelo: String,
    fecha_adquisicion: Date
});
  
  const productoInventarioSchema = new mongoose.Schema({
    categoria: String,
    contenido: String,
    precio_venta: Number
});


const Inventario = mongoose.model('Inventario', inventarioSchema);

const MaquinaInventario = Inventario.discriminator('Maquina', maquinaInventarioSchema);
const ProductoInventario = Inventario.discriminator('Producto', productoInventarioSchema);

module.exports = {
    Inventario,
    MaquinaInventario,
    ProductoInventario,
};