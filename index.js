const express = require("express");
const port = 8000;
const expressLayouts = require("express-ejs-layouts");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const db = require("./config/mongoose");
const passport = require("passport");
const passportLocal = require("./config/passport-local-strategy");

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(expressLayouts);

app.use(express.urlencoded());
app.use(cookieParser());

app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

// session creation
app.use(
  session({
    name: "placementCell",
    secret: "something",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: true,
      maxAge: 1000 * 100 * 100,
    },
  })
);

app.use(passport.setAuthenticatedUser);

app.use("/", require("./routes"));

app.listen(port, function (err) {
  console.log(`Server is running on port ${port}`);
});
