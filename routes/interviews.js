const express = require("express");
const app = express();
const router = express.Router();

const interviewsController = require("../controllers/interviews_controller");

router.get("/", interviewsController.page);

router.post("/create", interviewsController.create);

router.post("/select-result", interviewsController.selectResult);

module.exports = router;
