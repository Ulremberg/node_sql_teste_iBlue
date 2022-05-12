const sequelize = require('../../../configuration/connect-database');
const { DataTypes } = require('sequelize');

const tb_USER = sequelize.define('user', {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birth_date: {
    type: DataTypes.DATE,
    allowNull: false,
  }
})

module.exports = tb_USER;