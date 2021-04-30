const jwt = require("jsonwebtoken");
require('dotenv').config()

module.exports = function (req, res, next) {
  var token = req.headers.cookie 
  token = token.split('=')
  token = (token[token.length-2]).slice(11,300)
  if (!token) return res.status(400).send("Access Denied!, no token entered");

  try { 
    const verified = jwt.verify(token, process.env.jwtSecret);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send({ error: "auth failed, check auth-token222" });
  }
};