const http = require("http");

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
  res.end("Hello, World!\n");
});

server.listen(3000, () => {
  console.log("server is started");
});
