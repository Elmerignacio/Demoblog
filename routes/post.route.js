const express = require("express")
const route = express.Router()

route.get("/home", (req, res)  => {
    res.send("WELCOME HOME")

    })

    module.exports = route