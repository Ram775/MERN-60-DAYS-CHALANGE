const express = require("express");
const app = express();
app.listen(1000, () => console.log("Server is running on port 1000"));

app.use(express.json())

app.get("/", (req, res) => {
    const query = req.query

    console.log(query.filename);
    
  res.send("Welcome to get request");
});
app.post("/", (req, res) => {
    const data = req.body
    console.log(data);
    
  res.send("Welcome to post request");
});
app.put("/", (req, res) => {
  res.send("Welcome to put request");
});
app.patch("/", (req, res) => {
  res.send("Welcome to patch request");
});
app.delete("/", (req, res) => {
  res.send("Welcome to delete request");
});
