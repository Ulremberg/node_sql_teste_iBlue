const httpStatusResponse = require("../../../commons/http-response/http-status-response");
const tb_USER = require("../../database/model/user-model/user-registration-model");

const userUpdate = async (req, res) => {
  try {
    const { name, birth_Date } = req.body;
    const id = req.params.id;

    await tb_USER.update(
      {
        id,
        name,
        birth_Date,
      },
      {
        where: {
          id: id,
        },
      }
    );

    return res.status(200).message("User updated with successfully");
  } catch (error) {
    const finalError = await httpStatusResponse(
      500,
      error.message,
      "Address update repository"
    );
    return res.send(finalError);
  }
};

module.exports = userUpdate;
