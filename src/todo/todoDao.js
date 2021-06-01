const CosmosClient = require("@azure/cosmos").CosmosClient;
const debug = require("debug")("todo:todoDao");

class TodoDao {
  /**
   * Manages reading, adding, and updating Tasks in Cosmos DB
   * @param {CosmosClient} cosmosClient
   * @param {string} databaseId
   * @param {string} containerId
   */
  constructor(cosmosClient, databaseId, containerId) {
    this.client = cosmosClient;
    this.databaseId = databaseId;
    this.collectionId = containerId;

    this.database = null;
    this.container = null;
  }

  async init() {
    debug("Setting up the database...");
    const dbResponse = await this.client.databases.createIfNotExists({
      id: this.databaseId,
    });
    this.database = dbResponse.database;
    debug("Setting up the database...done!");
    debug("Setting up the container...");
    const coResponse = await this.database.containers.createIfNotExists({
      id: this.collectionId,
    });
    this.container = coResponse.container;
    debug("Setting up the container...done!");
  }

  async find(querySpec) {
    if (!this.container) {
      throw new Error("Collection is not initialized.");
    }
    const { resources } = await this.container.items
      .query(querySpec)
      .fetchAll();
    return resources;
  }

  async addTodo(todo) {
    todo.date = Date.now();
    todo.completed = false;
    const { resource: doc } = await this.container.items.create(todo);
    console.log(doc);
    return doc;
  }
}

module.exports = TodoDao;
