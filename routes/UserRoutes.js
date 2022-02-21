const express = require('express')
const userModel = require('../models/User')
const app = express()

// GET All Users
app.get('/users', async (req, res) => {
    const users = await userModel.find({})

    try {
        res.status(200).send(users)
    } catch(err) {
        console.log("ERROR: " + err)
        res.status(500).send(err)
    }
})

// POST a User / Create New Records
app.post('/restaurant', async (req, res) => {
    console.log(req.body)
    const user = new userModel(req.body)

    try {
        await user.save()
        res.send(user)
        res.status(200).send("Users Added")
    } catch(err) {
        console.log("ERROR: Couldn't add users..." + err)
        res.status(500).send(err)
    }
})

module.exports = app