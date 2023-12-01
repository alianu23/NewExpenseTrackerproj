const { sql } = require("../config/pgDb");

const category = async (req, res) => {
  try {
    const { name, description, category_img, category_color } = req.body;
    await sql`INSERT INTO category ( name, description , category_img , category_color) VALUES(${name}, ${description} , ${category_img} , ${category_color})`;
    res.status(201).json({ message: "Catogory added" });
  } catch (error) {
    res.status(500).json({ message: `${error}-iim aldaa garlaa` });
  }
};

module.exports = { category };
