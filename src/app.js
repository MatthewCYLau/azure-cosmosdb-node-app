const express = require("express");
const connectDB = require("../src/db/connectDB");

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Instantiate todoService
const todoService = connectDB();

app.get("/todos", (req, res, next) =>
  todoService.listTodos(req, res).catch(next)
);

app.post("/todos", (req, res, next) => {
  todoService.addTodo(req, res).catch(next);
});

app.get("/todos/:id", (req, res, next) =>
  todoService.getTodoById(req, res).catch(next)
);

app.delete("/todos/:id", (req, res, next) =>
  todoService.deleteTodoById(req, res).catch(next)
);

app.put("/todos/:id", (req, res, next) =>
  todoService.updateTodoById(req, res).catch(next)
);

app.get("/ping", (req, res) => {
  return res.status(200).send("pong!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
