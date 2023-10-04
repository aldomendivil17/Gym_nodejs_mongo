const {Inventario} = require('../models/inventario');

class InventarioDao {

    async agregarInventario(nuevoInventario) {
        try{
            await nuevoInventario.save();
            console.log('Inventario guardado con éxito');
        } catch  (error) {
            console.error('Error al guardar el inventario:', error);
        }
    }

    async buscarInventarioPorId(id) {
        try {
            const inventario = await Inventario.findOne({id: id});
            if(inventario) {
                console.log('Inventario encontrado:', inventario);
            } else {
                console.log('Inventario no encontrado');
            }
        } catch (error) {
            console.error('Error al buscar el inventario:', error);
        }
    }

    async actualizarInventarioPorId(id, nuevosDatos) {
        try {
            const inventarioActualizado = await Inventario.findByIdAndUpdate(
                { id: id },
                nuevosDatos,
                { new: true }
            );
            if (inventarioActualizado) {
              console.log('Inventario actualizado con éxito:', inventarioActualizado);
            } else {
              console.log('Inventario no encontrado');
            }
          } catch (error) {
            console.error('Error al actualizar el inventario:', error);
          }
        
    }

    async eliminarInventarioPorId(id) {
        try {
            const inventarioEliminado = await Inventario.findOneAndDelete({ id: id });
            if (inventarioEliminado) {
              console.log('Inventario eliminado con éxito:', inventarioEliminado);
            } else {
              console.log('Inventario no encontrado');
            }
          } catch (error) {
            console.error('Error al eliminar el inventario:', error);
          }
        
    }
}


module.exports = new InventarioDao();