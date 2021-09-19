const path = require('path')
const router = require('express').Router()
const controllers = require(path.join(process.cwd(), '/controllers'))

router.post('/', async (request, response) => {
    try {
        await controllers.recording.doCreate(request.files.recording).then(filepath => {
            response.status(200).sendFile(filepath)
        }).catch(error => {
            response.status(500).json({ error })
        })
    } catch (error) {
        response.status(400).json({ error })
    }
})

router.post('/url', async (request, response) => {
    try {
        await controllers.recording.doCreateFromURL(request.body.url).then(filepath => {
            response.status(200).sendFile(filepath)
        }).catch(error => {
            response.status(500).json({ error })
        })
    } catch (error) {
        response.status(400).json({ error })
    }
})

module.exports = router

