const Router = require("express");
const router = new Router();

router.get("/", require("../Controllers/system.controller").getAll);
router.get("/:id", require("../Controllers/system.controller").getOne);

module.exports = router;
