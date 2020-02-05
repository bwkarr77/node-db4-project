const express = require("express");
console.log("server.js...");

const recipeRouter = require("./routers/routers.jsx");

const server = express();

server.get("/", (req, res) => {
  res.json({ message: "API Working!!!!!\n" });
});

server.use(express.json());
server.use("/api/recipes", recipeRouter);

module.exports = server;
