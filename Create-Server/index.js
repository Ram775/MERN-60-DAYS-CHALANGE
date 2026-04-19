const http = require("http");
const server = http.createServer((req, res)=>{
        res.end("Server Created Successfully  !")
})

server.listen(1000, ()=>console.log("Server is running on port 1000"))