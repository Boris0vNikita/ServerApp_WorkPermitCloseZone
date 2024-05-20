const Router = require("express");
const router = new Router();

router.get("/", require("../Controllers/work.controller").getAll);
router.get("/:id", require("../Controllers/work.controller").getOne);

module.exports = router;
