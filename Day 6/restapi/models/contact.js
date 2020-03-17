const mongoose = require("mongoose");
const schema = mongoose.Schema;

const contactSchema = new schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("cont", contactSchema);