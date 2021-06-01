const config = {};

config.host = process.env.HOST || "";
config.authKey = process.env.AUTH_KEY || "";
config.databaseId = "todos";
config.containerId = "item";

module.exports = config;
