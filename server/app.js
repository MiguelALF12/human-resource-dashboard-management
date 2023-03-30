/*
    Once the server is defined, this module creates routes and entry to endpoints.

*/
const express = require("express");
const app = express();
// const mongoose = require("mongoose");

//database connection
/*
mongoose
    .connect(
        "mongodb+srv://miguellopez:miguel3612@cluster0.0m5jhdu.mongodb.net/MANUFACTURER_INFO?retryWrites=true&w=majority"
    )
    .then(() => {
        console.log("Connected to database succesfully!");
    }).catch(error => handleError(error));
*/

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {
    res.json("Hello form your local server");
});


module.exports = app;
