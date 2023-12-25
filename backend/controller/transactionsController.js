const { sql } = require("../config/pgDb");

const getAllTransaction = async (req, res) => {
  const { userId } = req.params;
  console.log("userId", userId);
  try {
    const transactions =
      await sql`SELECT tr.name, tr.amount, tr.created_at,tr.id, tr.transaction_type, ct.category_img, ct.category_color FROM transactions tr INNER JOIN category ct ON tr.category_id=ct.id WHERE tr.user_id=${userId} ORDER BY created_at DESC`;
    // console.log("TRANSACTIONS", transactions);
    res.status(200).json({ message: "success", transactions });
  } catch (error) {
    console.log("err", error);
    res.status(500).json({ message: "failed" });
  }
};

const getExpSum = async (req, res) => {
  const { userId } = req.params;
  console.log("expUser", userId);
  try {
    const expSum =
      await sql`SELECT SUM(amount) FROM transactions WHERE user_id = ${userId} AND transaction_type = 'EXP'`;
    console.log("EXP", expSum[0]);
    res.status(200).json({ message: "success", data: expSum[0] });
  } catch (error) {
    res.status(500).json({ message: "failed" });
  }
};

const getIncSum = async (req, res) => {
  const { userId } = req.params;
  console.log("incUser", userId);
  try {
    const incSum =
      await sql`SELECT SUM(amount) FROM transactions WHERE user_id = ${userId} AND transaction_type = 'INC'`;
    console.log("inc", incSum[0]);
    res.status(200).json({ message: "success", data: incSum[0] });
  } catch (error) {
    res.status(500).json({ message: "failed" });
  }
};

const barTrans = async (req, res) => {
  const { userId } = req.params;
  try {
    const data =
      await sql`SELECT SUM(amount), name FROM transactions user_id = ${userId}`;
  } catch (error) {}
};

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
  getExpSum,
  getIncSum,
};
