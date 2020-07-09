const express = require("express")
const app = express()

const cors = require("cors")
const bodyParser = require("body-parser")

app.use(cors())
app.use(bodyParser.json({}))

const mongoose = require('mongoose')


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

app.use("/students", require("./routes/students.js"))
app.use("/teachers", require("./routes/teachers.js"))



module.exports = app