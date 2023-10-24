const mongoose = require('mongoose');

const miembroSchema = new mongoose.Schema({
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
    },
    fecha_nacimiento: {
        type: Date,
        required: true,
    },
    numero_celular: {
        type: String,
    },
    id_membresia: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Membresia',
        required: true,
    },
    clases_inscritas: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Clase',
    }],
});

module.exports = mongoose.model('Miembro', miembroSchema);