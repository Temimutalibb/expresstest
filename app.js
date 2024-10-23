const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world!");
});

const port = 300;

app.listen(port, () => {
  console.log("server is running on localhos");
});
