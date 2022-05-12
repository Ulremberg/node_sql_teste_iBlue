const httpStatusResponse = require('../../../commons/http-response/http-status-response');
const tb_ADDRESS = require("../../database/model/address-model/address-registration-model");

const createAddress = async (req, res) => {
  try {
    const { address, address_status, userId } = req.body;

    await tb_ADDRESS.create({
      id,
      address,
      address_status,
      userId
    });

    return res.status(200).message("Address registered with successfully");

  } catch (error) {
    const finalError = await httpStatusResponse(
        500,
        error.message,
        "Address registration repository"
      );
      return res.send(finalError);
  }
}

module.exports = createAddress;