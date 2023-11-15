const Clase = require('../models/clase');

class ClaseDao {

  async findAllClases() {
    return await Clase.find({});
  }

  async findClaseById(id) {
    return await Clase.findOne({_id: id });
}

async addClase(clase) {
    await clase.save();
    console.log('Clase agregada exitosamente');
}

async updateClase(filter, update) {
    await Clase.updateOne(filter, update);
}

async deleteClaseById(id) {
    await  Clase.deleteOne({_id: id });
}
}

module.exports = new ClaseDao();

