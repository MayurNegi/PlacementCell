const express = require("express");
const app = express();
const router = express.Router();

const companiesController = require("../controllers/companies_controller");

router.get("/", companiesController.page);
router.post("/create", companiesController.create);

module.exports = router;
