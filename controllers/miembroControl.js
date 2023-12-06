const Miembro = require('../models/miembro');
const MiembroDAO = require('../daos/miembroDao');
const Membresia = require('../models/membresia');

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

exports.addMiembro = async (req, res, next) => {
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

        const validationError = datosNuevoMiembro.validateSync();

        if (validationError) {
            throw new Error(`Información incompleta: ${validationError.message}`);
        }

        await MiembroDAO.addMiembro(datosNuevoMiembro);

        res.status(201).json(datosNuevoMiembro);
    } catch (err) {
        next(err);
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

exports.getTotalMiembros = async (req, res) => {
    try {
        const totalMiembros = await MiembroDAO.countMiembros();
        res.json({ totalMiembros });
    } catch (err) {
        res.status(500).json({ error: 'No se pudo obtener el total de miembros.' });
    }
};

exports.getGananciasDelMes = async (req, res) => {
    try {
        // Obtén el primer día del mes actual
        const fechaInicioMes = new Date(new Date().getFullYear(), new Date().getMonth(), 1);

        // Obtén todos los miembros con sus membresías asociadas
        const miembros = await MiembroDAO.findAllMiembros();

        // Filtra los miembros con membresías renovadas durante el mes actual
        const miembrosConMembresiaDelMes = miembros.filter((miembro) => {
            return miembro.id_membresia && miembro.id_membresia.fecha_renovacion >= fechaInicioMes;
        });

        // Calcula las ganancias sumando los costos de las membresías de los miembros filtrados
        const gananciasDelMes = miembrosConMembresiaDelMes.reduce((totalGanancias, miembro) => {
            return totalGanancias + miembro.id_membresia.costo;
        }, 0); 

        res.json({ gananciasDelMes });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'No se pudo obtener las ganancias del mes' });
    }
};
