const express = require('express');
const validateFieldsCreateUser = require('../../controllers/user-controller/user-create-controller');
const userCreate = require('../../infrastructure/repository/user-repository/user-registration-repository');
const createUserInterface = express.Router();

createUserInterface.post('/user', async (req, res) => {
  const isFieldsValid = validateFieldsCreateUser(req, res);
  if(!isFieldsValid) return isFieldsValid;

  const userCreated = await userCreate(req, res);
  
  return res.status(userCreated.statusCode).json(userCreated);
});

module.exports = createUserInterface;