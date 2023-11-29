const { Router } = require("express");
const { signup, get, signin } = require("../controller/authController");

const router = Router();

router.route("/signup").post(signup);
router.route("/signin").post(signin);
router.route("/").get(get);

module.exports = router;
//mvc model view controller - architector
