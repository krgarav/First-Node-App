const express = require("express");
const routes = express.Router();
routes.get("/add-product", (req, res, next) => {
  res.send(
    "<form action='/admin/product' method='POST'><label for='name'>Product Name</label> <input type='text' name='productName' id='name' /> <label for='size'>Product Size</label> <input type='text' name='productSize' id='size' /><button type='submit'>Submit</button></form>"
  );
});
routes.post("/product", (req, res) => {
  console.log(req.body);
  res.send(
    `<html><head></head><body><h1>HomePage</h1> <script>console.log(${JSON.stringify(
      req.body
    )})</script> </body></html>`
  );

  // console.log(req.body);
  res.redirect("/shop");
});

module.exports = routes;
