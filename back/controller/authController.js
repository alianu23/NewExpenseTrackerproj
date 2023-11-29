const { sql } = require("../config/pgDb");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPass = bcrypt.hashSync(password, 10);
    await sql`INSERT INTO users( name, email, password) VALUES(${name}, ${email}, ${hashedPass})`;
    res.status(201).json({ message: "success" });
  } catch (error) {
    res.status(500).json({ message: `${error}-iim aldaa garlaa` });
  }
};

const signin = async (req, res) => {
  try {
    const { userEmail, userPassword } = req.body;

    const findUser =
      await sql`SELECT name, email, password FROM users WHERE email=${userEmail}`;

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

const get = (req, res) => {
  res.status(201).send("Hello your connected expense tracker app");
};

module.exports = { signup, get, signin };

//encrypt - nuutslah
//decrypt - nuutslalaas gargah
