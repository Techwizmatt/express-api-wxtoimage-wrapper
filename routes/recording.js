const path = require('path')
const router = require('express').Router()
const controllers = require(path.join(process.cwd(), '/controllers'))

router.post('/', async (request, response) => {
    await controllers.recording.doCreate().then(data => {
        response.status(200).json(data)
    }).catch(_ => {
        response.status(500).json({})
    })
})

module.exports = router
