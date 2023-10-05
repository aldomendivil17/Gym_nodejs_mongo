const mongoose = require('mongoose');

const miembroSchema = new mongoose.Schema({
    nombre: String,
    apellido_paterno: String,
    apellido_materno: String,
    fecha_nacimiento: Date,
    numero_celular: String,
    id_membresia: { type: mongoose.Schema.Types.ObjectId, ref: 'Membresia' },
    clases_inscritas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Clase' }]
});

module.exports = mongoose.model('Miembro', miembroSchema);