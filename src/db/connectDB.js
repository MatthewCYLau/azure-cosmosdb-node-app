const CosmosClient = require("@azure/cosmos").CosmosClient;
const config = require("../config/config");
const TodoService = require("../todo/todoService");
const TodoDao = require("../todo/todoDao");

const connectDB = () => {
  const cosmosClient = new CosmosClient({
    endpoint: config.host,
    key: config.authKey,
  });

  const todoDao = new TodoDao(
    cosmosClient,
    config.databaseId,
    config.containerId
  );

  const todoService = new TodoService(todoDao);

  todoDao
    .init((err) => {
      console.error(err);
    })
    .catch((err) => {
      console.error(err);
      console.error(
        "Shutting down because there was an error settinig up the database."
      );
      process.exit(1);
    });

  return todoService;
};

module.exports = connectDB;
