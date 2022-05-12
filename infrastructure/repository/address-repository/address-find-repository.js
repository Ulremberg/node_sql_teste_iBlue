const httpStatusResponse = require('../../../commons/http-response/http-status-response');
const tb_ADDRESS = require("../../database/model/address-model/address-registration-model");

const findAddressById = async (req, res) => {
  try {
    const id = req.params.id;

    const address = await tb_ADDRESS.findAll({
      where: {
        id: id,
      }
    });

    return res.status(200).json({address}).message("Address finded with successfully");
  } catch (error) {
    const finalError = await httpStatusResponse(
        500,
        error.message,
        "Address update repository"
      );
      return res.send(finalError);
  }
}

module.exports = findAddressById;