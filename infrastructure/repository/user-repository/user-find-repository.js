const httpStatusResponse = require('../../../commons/http-response/http-status-response');
const tb_USER = require("../../database/model/user-model/user-registration-model");

const findUserById = async (req, res) => {
  try {
    const id = req.params.id;

    const user = await tb_USER.findAll({
      where: {
        id: id,
      }
    });

    return res.status(200).json({user}).message("User finded with successfully");
  } catch (error) {
    const finalError = await httpStatusResponse(
        500,
        error.message,
        "Address update repository"
      );
      return res.send(finalError);
    }
}

module.exports = findUserById;