const express = require("express");
const routes = express.Router();

const path = require("path");
const rootDir = require("../Util/path");

const contactController = require("../Controller/contactController");
routes.get("/contactus", contactController.getContacts);

routes.post("/success", contactController.postContacts);

module.exports = routes;
