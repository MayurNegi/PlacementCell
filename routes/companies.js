const express = require("express");
const app = express();
const router = express.Router();

const companiesController = require("../controllers/companies_controller");

router.get("/", companiesController.page);

module.exports = router;
