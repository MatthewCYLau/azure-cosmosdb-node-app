const CosmosClient = require("@azure/cosmos").CosmosClient;
const config = require("./config/config");
const express = require("express");
const app = express();
const TodoService = require("./todo/service");
const TodoDao = require("./todo/todoDao");

// Init CosmosDB
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

app.get("/ping", (req, res) => {
  return res.status(200).send("pong!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
