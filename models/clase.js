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
  numer_celular: {
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

//middleware para validar antes de eliminar una clase
claseSchema.pre('deleteOne', async function (next) {
  console.log('Pre deleteOne middleware');
  const Class = this.model('Clase');
  const claseId = this.getQuery()._id; // Obtén el _id correctamente

  // Verificar si existen entrenadores asociados a la clase
  const tieneEntrenadores = await Class.findOne({ _id: claseId, entrenadores: { $exists: true, $ne: [] } });

  try {
    if (tieneEntrenadores) {
      throw new Error('No se puede eliminar la clase, tiene entrenadores asociados.');
    }
    next();
  } catch (err) {
    next(err);
  }

});

module.exports = mongoose.model('Clase', claseSchema);