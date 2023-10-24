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

// Middleware para validar antes de eliminar una membresía
membresiaSchema.pre('deleteOne', async function (next) {
    console.log('Pre deleteOne middleware');
    const membresiaId = this.getQuery()._id; // Obtén el _id correctamente
    console.log('ID de membresia:', membresiaId);
    const miembros = await mongoose.model('Miembro').find({ id_membresia: membresiaId });
    console.log('Miembros asociados:', miembros);
    try {
        if (miembros.length > 0) {
            throw new Error('No se puede eliminar la membresía porque hay miembros asociados.');
        }
        next();
    } catch (err) {
        next(err);
    }
    
});
module.exports = mongoose.model('Membresia', membresiaSchema); 