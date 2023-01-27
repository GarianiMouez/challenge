var express = require("express");
var router = express.Router();
const controllers = require("../controllers/auth");
const passport = require("passport");

router.post(
  "/admin-login",
  (req, res, next) => {
    req.accountType = "ADMIN";
    req.body.user = req.body.username;
    next();
  },
  passport.authenticate("local", { session: false }),
  controllers.adminLogin
);

router.post(
  "/login",
  (req, res, next) => {
    req.accountType = "CLIENT";
    req.body.user = req.body.email;
    next();
  },
  passport.authenticate("local", { session: false }),
  controllers.clientLogin
);

module.exports = router;
