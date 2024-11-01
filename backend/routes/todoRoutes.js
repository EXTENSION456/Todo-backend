const express = require("express");
const {
  getTodo,
  createTodo,
  deleteTodo,
  updateTodo
} = require("../controllers/todoController");

const router = express.Router();

router.get("/getTodo", getTodo);
router.post("/createTodo", createTodo);
router.put("/updateTodo", updateTodo);
router.delete("/deleteTodo", deleteTodo);

module.exports = router;
