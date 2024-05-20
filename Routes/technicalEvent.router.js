const Router = require("express");
const router = new Router();

router.get("/", require("../Controllers/technicalEvent.controller").getAll);
router.get("/:label", require("../Controllers/technicalEvent.controller").getOne);

module.exports = router;
