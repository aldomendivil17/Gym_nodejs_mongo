const Membresia = require('../models/membresia');
const MembresiaDAO = require('../daos/membresiaDao');

// Funciones del controlador
exports.getAllMembresias = async (req, res) => {
  try {
    const membresiaData = await MembresiaDAO.findAllMembresias();
    res.json(membresiaData);
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

    res.json(membresia);
  } catch (err) {
    res.status(500).json({ error: 'No se pudo obtener la membresía' });
  }
};

exports.addMembresia = async (req, res) => {
  try {
    const datosNuevaMembresia = new Membresia({
      tipo: req.body.tipo,
      costo: req.body.costo,
      fecha_renovacion: req.body.fecha_renovacion,
    });

    await MembresiaDAO.addMembresia(datosNuevaMembresia);

    res.json(datosNuevaMembresia);
  } catch (err) {
    res.status(500).json({ error: 'No se pudo agregar la membresía' });
  }
};

exports.updateMembresia = async (req, res) => {
  const membresiaId = req.params.id;

  try {
    const filter = { _id: membresiaId };
    const update = {
      $set: req.body,
    };

    await MembresiaDAO.updateMembresia(filter, update);

    res.json({ message: 'Membresía actualizada exitosamente' });

  } catch (err) {
    res.status(500).json({ error: 'No se pudo actualizar la membresía' });
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


