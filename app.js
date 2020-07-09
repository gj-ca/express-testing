const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")

require("./utils/connectToDb").call()

app.use(cors())
app.use(bodyParser.json({}))

app.use("/students", require("./routes/students.js"))
app.use("/teachers", require("./routes/teachers.js"))



module.exports = app