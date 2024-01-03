const { sql } = require("../config/pgDb");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const findUser = await sql`SELECT email FROM users WHERE email=${email}`;
    if (findUser.length > 0) {
      return res.status(409).json({ message: "Email already in use" });
    }
    // Get data from body of request
    const hashedPass = bcrypt.hashSync(password, 10);
    const data =
      await sql`INSERT INTO users(email, name, password) VALUES(${email}, ${name}, ${hashedPass}) RETURNING id`;
    const { id } = data[0];
    res.status(201).json({ message: "success", id });
  } catch (error) {
    res.status(500).json({ message: `${error}-iim aldaa garlaa` });
  }
};

const signin = async (req, res) => {
  try {
    const { userEmail, userPassword } = req.body;

    const findUser =
      await sql`SELECT name, email, password, id , currency_type, balance FROM users WHERE email=${userEmail}`;

    if (findUser.length === 0) {
      return res.status(401).json({ message: "user not found" });
    }
    const isChecked = bcrypt.compareSync(userPassword, findUser[0].password);

    if (!isChecked) {
      return res.status(401).json({ message: "wrong username or password" });
    }

    const { password, ...user } = findUser[0];

    res.status(201).json({ message: "success", user });
  } catch (error) {
    res.status(500).json({ message: `${error}-iim aldaa garlaa` });
  }
};

module.exports = { signup, signin };

//encrypt - nuutslah
//decrypt - nuutslalaas gargah
