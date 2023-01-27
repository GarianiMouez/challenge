const adminServices = require("../services/admins");
const clientServices = require("../services/clients");
const { issueJWT, hashPassword } = require("../utils/crypto");

const adminLogin = (req, res, next) => {
  try {
    const accessToken = issueJWT(req.user.id, { accountType: "ADMIN" });
    res.status(200).json({
      accessToken,
      userData: req.user,
    });
  } catch (error) {
    next(error);
  }
};

const clientLogin = (req, res, next) => {
  try {
    const accessToken = issueJWT(req.user.id, { accountType: "CLIENT" });
    res.status(200).json({
      accessToken,
      userData: req.user,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  adminLogin,
  clientLogin,
};
