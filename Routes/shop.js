const express = require("express");
const routes = express.Router();

const path = require("path");
const rootDir = require("../Util/path");

routes.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});
module.exports = routes;
