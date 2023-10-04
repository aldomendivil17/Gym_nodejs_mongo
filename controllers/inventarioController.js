const InventarioDao = require('../daos/inventarioDao');
const Inventario = require('../models/inventario');

class InventarioController {
    async agregarInventario(datosInventario) {
        const nuevoInventario = new Inventario(datosInventario);
    
        try {
          await InventarioDao.agregarInventario(nuevoInventario);
        } catch (error) {
          console.error('Error al guardar el inventario:', error);
        }
      }

  async buscarInventarioPorId(id) {
    await InventarioDao.buscarInventarioPorId(id);
  }

  async actualizarInventarioPorId(id, nuevosDatos) {
    try {
        await InventarioDao.actualizarInventarioPorId(id, nuevosDatos);
    } catch (error) {
        console.error('Error al actualizar el inventario:', error);
    }   
  }

  async eliminarInventarioPorId(id) {
    try {
        await InventarioDao.eliminarInventarioPorId(id);
    } catch (error) {
        console.error('Error al eliminar el inventario:', error);
    }
  }
}

module.exports = new InventarioController();