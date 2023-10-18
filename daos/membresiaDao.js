const Membresia = require('../models/membresia');

class MembresiaDao {
  async findAllMembresias() {
    return await Membresia.find({});
  }

  async findMembresiaById(id) {
    return await Membresia.findOne({ _id: id });
  }

  async addMembresia(membresia) {
    await membresia.save();
  }

  async updateMembresia(filter, update) {
    await Membresia.updateOne(filter, update);
  }

  async deleteMembresiaById(id) {
    await Membresia.deleteOne({ _id: id });
  }
  
}
module.exports = new MembresiaDao();
