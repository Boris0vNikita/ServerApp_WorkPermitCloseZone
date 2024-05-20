const Router = require("express");
const authMiddleware = require("../middlewares/auth");
const router = new Router();

router.post("/registration", require("../Controllers/isAuth.controller").registration);
router.post("/login", require("../Controllers/isAuth.controller").login);
router.get("/chek", authMiddleware, require("../Controllers/isAuth.controller").ChekToken);

module.exports = router;
