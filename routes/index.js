const express = require('express')
const app = express()

app.use('/recording', require('./recording'))

module.exports = app
