const { Router } = require("express");
const {
  createTransactions,
  deleteTransaction,
  updateTransaction,
  getAllTransaction,
  getSum,
} = require("../controller/transactionsController");

const router = Router();

router.route("/").post(createTransactions);
router.route("/:userId").get(getAllTransaction);
router.route("/:id").delete(deleteTransaction);
router.route("/:id").put(updateTransaction);
router.route("/sum/:userId").get(getSum);

module.exports = router;
