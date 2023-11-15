const mongoose = require('mongoose');

const entrenadorSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido_paterno: {
    type: String,
    required: true,
  },
  apellido_materno: {
    type: String,
    required: true,
  },
  fecha_nacimiento: {
    type: Date,
    required: true,
  },
  correo_electronico: {
    type: String,
    required: true,
  },
  numero_celular: {
    type: String,
    required: true,
  }
});

const claseSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  horario: {
    type: String,
    required: true,
  },
  costo: {
    type: Number,
    required: true,
  },
  capacidad_maxima: {
    type: Number,
    required: true,
  },
  entrenadores: [entrenadorSchema]
});
  
module.exports = mongoose.model('Clase', claseSchema);