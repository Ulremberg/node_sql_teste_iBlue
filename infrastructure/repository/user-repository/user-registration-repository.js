const httpStatusResponse = require("../../../commons/http-response/http-status-response");
const tb_USER = require("../../database/model/user-model/user-registration-model");

const userCreate = async (req, res) => {
  try {
    const { name, birth_date } = req.body;

    await tb_USER.create({ id, name, birth_date });

    // return res.send(req.body).status(200).message("User registered with successfully");
    return res.status(200);
  } catch (error) {
    const finalError = await httpStatusResponse(
      500,
      error.message,
      "Address update repository"
    );
    return res.send(finalError);
  }
};

module.exports = userCreate;
