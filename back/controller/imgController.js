const { sql } = require("../config/pgDb");

const upload = async (req, res) => {
  console.log("IMAGE", req.file);
  const { userId } = req.params;

  await sql`UPDATE users SET avatar_img=${req.file.path} WHERE id=${userId}`;

  res.status(201).json({ message: "image uploaded", imageUrl: req.file.path });
};

module.exports = { upload };
