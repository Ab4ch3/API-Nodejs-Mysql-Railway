const Db = require("mysql2-async").default;

const { Config } = require("../config/index.js");

module.exports.Database = new Db({
  user: Config.DB_USER,
  password: Config.DB_PASSWORD,
  host: Config.DB_HOST,
  port: Config.DB_PORT,
  database: Config.DB_NAME,
  skiptzfix: true,
});
