const { Router } = require("express");
const { category } = require("../controller/categoryController");

const router = Router();

router.route("/category").post(category);

module.exports = router;
