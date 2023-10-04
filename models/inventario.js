const mongoose = require('mongoose');

const inventarioSchema = new mongoose.Schema({
    tipo: String
});

module.exports = mongoose.model('Inventario', inventarioSchema);