const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_KEY;
require('dotenv').config();

const authToken = async( req, resizeBy, next) =>{
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ error: 'Sem token' });
    }
    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
          return res.status(403).json({ message: 'Token inválido!' });
        }
    
        req.userId = decoded.id; 
        next(); 
      });
    };

module.exports = authToken;