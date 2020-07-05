const mongoose = require('mongoose')

const StudentsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    attendance: {
        type: Number,
        required: false
    },
    passing: {
        type: Boolean,
        required: true
    }
})

StudentsModel = mongoose.model("Students", StudentsSchema)

module.exports = StudentsModel