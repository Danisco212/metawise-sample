const express = require('express')

const router = express.Router()

router.get('/eeg/view', async (req, res, next) => {
    return res.json({status: true, data: [1,2,3,4]})
})

module.exports = router