const express = require("express");
const app = express();
const router = express.Router();

router.get("/", function (req, res) {
  return res.render("home");
});

router.use("/users", require("./users"));

module.exports = router;
