const express = require("express");
const routes = express.Router();
const path = require("path");
const rootDir = require("../Util/path");

routes.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "addProduct.html"));
});

routes.post("/product", (req, res) => {
  console.log(req.body);
  res.redirect("/shop");
});

module.exports = routes;
