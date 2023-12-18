const { sql } = require("../config/pgDb");

const updateRecord = async (req, res) => {
  try {
    const { transaction_type, balance, date, time, payee, description } =
      req.body;
    const { userId } = req.params;
    console.log("body", req.body);
    const data =
      await sql`UPDATE transactions SET transaction_type=${transaction_type}, balance=${balance},date=${date}, time=${time}, payee=${payee}, description=${description} WHERE id=${userId} RETURNING *`;

    const { password, ...user } = data[0];
    res.status(200).json({ message: "success", user });
  } catch (error) {
    console.log("ERR", error);
    res.status(500).json({ message: "failed" });
  }
};

module.exports = { updateRecord };
