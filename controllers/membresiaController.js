const MembresiaDao = require('../daos/membresiaDao');

class MembresiaController {
  async agregarMembresia() {
    const nuevaMembresia = new Membresia({
      tipo: 'Semanal',
      costo: 100,
      fecha_renovacion: new Date(2032, 10, 10)
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
