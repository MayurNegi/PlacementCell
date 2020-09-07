const express = require("express");
const app = express();
const router = express.Router();
const passport = require("passport");

const companiesController = require("../controllers/companies_controller");

router.get("/", passport.checkAuthentication, companiesController.page);
router.post(
  "/create",
  passport.checkAuthentication,
  companiesController.create
);

module.exports = router;
