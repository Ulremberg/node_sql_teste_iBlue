const httpStatusResponse = require("../../../commons/http-response/http-status-response");
const tb_ADDRESS = require("../../database/model/address-model/address-registration-model");

const addressUpdate = async (req, res) => {
  try {
    const { address, address_status, userId } = req.body;
    const id = req.params.id;

    await tb_ADDRESS.update(
      {
        id,
        address,
        address_status,
        userId,
      },
      {
        where: {
          id: id,
        },
      }
    );

    return res.status(200).message("Address updated with successfully");
  } catch (error) {
    const finalError = await httpStatusResponse(
      500,
      error.message,
      "Address update repository"
    );
    return res.send(finalError);
  }
};

module.exports = addressUpdate;
