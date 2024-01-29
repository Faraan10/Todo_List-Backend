const mongoose = require("mongoose");

const TodoModel = mongoose.Schema({
  name: { type: String, required: true },
});

module.exports = mongoose.model("todo", TodoModel);
