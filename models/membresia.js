const mongoose = require('mongoose');

const membresiaSchema = new mongoose.Schema({
    id : Number,
    tipo: String,
    costo: Number,
    fecha_renovacion: Date
});

module.exports = mongoose.model('Membresia', membresiaSchema);