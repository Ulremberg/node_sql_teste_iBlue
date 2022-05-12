const express = require('express');
const createAddressRoute = express.Router();
const controllerCreateAddress = require('../../controllers/address-controller/address-create-controller');
const createAddress = require('../../infrastructure/repository/address-repository/address-registration-repository');

createAddressRoute.post('/address', async (request, response) => {
  const isFieldsValid = controllerCreateAddress(request, response);

  if(isFieldsValid != true) return isFieldsValid;

  const addressCreated = await createAddress(request, response);

  return response.status(addressCreated.statusCode).json(addressCreated);
})


module.exports = createAddressRoute;