const sequelize = require('../../../configuration/connect-database');
const tb_USER = require('../user-model/user-registration-model');
const { DataTypes } = require('sequelize');

const tb_ADDRESS = sequelize.define('address', {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address_status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

tb_USER.hasMany(tb_ADDRESS);

module.exports = tb_ADDRESS;