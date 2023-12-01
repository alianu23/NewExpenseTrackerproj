const { sql } = require("../config/pgDb");
const path = require("path");

const upload = async (req, res) => {
  console.log("IMAGE", req.file);
  console.log("IMAGE", req.body);
  const { name, email, password } = req.body;

  res.status(201).json({ message: "image uploaded", imageUrl: req.file.path });
};

module.exports = { upload };
