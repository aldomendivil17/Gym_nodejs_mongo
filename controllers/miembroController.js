const MiembroDao = require('../daos/miembroDao');
const Miembro = require('../models/miembro');

class MiembroController {
    async agregarMiembro(datosMiembro) {
        const nuevoMiembro = new Miembro(datosMiembro);

        try {
            await MiembroDao.agregarMiembro(nuevoMiembro);
        } catch (error) {
            console.error('Error al guardar el inventario:', error);
        }
    }

    async buscarMiembroPorId(id) {
        await MiembroDao.buscarMiembroPorId(id);
    }

    async actualizarMiembroPorId(id, nuevosDatos) {
        try {
            await MiembroDao.actualizarMiembroPorId(id, nuevosDatos);
        } catch (error) {
            console.error('Error al actualizar el miembro:', error);
        }
    }

    async eliminarMiembroPorId(id) {
        try {
            await MiembroDao.eliminarMiembroPorId(id);
        } catch (error) {
            console.error('Error al eliminar el miembro:', error);
        }
    }
}

module.exports = new MiembroController();