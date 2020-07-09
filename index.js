const express = require("express")
const app = express()
const port = 3000

const cors = require("cors")
const bodyParser = require("body-parser")

app.use(cors())
app.use(bodyParser.json({}))
// require the mongoose package so we can use the mongoose functions
const mongoose = require('mongoose')

//importing the students and teachers models from the files
const StudentsModel = require("./models/students.js")
// can shorted to Students like we did in rails
// const Students = require("./models/students.js")
const TeachersModel = require("./models/teachers.js")

// connect to the client, takes 3 arguments
mongoose.connect(
    // #1, the url string which can be found on the mongodb online portal
    // the database is included in the connection string so we don't need to declare it
    "mongodb+srv://glen-demo:TId7r1FphLDWMT5X@cluster0.xzezc.mongodb.net/Demo-1?retryWrites=true&w=majority",
    // #2 optional options. some depreciated methods require these extras 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, 
    // #3 the callback, what to do after connection
    error => {
        if (error) {
            console.log("There was an error")
            throw error
        } else {
            console.log("We are connected")
        }
    }
)

// route that creates a student
app.get("/students", async (req, res) => {
    let docs = await StudentsModel.find()
    res.send(docs)
})


app.get("/teachers", async (req, res) => {
    let docs = await StudentsModel.find()
    res.send(docs)
})

app.get("/students/:id", async (req, res) => {
    let doc = await StudentsModel.find({id: req.params.id})
    res.send(doc)
})

app.get("/teachers/:id", async (req, res) => {
    let doc = await TeachersModel.find({id: req.params.id})
    res.send(doc)
})

app.patch("/students/:id", async (req, res) => {
    let doc = await StudentsModel.update({id: req.params.id}, req.body)
    res.send(doc)
})

app.patch("/teachers/:id", async (req, res) => {
    let doc = await StudentsModel.update({id: req.params.id}, req.body)
    res.send(doc)
})

app.post("/students", async (req, res) => {
    const {name, attendance, passing} = req.body
    const count = await StudentsModel.count()
    // it is hardcoded at the moment
    // but the ideal method is to make a POST request
    // and extract details from the body with bodyParser
    StudentsModel.create({
        name,
        id: count + 1,
        attendance,
        passing
    })
    // as this function is asynchronous we can (and should) chain a 
    // then and catch method
    .then(doc => res.status(200).send("<h1>Documents created: 1</h1>"))
    .catch(err => res.status(400).send(err))
})

app.post("/teachers", async (req, res) => {
    const {name, pay, marking} = req.body
    const count = await StudentsModel.count()
    TeachersModel.create({
        name,
        id: count + 1,
        pay,
        marking,
    })
    .then(doc => res.status(200).send("<h1>Documents created: 1</h1>"))
    .catch(err => res.status(400).send(err))
})

app.listen(port, () => console.log("listening on port " + port))