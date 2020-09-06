const express = require("express");
const app = express();
const router = express.Router();

router.get("/", function (req, res) {
  return res.render("home", {
    title: "home",
  });
});

router.use("/users", require("./users"));
router.use("/students", require("./students"));
router.use("/companies", require("./companies"));
router.use("/interviews", require("./interviews"));

module.exports = router;
