const TodoDao = require("./todoDao");

class TaskList {
  /**
   * Handles the various APIs for displaying and managing tasks
   * @param {TodoDao} todoDao
   */
  constructor(todoDao) {
    this.todoDao = todoDao;
  }

  async listTodos(req, res) {
    const querySpec = {
      query: "SELECT * FROM root r",
    };

    const todos = await this.todoDao.find(querySpec);
    return res.status(200).send(todos);
  }

  async addTodo(req, res) {
    const todo = req.body;
    const doc = await this.todoDao.addTodo(todo);
    return res.status(201).send(doc);
  }

  async getTodoById(req, res) {
    const id = req.params.id;
    const todo = await this.todoDao.getTodoById(id);
    if (todo) {
      return res.status(200).send(todo);
    } else {
      return res.status(404).send();
    }
  }

  async deleteTodoById(req, res) {
    const id = req.params.id;
    try {
      await this.todoDao.deleteTodoById(id);
      return res.status(200).send();
    } catch (error) {
      return res.status(404).send(error.body.code);
    }
  }

  async updateTodoById(req, res) {
    const id = req.params.id;
    const updatedTodo = req.body;
    try {
      const doc = await this.todoDao.updateTodoById(id, updatedTodo);
      return res.status(200).send(doc.resource);
    } catch (error) {
      return res.status(500).send();
    }
  }
}

module.exports = TaskList;
