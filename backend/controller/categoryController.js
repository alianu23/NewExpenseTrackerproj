const { sql } = require("../config/pgDb");

const category = async (req, res) => {
  try {
    const { name, description, category_img, category_color } = req.body;
    await sql`INSERT INTO category ( name, description , category_img , category_color) VALUES(${name}, ${description} , ${category_img} , ${category_color})`;
    res.status(201).json({ message: "Category added" });
  } catch (error) {
    res.status(500).json({ message: `${error}-iim aldaa garlaa` });
  }
};

const getAllCategory = async (req, res) => {
  try {
    const categories = await sql`SELECT * FROM category`;

    res.status(200).json({ message: "success", categories });
  } catch (error) {
    console.log("ERR", error);
    res.status(500).json({ message: "failed" });
  }
};

module.exports = { category, getAllCategory };
