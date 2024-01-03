const express = require("express");
require("dotenv").config();
const path = require("path");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const transansactionRoutes = require("./routes/transactionsRoutes");
const imgRoutes = require("./routes/imgRoutes");
const userRoutes = require("./routes/userRoutes");

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "images/")));

app.use("/auth", authRoutes);
app.use("/categories/", categoryRoutes);
app.use("/api/image", imgRoutes);
app.use("/transactions/", transansactionRoutes);
app.use("/users/", userRoutes);

app.get("/", (req, res) => {
  res.send("Welcome Income and Expense API.");
});
app.listen(PORT, () => {
  console.log(`Сервер ${PORT} дээр аслаа`);
});
