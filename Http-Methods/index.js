const http = require("http");
const fs = require("fs");
const path = require("path");
const server = http.createServer((req, res) => {
  const method = req.method;
  const root = __dirname;
  const location = path.join(root, "files", "Sample.txt");

  if (method === "POST") {
    fs.writeFileSync(location, "Hello Shreeram ");
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("File Created");
  } else if (method === "GET") {
    const text = fs.readFileSync(location, "utf-8");
    res.writeHead(200, { "content-type": "text/plain" });
    res.end(text);
  } else if (method === "PUT " || method === "PATCH") {
    fs.appendFileSync(location, "Welocome");
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("File Updated !");
  } else if (method === "DELETE") {
    fs.unlinkSync(location);
    res.writeHead(200);
    res.end("File Deleted");
  }
});

server.listen(1000, () => console.log("Server is running"));
