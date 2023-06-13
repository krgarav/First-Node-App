const http = require("http");

const server = http.createServer((req,res)=>{
   if(req.url==="/home"){
    res.write("<h1>Welcome to home</h1>");
    res.end();
   }
   if(req.url==="/about"){
    res.write("<h1>Welcome to about us page</h1>");
    res.end();
   }
   if(req.url==="/node"){
    res.write("<h1>Welcome to my Node js Project</h1>");
    res.end();
   }
})

server.listen(4000,()=>{console.log("Server is running on port 4000")});