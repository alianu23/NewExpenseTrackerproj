const { Router } = require("express");
const {
  transactions,
  deleteTransaction,
  updateTransaction,
} = require("../controller/transactionsController");

const router = Router();

router.route("/transactions").post(transactions);
router.route("/transactions/:id").delete(deleteTransaction);
router.route("/transactions/:id").put(updateTransaction);

module.exports = router;
