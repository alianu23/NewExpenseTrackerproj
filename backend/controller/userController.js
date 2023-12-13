const { sql } = require("../config/pgDb");

const updateUser = async (req, res) => {
  try {
    const { currency_type, balance, phonenumber } = req.body;
    const { userId } = req.params;
    console.log("SS", currency_type, balance, userId);
    console.log("body", req.body);
    const data =
      await sql`UPDATE users SET currency_type=${currency_type}, balance=${balance}, phonenumber=${phonenumber} WHERE id=${userId} RETURNING *`;

    const { password, ...user } = data[0];
    res.status(200).json({ message: "success", user });
  } catch (error) {
    console.log("ERR", error);
    res.status(500).json({ message: "failed" });
  }
};

module.exports = { updateUser };
// MVC Model View Controller -architecture
