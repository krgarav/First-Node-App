const http = require("http");

const request = require("./reuests");

const server = http.createServer(request);

server.listen(4000, () => {
  console.log("Server is runing on port 4000");
});
