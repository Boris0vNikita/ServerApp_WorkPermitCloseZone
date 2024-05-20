const Router = require("express");
const router = new Router();

router.get("/", require("../Controllers/dosWorkPermit.controller").getAll);
router.get("/:id", require("../Controllers/dosWorkPermit.controller").getOne);
router.patch("/update", require("../Controllers/dosWorkPermit.controller").patchStatus);
router.patch("/patch", require("../Controllers/dosWorkPermit.controller").patchPreparation);
router.post("/post", require("../Controllers/dosWorkPermit.controller").postDosList);

module.exports = router;
