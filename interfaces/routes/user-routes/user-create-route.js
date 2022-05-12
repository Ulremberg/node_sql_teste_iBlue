const express = require('express');
const controllerUpdateUser = require('../../controllers/user-controller/user-create-controller');
const userCreate = require('../../infrastructure/repository/user-repository/user-registration-repository');
const createUserRoute = express.Router();

createUserRoute.post('/user', async (req, res) => {
  const isFieldsValid = controllerUpdateUser(req, res);
  if(!isFieldsValid) return isFieldsValid;

  const userCreated = await userCreate(req, res);
  
  return res.status(userCreated.statusCode).json(userCreated);
});

module.exports = createUserRoute;