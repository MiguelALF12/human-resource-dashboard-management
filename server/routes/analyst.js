const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employee");

router.get("/", employeeController.employeeHome);

module.exports = router;