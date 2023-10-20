const mongoose = require('mongoose');

const membresiaSchema = new mongoose.Schema({
    tipo: {
        type: String,
        required: true,
    },
    costo: {
        type: Number,
        required: true,
    },
    fecha_renovacion: {
        type: Date,
        required: true,
    },
});

module.exports = mongoose.model('Membresia', membresiaSchema); 