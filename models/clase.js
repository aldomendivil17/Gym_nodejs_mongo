const mongoose = require('mongoose');

const entrenadorSchema = new mongoose.Schema({
    nombre: String,
    apellido_paterno: String,
    apellido_materno: String,
    fecha_nacimiento: Date,
    correo_electronico: String,
    numer_celular: String
  });

const claseSchema = new mongoose.Schema({
    id : Number,
    nombre: String,
    horario: String,
    costo: Number,
    capacidad_maxima: Number,
    entrenadores: [entrenadorSchema]
});

module.exports = mongoose.model('Clase', claseSchema);