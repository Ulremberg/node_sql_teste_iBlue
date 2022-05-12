const express = require('express');
const allUsers = require('../../infrastructure/repository/user-repository/user-all-repository');
const allUserRoute = express.Router();

allUserRoute.get('/user', async (req, res) => {
  const userCreated = await allUsers(req, res);
  
  return res.status(userCreated.statusCode).json(userCreated);
});

module.exports = allUserRoute;