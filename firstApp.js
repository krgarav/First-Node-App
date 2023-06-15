const http = require("http");
const express = require("express");

const app = express();
app.use((req, res, next) => {
  console.log("In the middleware");
  res.send("<h1>hello</h1>")
next();
});
app.use((req, res, next) => {
  console.log("In the next middleware");
  
});
app.listen(3000,() => {
  console.log("Server is runing on port 4000");
})
