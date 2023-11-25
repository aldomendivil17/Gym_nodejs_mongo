const Inventario = require('../models/inventario');
const InventarioDAO = require('../daos/inventarioDao');

// Funciones del controlador

exports.getAllInventarios = async (req, res) => {
    try {
        const inventarioData = await InventarioDAO.findAllInventarios();
        res.status(200).json(inventarioData);
    } catch (err) {
        res.status(500).json({ error: 'Nos sedd pudieron obtener los inventarios' });
    }
};

exports.getInventarioById = async (req, res) => {
    const inventarioId = req.params.id;

    try {
        const inventario = await InventarioDAO.findInventarioById(inventarioId);

        if (!inventario) {
            return res.status(404).json({ error: 'Inventario no encontrado' });
        }

        res.json(inventario);
    } catch (err) {
        res.status(500).json({ error: 'No se pudo obteners el inventario' });
    }
};

exports.addInventario = async (req, res, next) => {
    try {
        const datosNuevoInventario = new Inventario({
            tipo: req.body.tipo,
            nombre: req.body.nombre,
            marca: req.body.marca,
            costo: req.body.costo,
            cantidad: req.body.cantidad
        });

        const validationError = datosNuevoInventario.validateSync();

        if (validationError) {
            throw new Error(`Información incompleta: ${validationError.message}`);
        }

        await InventarioDAO.addInventario(datosNuevoInventario);

        res.status(201).json(datosNuevoInventario);
    } catch (err) {
        next(err);
    }
};

exports.updateInventario = async (req, res) => {
    const inventarioId = req.params.id;

    try {
        const filter = { _id: inventarioId };
        const update = {
            $set: req.body,
        };

        await InventarioDAO.updateInventario(filter, update);

        res.json({ message: 'Inventario actualizado exitosamente' });

    } catch (err) {
        res.status(500).json({ error: 'No se pudo actualizar el Inventario' });
    }
};

exports.deleteInventario = async (req, res) => {
    const inventarioId = req.params.id;

    try {

        await InventarioDAO.deleteInventarioById(inventarioId);

        res.json({ message: 'Inventario eliminado exitosamente' });
    } catch (err) {
        res.status(500).json({ error: 'No se pudo eliminar el Inventario' });
    }
}
