const tb_USER= require('./model/user-model/user-registration-model');
const tb_ADDRESS = require('./model/address-model/address-registration-model');

const databaseInitialize = () => {
    tb_USER.sync();
  tb_ADDRESS.sync();
}

module.exports = databaseInitialize;