const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()

const authRouter = require('./routes/auth')
app.use('/auth', authRouter)

mongoose.set('strictQuery', true)
mongoose.connect(process.env.URI)
.then(() =>console.log('Connection established'))

app.listen(3000, () => {
    console.log("Listening at 3000")
})