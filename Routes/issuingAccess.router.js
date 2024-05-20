const Router = require("express");
const router = new Router();

router.get("/all", require("../Controllers/IssuingAccess.controller").getAll);
router.get("/totalPage", require("../Controllers/IssuingAccess.controller").getPage);
router.post("/add", require("../Controllers/IssuingAccess.controller").postAdd);
router.patch("/update", require("../Controllers/IssuingAccess.controller").updateIssuing);
router.get("/trues", require("../Controllers/IssuingAccess.controller").getTrueAll);
router.patch("/delete", require("../Controllers/IssuingAccess.controller").deleteIssuing);

module.exports = router;
