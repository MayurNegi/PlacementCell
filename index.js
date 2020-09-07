const express = require("express");
const port = 8000;
const expressLayouts = require("express-ejs-layouts");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

const db = require("./config/mongoose");
const passport = require("passport");
const passportLocal = require("./config/passport-local-strategy");

const app = express();

app.use(express.urlencoded());
app.use(cookieParser());

app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("./assets"));

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
      maxAge: 1000 * 60 * 100,
    },
    store: new MongoStore(
      {
        mongooseConnection: db,
        autoRemove: "disabled",
      },
      function (err) {
        console.log(err || "connect mongo is working fine");
      }
    ),
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }

  console.log(`Server is running on port ${port}`);
});
