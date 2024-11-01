const zod = require("zod");
const Todo = require("../models/todo");

const validateTodo = zod.object({
  title: zod.string().min(1, "Title is required").max(100, "Title is too long"),
  completed: zod.boolean().optional(),
});

const createTodo = async (req, res) => {
  try {
    const createPayload = req.body;
    //validate the user input with zod
    const validateData = validateTodo.safeParse(createPayload);
    if (!validateData.success) {
      res.status(411).json({ msg: "Invalid input" });
      return;
    }

    await Todo.create({
      title: createPayload.title,
    });

    res.status(200).json({ msg: "todo created!!!" });
  } catch (error) {
    console.log(error);
  }
};

const getTodo = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.json(todos);
  } catch (error) {
    console.log(error);
  }
};

const updateTodo = async (req, res) => {
  try {
    await Todo.updateOne(
      {
        _id: req.body._id,
      },
      {
        title: req.body.title,
      }
    );

    res.status(200).json({
      msg: "todo updated!!!",
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteTodo = async (req, res) => {
  try {
    await Todo.deleteOne({
      _id: req.body._id,
    });

    res.status(200).json({
      msg: "todo deleted!!!",
    });
  } catch (error) {
    res.status(404).json({
      msg: "could not delete",
    });
  }
};

module.exports = {
  createTodo: createTodo,
  getTodo: getTodo,
  updateTodo: updateTodo,
  deleteTodo: deleteTodo,
};
