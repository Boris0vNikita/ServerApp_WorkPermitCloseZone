const Router = require("express");
const router = new Router();

router.get("/", require("../Controllers/status.controller").getAll);
router.get("/:name", require("../Controllers/status.controller").getOne);

module.exports = router;
