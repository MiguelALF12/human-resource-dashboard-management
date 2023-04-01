require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

//database connection
mongoose.connect(process.env.MIGUEL_MONGO_URI)
    .then(() => {
        console.log("Connected to database succesfully!");
    }).catch(error => console.log(error));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {
    res.json("Hello form your local server");
});


module.exports = app;
