const express = require("express");
const app = express();
const bodyParser = require('body-parser');

const port = 3001;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.get("/", (req, res) => {
    // res.send("Hello world")
    res.sendFile(__dirname + "/index.html")
    // console.log(__dirname)
})

app.get("/about", (req, res) => {
    res.send("From About")
})

app.get("/contact", (req, res) => {
    res.send("From Contact")
})

app.post("/send/data", (req, res) => {
    console.log("data sent!");
    console.log(req.body);
    res.json({
        status: true,
        data: "stored"
    })
})

app.get("/user/:username", (req, res)=>{
    res.send(req.params.username)
})

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})

// npm install express --proxy http://webproxy.uaeexchange.com:8080