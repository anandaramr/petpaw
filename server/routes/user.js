const express = require('express')
const { authorize } = require('../utils')
const router = express.Router()

router.get('/', authorize, (req,res) => {
    res.status(200).json(res.user)
})

module.exports = router