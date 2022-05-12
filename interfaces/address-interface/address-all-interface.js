const express = require('express');
const allAddresses = require('../../infrastructure/repository/address-repository/address-all-repository');
const allAddressInterface = express.Router();

allAddressInterface.get('/address', async (req, res) => {
  const allAddresses = await allAddresses(req, res);
  
  return res.status(allAddresses.statusCode).json(allAddresses);
});

module.exports = allAddressInterface;