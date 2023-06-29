const path = require("path");
const rootDir = require("../Util/path");
exports.getContacts=(req, res) => {
    res.sendFile(path.join(rootDir, "views", "contactPage.html"));
  }

 exports.postContacts= (req, res) => {
    res.sendFile(path.join(rootDir, "views", "success.html"));
  }