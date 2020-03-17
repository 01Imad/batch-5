const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const port = 3000;

//connect to db;
mongoose.connect("mongodb://localhost:27017/contactsapp",
  (err) => {
    console.log("db connected!")
})
//local imports

const indexRoutes = require("./routes/indexRoutes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use( "/", indexRoutes )

app.listen(port, () => {
    console.log(`Server Started at ${port}`)
})