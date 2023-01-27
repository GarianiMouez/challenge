var express = require("express");
var router = express.Router();
const path = require("path");

router.use("/static", express.static(path.join(process.cwd(), "data")));
router.use("/auth", require("./auth"));
router.use("/admins", require("./admins"));
router.use("/clients", require("./clients"));
router.use("/factories", require("./factories"));
router.use("/machines", require("./machines"));

module.exports = router;
