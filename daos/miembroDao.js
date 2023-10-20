const Miembro = require('../models/miembro');

class MiembroDao {
    
    async findAllMiembros() {
        return await Miembro.find({});
    }

    async findMiembroById(id) {
        return await Miembro.findOne({ _id: id });
    }

    async addMiembro(miembro) {
        await miembro.save();
    }

    async updateMiembro(filter, update) {
        await Miembro.updateOne(filter, update);
    }

    async deleteMiembroById(id) {
        await  Miembro.deleteOne({ _id: id });
    }

}

module.exports = new MiembroDao();
