const Miembro = require('../models/miembro');

class MiembroDao {
    async agregarMiembro(nuevoMiembro) {
        try {
            await nuevoMiembro.save();
            console.log('Miembro guardado con éxito');
        } catch (error) {
            console.error('Error al guardar el miembro:', error);
        }
    }

    async buscarMiembroPorId(id) {
        try {
            const miembro = await Miembro.findOne({ _id: id });
            if (miembro) {
                console.log('Miembro encontrado:', miembro);
            } else {
                console.log('Miembro no encontrado');
            }
        } catch (error) {
            console.error('Error al buscar el miembro:', error);
        }
    }
//  trwe
    async actualizarMiembroPorId(id, nuevosDatos) {
        try {
            const miembroActualizado = await Miembro.findOneAndUpdate(
                { _id: id },
                nuevosDatos,
                { new: true }
            );
            if (miembroActualizado) {
                console.log('Miembro actualizado con éxito:', miembroActualizado);
            } else {
                console.log('Miembro no encontrado');
            }
        } catch (error) {
            console.error('Error al actualizar el miembro:', error);
        }
    }

    async eliminarMiembroPorId(id) {
        try {
            const miembroEliminado = await Miembro.findOneAndDelete({ _id: id });
            if (miembroEliminado) {
                console.log('Miembro eliminado con éxito:', miembroEliminado);
            } else {
                console.log('Miembro no encontrado');
            }
        } catch (error) {
            console.error('Error al eliminar el miembro:', error);
        }
    }
}

module.exports = new MiembroDao();
