const express = require('express');
const allUsers = require('../../infrastructure/repository/user-repository/user-all-repository');
const allUserInterface = express.Router();

allUserInterface.get('/user', async (req, res) => {
  const userCreated = await allUsers(req, res);
  
  return res.status(userCreated.statusCode).json(userCreated);
});

module.exports = allUserInterface;