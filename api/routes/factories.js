var express = require("express");
var router = express.Router();
const controllers = require("../controllers/factories");

router.get("/:id", controllers.getById);

router.get("/", controllers.get);

router.post("/", controllers.create);

router.put("/:id", controllers.update);

router.delete("/:id", controllers.deleteById);

module.exports = router;
