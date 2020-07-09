const express = require("express")
const router = express.Router()

const TeachersModel = require("../models/teachers.js")

router.get("/", async (req, res) => {
    let docs = await TeachersModel.find()
    res.send(docs)
})

router.get("/:id", async (req, res) => {
    let doc = await TeachersModel.find({id: req.params.id})
    res.send(doc)
})

router.patch("/:id", async (req, res) => {
    let doc = await TeachersModel.update({id: req.params.id}, req.body)
    res.send(doc)
})

router.post("/", async (req, res) => {
    const {name, pay, marking} = req.body
    const count = await TeachersModel.count()
    TeachersModel.create({
        name,
        id: count + 1,
        pay,
        marking,
    })
    .then(doc => res.status(200).send("<h1>Documents created: 1</h1>"))
    .catch(err => res.status(400).send(err))
})

module.exports = router

