const mongoose = require('mongoose');

const administradorSchema = new mongoose.Schema({
    usuario: String,
    contraseña: String, // Esto será el hash de la contraseña
});

const Administrador = mongoose.model('Administrador', administradorSchema);

module.exports = Administrador;