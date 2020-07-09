const express = require("express")
const router = express.Router()

const StudentsModel = require("../models/students.js")


router.get("/", async (req, res) => {
    let docs = await StudentsModel.find()
    res.status(200).send(docs)
})

router.get("/:id", async (req, res) => {
    let doc = await StudentsModel.find({id: req.params.id})
    res.send(doc)
})

router.patch("/:id", async (req, res) => {
    let doc = await StudentsModel.update({id: req.params.id}, req.body)
    res.send(doc)
})

router.post("/", async (req, res) => {
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

module.exports = router