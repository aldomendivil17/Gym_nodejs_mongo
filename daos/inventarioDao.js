const inventario = require('../models/inventario');

class InventarioDao {
  async findAllInventarios() {
    return await inventario.find({});
  }

  async findInventarioById(id) {
    return await inventario.findOne({ _id: id });
  }

  async addInventario(inventario) {
    await inventario.save();
    console.log('Inventario agregado exitosamente');
  }

  async updateInventario(filter, update) {
    await inventario.updateOne(filter, update);
  }

  async deleteInventarioById(id) {
    await inventario.deleteOne({ _id: id });
  }
}

module.exports = new InventarioDao();