const mongoose = require('mongoose');

async function conectarBaseDeDatos() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/gimnasio', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conexión a la base de datos exitosa");
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }
}

module.exports = conectarBaseDeDatos;
