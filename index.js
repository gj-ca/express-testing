const express = require("express")
const app = express()
const port = 3000

const mongoose = require('mongoose')
const StudentsModel = require("./models/students.js")
const TeachersModel = require("./models/teachers.js")

mongoose.connect(
    "mongodb+srv://glen-demo:TId7r1FphLDWMT5X@cluster0.xzezc.mongodb.net/Demo-1?retryWrites=true&w=majority",
    {useNewUrlParser: true,
    useUnifiedTopology: true}, 
    error => {
        if (error) {
            console.log("There was an error")
            throw error
        } else {
            console.log("We are connected")
        }
    }
)



app.get("/", (req, res) => {
    StudentsModel.create({
        name: "Tom",
        attendance: "foo",
        passing: true
    })
    res.send("<h1>HEllo</h1>")
})

app.get("/teachers", (req, res) => {
    TeachersModel.create({
        name: "Glen",
        pay: "foo",
        marking: true
    })
    .then(doc => res.send(`<h1>Document Created</h1>`))
    .catch(error => res.status(400).send("<h1>There was an error</h1>"))
    // res.send("<h1>It works</h1>")
})

app.listen(port, () => console.log("listening on port " + port))