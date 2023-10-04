const mongoose = require('mongoose');

const claseSchema = new mongoose.Schema({
    id : Number,
    nombre: String,
    horario: Number,
    costo: Number,
    capacidad_maxima: Number,
    entrenadores: [String]
});

module.exports = mongoose.model('Clase', claseSchema);