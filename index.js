const express = require("express");
const port = 8000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, function (err) {
  console.log(`Server is running on port ${port}`);
});
