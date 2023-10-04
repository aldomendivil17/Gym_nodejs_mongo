const mongoose = require('mongoose');

const inventarioSchema = new mongoose.Schema({
    id: Number,
    tipo: String
});

module.exports = mongoose.model('Inventario', inventarioSchema);