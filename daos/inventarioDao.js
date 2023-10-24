const Inventario = require('../models/inventario');

class InventarioDao {
    
    async findAllInventarios() {
        return await Inventario.find({});
    }

    async findInventarioById(id) {
        return await Inventario.findOne({ _id: id });
    }

    async addInventario(inventario) {
        await inventario.save();
    }

    async updateInventario(filter, update) {
        await Inventario.updateOne(filter, update);
    }

    async deleteInventarioById(id) {
        await  Inventario.deleteOne({ _id: id });
    }

}

module.exports = new InventarioDao();
