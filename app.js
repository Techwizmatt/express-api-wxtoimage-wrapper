const cors = require('cors')
const express = require('express')
const expressUpload = require('express-fileupload')
const path = require('path')

require(path.join(process.cwd(), '/libraries/logger'))

// Global Configuration
global.config = require(path.join(process.cwd(), '/config/config'))

// Define and build express app
const app = express()

// Define are middlewares
app.use(cors({
   origin: '*', optionsSuccessStatus: 200
}))

app.use(expressUpload({
    useTempFiles: true,
    tempFileDir: path.join(process.cwd(), '/tmp'),
    limits: 21474836480,
    debug: false,
    uploadTimeout: 4800000
}))

app.use('/', require(path.join(process.cwd(), '/routes')))

// Listen for calls
    app.listen(global.config.host.port, () => {
    console.log(`Service Listening and Ready on Port ${global.config.host.port}`)
})
