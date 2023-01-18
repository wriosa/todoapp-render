const jwt = require("jsonwebtoken");
require('dotenv').config()

const authMiddleware = (req, res, next) => {
  let { authorization: token } = req.headers;
  token = token.replace("Bearer ", "");
  console.log(token);
  jwt.verify(
    token,
    process.env.JWT_SECRET,
    { algorithms: "HS512"},
    (err, decoded) => {
      if (err) {
        res.status(400).json({
          error: "invalid token",
          message: "El token no es valido, envia un token valido",
        });
      } else {
        console.log(decoded)
        next();
      }
    }
  );
  // console.log(decoded);
  // next();
};

module.exports = authMiddleware;

//vamos a validar el token

//si el token es valido lo dejamos pasar
//si es invalido respondemos anda pasha
