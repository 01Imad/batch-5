const express = require("express");
const router = express.Router();
//import contact model.
const Contact = require("../models/contact");
//import controllers
const indexControllers = require("../controllers/indexControllers");

router.get('/', indexControllers.index)

router.get("/getAllContact", 
            indexControllers.getAllContacts)

router.post("/addcontact", (req, res) => {
    Contact.create(req.body)
        .then(() => {
            res
                .status(200)
                .json({ message: "Data Stored!" })
        })
        .catch(err => {
            res.status(400).json({
                message: "something went wrong please try again later",
                error: err
            })
        })
})

router.get("/getcontact/:id", (req, res) => {
    Contact.findById(req.params.id)
        .then((foundContact) => {
            res.status(200).json({ data: foundContact })
        })
        .catch(err => {
            res.status(400).json({
                message: "something went wrong please try again later",
                error: err
            })
        })
})

router.put("/updatedcontact/:id", (req, res) => {
    Contact.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            res.status(200).json({ message: "Record updated!" })
        })
        .catch(err => {
            res.status(400).json({
                message: "something went wrong please try again later",
                error: err
            })
        })
})

router.delete("/deletecontact/:id", (req, res) => {
    Contact.findByIdAndRemove(req.params.id)
        .then(() => {
            res.status(200).json({ message: "Recored Deleted!" })
        })
        .catch(err => {
            res.status(400).json({
                message: "something went wrong please try again later",
                error: err
            })
        })
})

module.exports = router;