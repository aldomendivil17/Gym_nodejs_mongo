const MembresiaDao = require('../daos/membresiaDao');
const Membresia = require('../models/membresia');

class MembresiaController {
  async agregarMembresia(datosMembresia) {
    const nuevaMembresia = new Membresia(datosMembresia);

    try {
      await MembresiaDao.agregarMembresia(nuevaMembresia);
    } catch (error) {
      console.error('Error al guardar la membresía:', error);
    }
  }

  async buscarMembresiaPorId(id) {
    await MembresiaDao.buscarMembresiaPorId(id);
  }

  async actualizarMembresiaPorId(id, nuevosDatos) {
    try {
      await MembresiaDao.actualizarMembresiaPorId(id, nuevosDatos);
    } catch (error) {
      console.error('Error al actualizar la membresía:', error);
    }
  }

  async eliminarMembresiaPorId(id) {
    try {
      await MembresiaDao.eliminarMembresiaPorId(id);
    } catch (error) {
      console.error('Error al eliminar la membresía:', error);
    }
  }
}

module.exports = new MembresiaController();
