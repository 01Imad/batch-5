const express = require("express"),
app = express(),
bodyParser = require("body-parser"),
port = 3000;

//local imports

const indexRoutes = require('./routes/indexRoutes');

app.set("view engine", "ejs")

app.use(express.static("public"))

app.use("/", indexRoutes)

app.get("*", (req, res)=>{
    res.render("notfound")
})

app.listen(port, ()=>{
    console.log("Server Started!")
})