const express = require('express');
const validateFieldsUpdateUser = require('../../controllers/user-controller/user-update-controller');
const userUpdate = require('../../infrastructure/repository/user-repository/user-update-repository');
const updateUserDomain = require('../../domains/user-domain/user-update-domain');
const updateUserInterface = express.Router();

updateUserInterface.put('/user/:id', async (req, res) => {

  const isFieldsValid = validateFieldsUpdateUser(req, res);

  if (!isFieldsValid) return isFieldsValid;

  const alreadyExists = await updateUserDomain(req, res);

  if(!alreadyExists) return alreadyExists;

  const userUpdated = await userUpdate(req, res);
  return res.status(userUpdated.statusCode).json(userUpdated);
});

module.exports = updateUserInterface;