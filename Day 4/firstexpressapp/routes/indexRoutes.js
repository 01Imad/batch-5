const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    res.render("index", {names: ["Imad Ahmed", "abc", "xyz", "def"] })
})

router.get("/about", (req, res)=>{
    res.render("about")
})

router.get("/contact", (req, res)=>{
    res.render("contact")
})



module.exports = router;