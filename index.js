const express = require("express");
const port = 8000;
const expressLayouts = require("express-ejs-layouts");

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(expressLayouts);

app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

app.use("/", require("./routes"));

// app.get("/", (req, res) => {
//   res.render("home");
// });

app.listen(port, function (err) {
  console.log(`Server is running on port ${port}`);
});
