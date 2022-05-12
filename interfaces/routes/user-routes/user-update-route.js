const express = require('express');
const controllerUpdateUser = require('../../../controllers/user-controller/user-update-controller');
const userUpdate = require('../../../infrastructure/repository/user-repository/user-update-repository');
const updateUserDomain = require('../../../domains/user-domain/user-update-domain');
const updateUserRoute = express.Router();

updateUserRoute.put('/user/:id', async (req, res) => {

  const isFieldsValid = controllerUpdateUser(req, res);

  if (!isFieldsValid) return isFieldsValid;

  const userExists = await updateUserDomain(req, res);

  if(!userExists) return userExists;

  const userUpdated = await userUpdate(req, res);
  return res.status(userUpdated.statusCode).json(userUpdated);
});

module.exports = updateUserRoute;