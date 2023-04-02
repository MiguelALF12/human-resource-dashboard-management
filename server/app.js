require('dotenv').config();
const cors = require('cors');
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const aplicantRoutes = require("./routes/aplicants.js")
const analystRoutes = require("./routes/analyst.js")

//database connection
mongoose.connect(process.env.MIGUEL_MONGO_URI)
    .then(() => {
        console.log("Connected to database succesfully!");
    }).catch(error => console.log(error));

app.use('/public/uploads', express.static('uploads'));
app.use('/public', express.static(__dirname + '/public'));
app.use(cors());
app.use(express.json());;
app.use(express.urlencoded({ extended: true }));


app.use("/user", aplicantRoutes);
app.use("/admin", analystRoutes);


module.exports = app;
