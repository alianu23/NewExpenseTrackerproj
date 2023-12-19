const { Router } = require("express");
const {
  createTransactions,
  deleteTransaction,
  updateTransaction,
  getAllTransaction,
} = require("../controller/transactionsController");

const router = Router();

router.route("/").post(createTransactions).get(getAllTransaction);
router.route("/:id").delete(deleteTransaction);
router.route("/:id").put(updateTransaction);

module.exports = router;
