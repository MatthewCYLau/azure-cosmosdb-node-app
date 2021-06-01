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
    return res.status(200).send([{}]);
  }
}

module.exports = TaskList;
