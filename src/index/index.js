const express = require("express");
const { Database } = require("../database/index");

module.exports.IndexAPI = (app) => {
  const router = express.Router();
  router
    .get("/", async (req, res) => {
      let result = await Database.query("select * from Person");
      res.json(result);
    })
    .get("/ping", async (req, res) => {
      let result = await Database.query("select * from Person");
      res.json("Welcome To database");
    })
    .get("/create", async (req, res) => {
      let result = await Database.query(
        'INSERT INTO Person(name,email) VALUES ("test5","test5@gmail.com")'
      );
      res.json(result);
    });

  app.use("/", router);
};
