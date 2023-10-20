const MiembroDAO = require('../daos/miembroDao');

// Funciones del controlador

exports.getAllMiembros = async (req, res) => {
    try {
        const miembroData = await MiembroDAO.findAllMiembros();
        res.json(miembroData);
    } catch (err) {
        res.status(500).json({ error: 'No se pudieron obtener los miembros' });
    }
};

exports.getMiembroById = async (req, res) => {
    const miembroId = req.params.id;

    try {
        const miembro = await MiembroDAO.findMiembroById(miembroId);

        if (!miembro) {
            return res.status(404).json({ error: 'Miembro no encontrado' });
        }

        res.json(miembro);
    } catch (err) {
        res.status(500).json({ error: 'No se pudo obtener el miembro' });
    }
};

exports.addMiembro = async (req, res) => {
    try {
        const datosNuevoMiembro = new Miembro({
            nombre: req.body.nombre,
            apellido_paterno: req.body.apellido_paterno,
            apellido_materno: req.body.apellido_materno,
            fecha_nacimiento: req.body.fecha_nacimiento,
            numero_celular: req.body.numero_celular,
            id_membresia: req.body.id_membresia,
            clases_inscritas: req.body.clases_inscritas
        });

        await MiembroDAO.addMiembro(datosNuevoMiembro);

        res.json(datosNuevoMiembro);
    } catch (err) {
        res.status(500).json({ error: 'No se pudo agregar el miembro' });
    }
};

exports.updateMiembro = async (req, res) => {
    const miembroId = req.params.id;

    try {
        const filter = { _id: miembroId };
        const update = {
            $set: req.body,
        };

        await MiembroDAO.updateMiembro(filter, update);

        res.json({ message: 'Miembro actualizado exitosamente' });

    } catch (err) {
        res.status(500).json({ error: 'No se pudo actualizar el miembro' });
    }
};

exports.deleteMiembro = async (req, res) => {
    const miembroId = req.params.id;

    try {

        await MiembroDAO.deleteMiembroById(miembroId);

        res.json({ message: 'Miembro eliminado exitosamente' });
    } catch (err) {
        res.status(500).json({ error: 'No se pudo eliminar el miembro' });
    }
}
