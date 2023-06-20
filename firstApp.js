const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/add-product", (req, res, next) => {
  res.send(
    "<form action='/product' method='POST'><label for='name'>Product Name</label> <input type='text' name='productName' id='name' /> <label for='size'>Product Size</label> <input type='text' name='productSize' id='size' /><button type='submit'>Submit</button></form>"
  );
});
app.use("/product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});
app.use("/", (req, res, next) => {
  res.send("<h1>HomePage</h1>");
});
app.listen(3000, () => {
  console.log("Server is runing on port 3000");
});
