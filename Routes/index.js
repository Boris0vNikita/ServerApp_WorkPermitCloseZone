const Router = require("express");
const router = new Router();

router.use("/personal", require("./pesonal.router"));
router.use("/status", require("./status.router"));
router.use("/work", require("./work.router"));
router.use("/system", require("./system.router"));
router.use("/equipment", require("./equipment.router"));
router.use("/siz", require("./SIZ.router")); ///dgdrgdr
router.use("/technical", require("./technicalEvent.router"));
router.use("/auth", require("./isAuth.router"));
router.use("/issuing", require("./issuingAccess.router"));
router.use("/dos", require("./dosWorkPermit.router"));

module.exports = router;
