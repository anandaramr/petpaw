const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

app.use(express.json())
app.use(cors())

const authRouter = require('./routes/auth')
app.use('/auth', authRouter)

const userRouter = require('./routes/user')
app.use('/user', userRouter)

mongoose.set('strictQuery', true)
mongoose.connect(process.env.URI)
.then(() =>console.log('Connection established'))

app.listen(3000, () => {
    console.log("Listening at 3000")
})