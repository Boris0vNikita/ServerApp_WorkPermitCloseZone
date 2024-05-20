const Router = require("express");
const router = new Router();

router.get("/", require("../Controllers/equipment.controller").getAll);
router.get("/:id", require("../Controllers/equipment.controller").getOne);

module.exports = router;
