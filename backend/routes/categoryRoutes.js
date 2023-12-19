const { Router } = require("express");
const { category } = require("../controller/categoryController");
const { getAllCategory } = require("../controller/categoryController");

const router = Router();

router.route("/").post(category);
router.route("/").get(getAllCategory);

module.exports = router;
