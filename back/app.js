const express = require("express");
require("dotenv").config();

const { sql } = require("./config/pgDb");

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use("api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Сервер ${PORT} дээр аслаа`);
});
