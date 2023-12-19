const { sql } = require("../config/pgDb");

const getAllTransaction = async (req, res) => {};

const createTransactions = async (req, res) => {
  console.log("USER", req.body);
  try {
    const {
      name,
      description,
      amount,
      transaction_type,
      user_id,
      category_id,
      updated_at,
    } = req.body;

    const data =
      await sql`INSERT INTO transactions(user_id, category_id, name, description, amount, transaction_type, updated_at) VALUES(${user_id},${category_id},${name}, ${description} , ${amount} , ${transaction_type},${updated_at}) RETURNING *`;
    res
      .status(201)
      .json({ message: "transaction added", transaction: data[0] });
  } catch (error) {
    res.status(500).json({ message: `${error}-iim aldaa garlaa` });
  }
};
const deleteTransaction = async (req, res) => {
  console.log(req.body);
  try {
    const { id } = req.params;
    await sql`DELETE FROM transactions WHERE id=${id}`;
    res.status(201).json({ message: "transaction deleted" });
  } catch (error) {
    res.status(500).json({ message: `${error}-iim aldaa garlaa` });
  }
};
const updateTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, amount, transaction_type } = req.body;
    await sql`UPDATE transactions SET name=${name}, description=${description}, amount=${amount}, transaction_type=${transaction_type} WHERE id=${id}`;
    res.status(201).json({ message: "transaction updated" });
  } catch (error) {
    res.status(500).json({ message: `${error}-iim aldaa garlaa` });
  }
};

module.exports = {
  createTransactions,
  deleteTransaction,
  updateTransaction,
  getAllTransaction,
};
