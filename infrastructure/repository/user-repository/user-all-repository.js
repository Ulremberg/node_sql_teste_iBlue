const httpStatusResponse = require("../../../commons/http-response/http-status-response");
const tb_USER = require("../../database/model/user-model/user-registration-model");

const allUsers = async (req, res) => {
  try {
    const users = await tb_USER.findAll();

    return res.status(200).json({ users });
  } catch (error) {
    const finalError = await httpStatusResponse(
      500,
      error.message,
      "Address update repository"
    );
    return res.send(finalError);
  }
};

module.exports = allUsers;
