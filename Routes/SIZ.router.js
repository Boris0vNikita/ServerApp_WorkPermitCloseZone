const Router = require("express");
const router = new Router();

router.get("/", require("../Controllers/SIZ.controller").getAll);
router.get("/:label", require("../Controllers/SIZ.controller").getOne);

module.exports = router;
