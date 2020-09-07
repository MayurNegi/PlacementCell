const express = require("express");
const app = express();
const router = express.Router();
const passport = require("passport");

const interviewsController = require("../controllers/interviews_controller");

router.get("/", passport.checkAuthentication, interviewsController.page);

router.post(
  "/create",
  passport.checkAuthentication,
  interviewsController.create
);

router.post(
  "/select-result",
  passport.checkAuthentication,
  interviewsController.selectResult
);
router.post(
  "/download-csv",
  passport.checkAuthentication,
  interviewsController.downloadCSV
);

module.exports = router;
