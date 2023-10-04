const ClaseDao = require('../daos/claseDao');
const Clase = require('../models/clase');

class ClaseController {
    async agregarClase(datosClase) {
        const nuevaClase = new Clase(datosClase);

        try {
            await ClaseDao.agregarClase(nuevaClase);
        } catch (error) {
            console.error('Error al guardar la clase:', error);
        }
    }

    async buscarClasePorId(id) {
        await ClaseDao.buscarClasePorId(id);
    }

    async actualizarClasePorId(id, nuevosDatos) {
        try {
            await ClaseDao.actualizarClasePorId(id, nuevosDatos);
        } catch (error) {
            console.error('Error al actualizar la clase:', error);
        }
    }

    async eliminarClasePorId(id) {
        try {
            await ClaseDao.eliminarClasePorId(id);
        } catch (error) {
            console.error('Error al eliminar la clase:', error);
        }
    }
}

module.exports = new ClaseController();