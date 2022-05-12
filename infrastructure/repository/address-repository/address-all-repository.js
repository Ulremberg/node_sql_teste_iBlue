const httpStatusResponse = require('../../../commons/http-response/http-status-response');
const tb_ADDRESS = require("../../database/model/address-model/address-registration-model");

const allAddresses = async (req,res) => {
  try {
    const addresses = await tb_ADDRESS.findAll();

    return res.status(200).json({addresses}).message("Address finded with successfully");
  } catch (error) {
    const finalError = await httpStatusResponse(
        500,
        error.message,
        "Address update repository"
      );
      return res.send(finalError);
  }
}

module.exports = allAddresses;