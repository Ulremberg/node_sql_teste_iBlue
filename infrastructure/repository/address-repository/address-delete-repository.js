const httpStatusResponse = require('../../../commons/http-response/http-status-response');
const tb_ADDRESS = require("../../database/model/address-model/address-registration-model");

const deleteAdressById = async (req,res) => {    
  try {
      const id = req.params.id;
      const addressDeleted = await tb_ADDRESS.destroy({
        where: { 
          id: id
        }
      });

      return res.status(204).message("Address deleted with successfully");
  } catch (error) {
    const finalError = await httpStatusResponse(
        500,
        error.message,
        "Address update repository"
      );
      return res.send(finalError);
  }
}

module.exports = deleteAdressById;