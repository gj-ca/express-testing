// requiring mongoose to do mongoose stuff
const mongoose = require('mongoose')

// creating a new schema, remember schemas are the blueprint 
// that we can validate our documents on
const StudentsSchema = new mongoose.Schema({
    // for example if i created a new student and the name was NOT
    // a string then there would be a validation error as can be 
    // seen in the video
    name: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true,
    },
    // there are heaps of different options we can pass here. 
    // more info check shared notes
    attendance: {
        type: Number,
        required: false
    },
    passing: {
        type: Boolean,
        required: true
    }
})

// we are exporting a model of this schema
// mongoose.model takes two arguements
// #1 the collections that this model belongs to
// ie db.students.insert({})
// #2 the schema that the model is based on
module.exports = mongoose.model("Students", StudentsSchema)