const findUserById = require('../../infrastructure/repository/user-repository/user-find-repository');

const updateUserDomain = async (req, res) => {
  const alreadyExists = await findUserById(req, res);

  if (alreadyExists.statusCode != 200) return res.status(alreadyExists.statusCode).json(alreadyExists);

  return true;
}

module.exports = updateUserDomain;