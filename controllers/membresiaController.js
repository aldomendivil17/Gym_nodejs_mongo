const MembresiaDao = require('../daos/membresiaDao');
const Membresia = require('../models/membresia');

class MembresiaController {
  async agregarMembresia() {
    const nuevaMembresia = new Membresia({
      tipo: 'Anual',
      costo: 3500,
      fecha_renovacion: new Date(2032, 10, 23)
    });

    await MembresiaDao.agregarMembresia(nuevaMembresia);
  }

  async buscarMembresiaPorId(id) {
    await MembresiaDao.buscarMembresiaPorId(id);
  }

  async actualizarMembresiaPorId(id) {
    const nuevosDatos = {
      tipo: 'Semanal',
      costo: 150
    };

    await MembresiaDao.actualizarMembresiaPorId(id, nuevosDatos);
  }

  async eliminarMembresiaPorId(id) {
    await MembresiaDao.eliminarMembresiaPorId(id);
  }
}

module.exports = new MembresiaController();
