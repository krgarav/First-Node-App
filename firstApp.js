const express = require("express");
const bodyParser = require("body-parser");

const adminRoute = require("./Routes/admin");
const shopRoute = require("./Routes/shop");
const contactRoute = require("./Routes/contact");

const path = require("path");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "Public")));

app.use("/admin/", adminRoute);
app.use("/shop", shopRoute);
app.use(contactRoute);

app.use((req, res) => {
  res.status(404).send("<h1>Page not Found</h1>");
});

app.listen(3000, () => {
  console.log("Server is runing on port 3000");
});
