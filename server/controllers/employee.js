const Employee = require("../models/employee");

exports.employeeHome = (req, res) => {
    res.json("Hello Employee")
};