const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config();

// Middleware para verificar el token en rutas protegidas
const verifyToken = (req, res, next) => {
  const token = req.header('Authorization');
  console.log(token )
  // if (!token) {
  //   console.log(token)
  //   return res.status(401).json({ error: 'Token no proporcionado' });
  //   return res.status(401).redirect('/login');

  // }

  try {
    // Verifica y decodifica el token JWT utilizando la clave secreta
    const secretKey = process.env.SECRET_KEY; // Obtén la clave secreta de las variables de entorno
    const tokenWithoutBearer = token.split(" ")[1]; // Extraer el token sin "Bearer"
    const decoded = jwt.verify(tokenWithoutBearer, secretKey);

    // Puedes acceder a los datos del token, por ejemplo, el ID de usuario
    req.userId = decoded.userId;
    console.log("paso por protected correctamente")
    next();
  } catch (error) {
    // res.status(401).json({ error: 'Token inválido' });
    return res.status(401).redirect('/login');
  }
};

module.exports = verifyToken;
