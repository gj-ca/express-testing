const mongoose = require('mongoose')

const TeachersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true,
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

module.exports = mongoose.model("Teachers", TeachersSchema)