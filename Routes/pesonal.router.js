const Router = require("express");
const router = new Router();

router.get("/", require("../Controllers/personal.controller").getAll);

router.get("/fio", require("../Controllers/personal.controller").getFioAll);

module.exports = router;
