const httpStatusResponse = require('../../../commons/http-response/http-status-response');
const tb_USER = require("../../database/model/user-model/user-registration-model");

const deleteUserById = async (id) => {
  try {
      const userDeleted = await tb_USER.destroy({
        where: { 
          id: id
        }
      });

      return res.status(204).message("User deleted with successfully");
  } catch (error) {
    const finalError = await httpStatusResponse(
        500,
        error.message,
        "Address update repository"
      );
      return res.send(finalError);
  }
}

module.exports = deleteUserById;