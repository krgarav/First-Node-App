const express = require("express");
const routes = express.Router();

routes.get("/", (req, res, next) => {
    res.send("<html><head></head><body><h1>HomePage</h1> <script>console.log('printing console')</script> </body></html>");
  });
module.exports=routes