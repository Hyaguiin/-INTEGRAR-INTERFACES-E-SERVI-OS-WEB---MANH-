const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_KEY;
require("dotenv").config();

const authToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).json({ error: "Sem token" });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Token inválido ou não fornecido" });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Token inválido!" });
    }

    req.userId = decoded.id;
    next();
  });
};

module.exports = authToken;
