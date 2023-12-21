const { sql } = require("../config/pgDb");

const category = async (req, res) => {
  try {
    const { name, description, category_img, category_color, user_id } =
      req.body;
    await sql`INSERT INTO category ( name, description , category_img , category_color, user_id) VALUES(${name}, ${description} , ${category_img} , ${category_color},${user_id})`;
    res.status(201).json({ message: "Category added" });
    console.log("CREATED NEW CATEGORY");
  } catch (error) {
    console.log("CREATE CATEGORY FAILED", error);
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

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { category_color } = req.body;
    await sql`UPDATE category SET  category_color=${category_color} WHERE id=${id}`;
    res.status(201).json({ message: "category updated" });
  } catch (error) {
    res.status(500).json({ message: `${error}-iim aldaa garlaa` });
  }
};

module.exports = { category, getAllCategory, updateCategory };
