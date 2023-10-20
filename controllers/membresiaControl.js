const Membresia = require('../models/membresia');
const MembresiaDAO = require('../daos/membresiaDao');

// Funciones del controlador
exports.getAllMembresias = async (req, res) => {
  try {
    const membresiaData = await MembresiaDAO.findAllMembresias();
    res.status(200).json(membresiaData);
  } catch (err) {
    res.status(500).json({ error: 'No se pudieron obtener las membresías' });
  }
};

exports.getMembresiaById = async (req, res) => {
  const membresiaId = req.params.id;

  try {
    const membresia = await MembresiaDAO.findMembresiaById(membresiaId);

    if (!membresia) {
      return res.status(404).json({ error: 'Membresia no encontrada' });
    }

    res.status(200).json(membresia);
  } catch (err) {
    res.status(500).json({ error: 'No se pudo obtener la membresía' });
  }
};

exports.addMembresia = async (req, res, next) => {
  try {
    const datosNuevaMembresia = new Membresia({
      tipo: req.body.tipo,
      costo: req.body.costo,
      fecha_renovacion: req.body.fecha_renovacion,
    });

    const validationError = datosNuevaMembresia.validateSync();

    if (validationError) {
      throw new Error(`Información incompleta: ${validationError.message}`);
    }
    await MembresiaDAO.addMembresia(datosNuevaMembresia);

    res.status(201).json(datosNuevaMembresia);
  } catch (err) {
    next(err);
  }
};

exports.updateMembresia = async (req, res, next) => {
  const membresiaId = req.params.id;

  try {
    const filter = { _id: membresiaId };
    const update = {
      $set: req.body,
    };

    if (Object.keys(update.$set).length === 0) {
      throw new Error("No se especificaron campos a actualizar");
    }

    await MembresiaDAO.updateMembresia(filter, update);

    res.status(200).json({ message: 'Membresía actualizada exitosamente' });

  } catch (err) {
    next(err);
  }
};

exports.deleteMembresia = async (req, res) => {
  const membresiaId = req.params.id;

  try {

    await MembresiaDAO.deleteMembresiaById(membresiaId);

    res.json({ message: 'Membresía eliminada exitosamente' });
  } catch (err) {
    res.status(500).json({ error: 'No se pudo eliminar la membresía' });
  }
}


