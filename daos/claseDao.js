const Clase = require('../models/clase');

class ClaseDao {
    async agregarClase(nuevaClase) {
        try {
          await nuevaClase.save();
          console.log('Clase guardada con éxito');
        } catch (error) {
          console.error('Error al guardar la clase:', error);
        }
      }
    
      async buscarClasePorId(id) {
        try {
          const clase = await Clase.findOne({ id: id });
          if (clase) {
            console.log('Clase encontrada:', clase);
          } else {
            console.log('Clase no encontrada');
          }
        } catch (error) {
          console.error('Error al buscar la clase:', error);
        }
      }
    
      async actualizarClasePorId(id, nuevosDatos) {
        try {
          const claseActualizada = await Clase.findOneAndUpdate(
            { id: id },
            nuevosDatos,
            { new: true }
          );
          if (claseActualizada) {
            console.log('Clase actualizada con éxito:', claseActualizada);
          } else {
            console.log('Clase no encontrada');
          }
        } catch (error) {
          console.error('Error al actualizar la clase:', error);
        }
      }
    
      async eliminarClasePorId(id) {
        try {
          const claseEliminada = await Clase.findOneAndDelete({ id: id });
          if (claseEliminada) {
            console.log('Clase eliminada con éxito:', claseEliminada);
          } else {
            console.log('Clase no encontrada');
          }
        } catch (error) {
          console.error('Error al eliminar la clase:', error);
        }
      }
    }
    
    module.exports = new ClaseDao();
    
