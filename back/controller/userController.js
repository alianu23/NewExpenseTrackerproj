const { sql } = require("../config/pgDb");

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  await sql`INSERT INTO users( name, email, password) VALUES(${name}, ${email}, ${password})`;
  res.status(201).json({ message: "success" });
};

module.exports = { signup };
