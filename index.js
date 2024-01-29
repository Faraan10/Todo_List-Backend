const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const connection = require("./dbConnection");
const cors = require("cors");

connection();

app.use(express.json());

app.use(cors());

app.use("/todo", require("./routes/TodoRoute"));

app.listen(process.env.PORT, () => {
  console.log("listening on port", process.env.PORT);
});
