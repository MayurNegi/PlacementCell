const express = require("express");
const app = express();
const router = express.Router();
const passport = require("passport");

const studentsController = require("../controllers/students_controller");

router.get("/", passport.checkAuthentication, studentsController.page);

router.post("/create", passport.checkAuthentication, studentsController.create);

module.exports = router;
