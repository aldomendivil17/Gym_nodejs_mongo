const Clase = require('../models/clase');
const ClaseDAO = require('../daos/claseDao');

// Funciones del controlador

exports.getAllClases = async (req, res) => {
    try {
        const claseData = await ClaseDAO.findAllClases();
        res.json(claseData);
    } catch (err) {
        res.status(500).json({ error: 'No se pudieron obtener las clases' });
    }
};

exports.getClaseById = async (req, res) => {
    const claseId = req.params.id;
    console.log("Muestra",claseId);

    try {
        const clase = await ClaseDAO.findClaseById(claseId);

        if (!clase) {
            return res.status(404).json({ error: 'Clase no encontrada. ' });
        }

        res.status(200).json(clase);
    } catch (err) {
        res.status(500).json({ error: 'No se pudo obtener la clase dcddddd. '+claseId+''});
    }
};

exports.addClase = async (req, res, next) => {
    try {
        const datosNuevaClase = new Clase({
            id: req.body.id,
            nombre: req.body.nombre,
            horario: req.body.horario,
            costo: req.body.costo,
            capacidad_maxima: req.body.capacidad_maxima,
            entrenadores: req.body.entrenadores,
        });

        const validationError = datosNuevaClase.validateSync();

        if (validationError) {
            throw new Error(`Información incompleta: ${validationError.message}`);
        }

        await ClaseDAO.addClase(datosNuevaClase);

        res.json(datosNuevaClase);
    } catch (err) {
        next(err);
    }
};

exports.updateClase = async (req, res, next) => {
    const claseId = req.params.id;

    try {
        const filter = { _id: claseId };
        const update = {
            $set: req.body,
        };

        if (Object.keys(update.$set).length === 0) {
            throw new Error("No se especificaron campos a actualizar");
        }

        await ClaseDAO.updateClase(filter, update);

        res.json({ message: 'Clase actualizada exitosamente. ' });

    } catch (err) {
        next(err);
    }
};

exports.deleteClase = async (req, res) => {
    const claseId = req.params.id;
    console.log("fsfd",claseId);

    try {

        await ClaseDAO.deleteClaseById(claseId);

        res.json({ message: 'Clase eliminada exitosamente. ' });
    } catch (err) {
        res.status(500).json({ error: 'No se pudo eliminar la clase.' });
    }
}