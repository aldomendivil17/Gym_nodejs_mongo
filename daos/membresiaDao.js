const Membresia = require('../models/membresia');

class MembresiaDao {
  async agregarMembresia(nuevaMembresia) {
    try {
      await nuevaMembresia.save();
      console.log('Membresía guardada con éxito');
    } catch (error) {
      console.error('Error al guardar la membresía:', error);
    }
  }

  async buscarMembresiaPorId(id) {
    try {
      const membresia = await Membresia.findById(id);
      if (membresia) {
        console.log('Membresía encontrada:', membresia);
      } else {
        console.log('Membresía no encontrada');
      }
    } catch (error) {
      console.error('Error al buscar la membresía:', error);
    }
  }

  async actualizarMembresiaPorId(id, nuevosDatos) {
    try {
      const membresiaActualizada = await Membresia.findOneAndUpdate(
        { _id: id },
        nuevosDatos,
        { new: true }
      );
      if (membresiaActualizada) {
        console.log('Membresía actualizada con éxito:', membresiaActualizada);
      } else {
        console.log('Membresía no encontrada');
      }
    } catch (error) {
      console.error('Error al actualizar la membresía:', error);
    }
  }

  async eliminarMembresiaPorId(id) {
    try {
      const membresiaEliminada = await Membresia.findOneAndDelete({ _id: id });
      if (membresiaEliminada) {
        console.log('Membresía eliminada con éxito:', membresiaEliminada);
      } else {
        console.log('Membresía no encontrada');
      }
    } catch (error) {
      console.error('Error al eliminar la membresía:', error);
    }
  }
}

module.exports = new MembresiaDao();
