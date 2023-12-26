const { Router } = require("express");
const {
  category,
  updateCategory,
  deleteCategory,
} = require("../controller/categoryController");
const { getAllCategory } = require("../controller/categoryController");

const router = Router();

router.route("/").post(category);
router.route("/").get(getAllCategory);
router.route("/:id").put(updateCategory);
router.route("/:id").delete(deleteCategory);

module.exports = router;
