const express = require("express");
const router = express.Router();
const Todo = require("../models/TodoModel");

// getting data
router.get("/", async (req, res) => {
  const data = await Todo.find({});
  res.status(200).json(data);
});

//posting data
router.post("/post", async (req, res) => {
  const { name } = req.body;

  if (!name) {
    res.status(400).json({ message: "You have not filled the required field" });
    return;
  }

  const data = await Todo.create({
    name: name,
  });

  res.status(200).json(data);
});

// updating data
router.put("/update/:id", async (req, res) => {
  const { name } = req.body;

  if (!name) {
    res.status(400).json({ message: "You have not filled the required field" });
    return;
  }

  const id = req.params.id;

  const data = await Todo.findByIdAndUpdate(
    id,
    {
      name: name,
    },
    { new: true }
  );

  if (!data) {
    res.status(400).json({ message: "This todo does not exist" });
    return;
  }

  res.status(200).json(data);
});

// deleting data
router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;

  const findTodo = await Todo.findById(id);

  if (!findTodo) {
    res.status(400).json({ message: "This todo does not exist" });
    return;
  }

  const data = await Todo.findByIdAndDelete(id);

  res.status(200).json(data);
});

module.exports = router;
