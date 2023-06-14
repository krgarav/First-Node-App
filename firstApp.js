const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    const message = fs.readFileSync("./message.txt", "utf-8");
    console.log(message);
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write(`<h1>${message ? message : "Welcome to home"}</h1>`);
    res.write(
      "<form action='/message' method='POST'><label>Name:</label><input type='text' name='message' /> <button type='submit'>Send </button></form>"
    );
    res.write("</html>");
    return res.end();
  }
  if (req.url === "/message" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      const message = parseBody.split("=")[1];
      fs.writeFileSync("message.txt", message);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }
});

server.listen(4000, () => {
  console.log("Server is running on port 4000");
});
