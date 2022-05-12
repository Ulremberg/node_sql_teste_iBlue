const Sequelize = require("sequelize");
const sequelize = require("../configuration/connect-database");

const dataBase = {};
dataBase.Sequelize = Sequelize;
dataBase.sequelize = sequelize;
dataBase.tb_USER= require('./model/user-model/user-registration-model');
dataBase.tb_ADDRESS = require('./model/address-model/address-registration-model');
module.exports = dataBase;
