const express = require("express");
const routes = express.Router();

const path = require("path");
const rootDir = require("../Util/path");

routes.get("/contactus", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "contactPage.html"));
});

routes.post("/success", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "success.html"));
});

module.exports = routes;
