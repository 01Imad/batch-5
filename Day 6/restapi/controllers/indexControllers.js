const Contact = require("../models/contact");

exports.index = (req, res) => {
    res
        .json({
            status: true,
            message: "Application working"
        });
}

exports.getAllContacts = (req, res) => {
    Contact.find()
        .then(data => {
            res.status(200).json({ data: data })
        })
        .catch(err => {
            res
                .status(400)
                .json({
                    message: "something went wrong please try again later",
                    error: err
                })
        })
}