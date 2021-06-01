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
    try {
      return await this.todoDao.addTodo(todo);
    } catch (error) {}
  }
}

module.exports = TaskList;
