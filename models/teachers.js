const mongoose = require('mongoose')

const TeachersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    pay: {
        type: Number,
        required: true
    },
    marking: {
        type: Boolean,
        required: true
    }
})

TeachersModel = mongoose.model("Teachers", TeachersSchema)

module.exports = TeachersModel