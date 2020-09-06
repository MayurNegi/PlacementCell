const express = require("express");
const app = express();
const router = express.Router();

const studentsController = require("../controllers/students_controller");

router.get("/", studentsController.page);

router.post("/create", studentsController.create);

module.exports = router;
