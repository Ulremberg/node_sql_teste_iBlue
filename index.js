const express = require('express')
const dotenv = require('dotenv');
dotenv.config();
const createUserInterface = require('./interfaces/user-interface/user-create-interface');
const userInterface = require('./interfaces/user-interface/user-all-interface');
const updateUserInterface = require('./interfaces/user-interface/user-update-interface');
const createAddressInterface = require('./interfaces/address-interface/address-create-interface');
const addressInterface = require('./interfaces/address-interface/address-all-interface');
const updateAddressInterface = require('./interfaces/address-interface/address-update-interface');

const buildingDataBase = require('./infrastructure/database/building-modeling-structure');
buildingDataBase.sequelize.sync();

const app = express();
app.use(express.json());
app.use(createUserInterface);
app.use(userInterface);
app.use(updateUserInterface);
app.use(addressInterface);
app.use(createAddressInterface);
app.use(updateAddressInterface);


app.listen(3001, ()=>console.log("Server funcionando na porta 3001"));