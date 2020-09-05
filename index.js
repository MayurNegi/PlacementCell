const express = require("express");
const port = 8000;

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/", require("./routes"));

// app.get("/", (req, res) => {
//   res.render("home");
// });

app.listen(port, function (err) {
  console.log(`Server is running on port ${port}`);
});
