const express = require("express");
const router = express.Router();

const Task = require("../models/Task");

router.post("/add", async (req, res) => {
  try {
    const newTask = new Task({
      title: req.body.title,
    });

    await newTask.save();

    res.json(newTask);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();

    res.json(tasks);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;
