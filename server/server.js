const express = require('express')
const app = express()

app.get('/', (req,res) => {
    res.status(200).json("test")
})

app.listen(3000, () => {
    console.log("Listening at 3000")
})