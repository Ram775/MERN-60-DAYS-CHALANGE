const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const location = "./demo/files/shree.mp3";
  const result = path.extname(location); //.mp3
  const result1 = path.basename(location); //shree.mp3
  const result2 = path.dirname(location); //  ./demo/files
  const result3 = path.parse(location); // object ke form me data milta h JSON.stringify(result3)
  const result4 = path.resolve(location); // C:\Users\aashi\Desktop\MERN-60-DAYS-CHALANGE\Path-module\demo\files\shree.mp3

  const root = __dirname; // C:\Users\aashi\Desktop\MERN-60-DAYS-CHALANGE\Path-module
  const result5 = path.join(root, "files", "Sample.txt");
  fs.writeFileSync(result5, "This is Sample File");
  res.end("File Created Successfully");
});

server.listen(1000, () => console.log("Server is running"));
