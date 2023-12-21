const { Router } = require("express");
const {
  createTransactions,
  deleteTransaction,
  updateTransaction,
  getAllTransaction,
  getExpSum,
  getIncSum,
} = require("../controller/transactionsController");

const router = Router();

router.route("/").post(createTransactions);
router.route("/:userId").get(getAllTransaction);
router.route("/:id").delete(deleteTransaction);
router.route("/:id").put(updateTransaction);
router.route("/expsum/:userId").get(getExpSum);
router.route("/incsum/:userId").get(getIncSum);

module.exports = router;
