const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

module.exports = function(req, res, next){
  const header = req.header('Authorization');
  if(!header) return res.status(401).json({msg:'No token, authorization denied'});
  const token = header.replace('Bearer ', '');
  try{
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    req.user = decoded.user;
    next();
  }catch(err){
    res.status(401).json({msg:'Token is not valid'});
  }
}
