const { sql } = require("../config/pgDb");

const getAllTransaction = async (req, res) => {
  const { userId } = req.params;
  // console.log("userId", userId);
  try {
    const transactions =
      await sql`SELECT tr.name, tr.amount, tr.updated_at,tr.id, tr.transaction_type, ct.category_img, ct.category_color FROM transactions tr INNER JOIN category ct ON tr.category_id=ct.id WHERE tr.user_id=${userId} ORDER BY updated_at DESC`;
    // console.log("TRANSACTIONS", transactions);
    res.status(200).json({ message: "success", transactions });
  } catch (error) {
    // console.log("err", error);
    res.status(500).json({ message: "failed" });
  }
};

const getSum = async (req, res) => {
  const { userId } = req.params;
  // console.log("expUser", userId);
  try {
    const getSum =
      await sql`SELECT transaction_type, SUM(amount) FROM transactions WHERE user_id = ${userId} GROUP BY transaction_type`;
    const exp = getSum.filter((el) => el.transaction_type === "EXP")[0].sum;
    const inc = getSum.filter((el) => el.transaction_type === "INC")[0].sum;
    res.status(200).json({ message: "success", data: { exp, inc } });
  } catch (error) {
    res.status(500).json({ message: "failed" });
  }
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
  // console.log(req.body);
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

const barChartData = async (req, res) => {
  try {
    const { userId } = req.params;
    const barChart = await sql`
      SELECT 
        EXTRACT(MONTH FROM updated_at) AS month,
        TO_CHAR(updated_at, 'Month') AS month_name,
        SUM(CASE WHEN transaction_type = 'INC' THEN amount ELSE 0 END) AS income,
        SUM(CASE WHEN transaction_type = 'EXP' THEN amount ELSE 0 END) AS expense
      FROM transactions
      WHERE user_id=${userId}
      GROUP BY month, month_name
      ORDER BY month;
      `;
    const labels = barChart.map((e) => e.month_name);
    const incomeData = barChart.map((e) => e.income);
    const expenseData = barChart.map((e) => e.expense);
    res.status(201).json({
      message: "success",
      barChart: { labels, incomeData, expenseData },
    });
  } catch (error) {
    console.log(error);
  }
};

const doughnutData = async (req, res) => {
  try {
    const { userId } = req.params;
    const data =
      await sql`SELECT ct.category_img ,SUM(amount),ct.category_color FROM transactions as tr INNER JOIN category as ct ON tr.category_id=ct.id WHERE tr.user_id=${userId} GROUP BY tr.category_id, ct.category_img, ct.category_color`;
    res.status(201).json({ message: "success", data });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createTransactions,
  deleteTransaction,
  updateTransaction,
  getAllTransaction,
  getSum,
  barChartData,
  doughnutData,
};
