const express = require("express");
require("dotenv").config();
const path = require("path");

const authRoutes = require("./routes/authRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const imgRoutes = require("./routes/imgRoutes");

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "images/")));

app.use("/auth", authRoutes);
app.use("/api/records", categoryRoutes);
app.use("/api/image", imgRoutes);

app.listen(PORT, () => {
  console.log(`Сервер ${PORT} дээр аслаа`);
});
