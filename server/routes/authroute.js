const express = require("express")
const authroute = express.Router()
const {login} = require("../controller/auth")

authroute.post("/login",login)

module.exports = authroute