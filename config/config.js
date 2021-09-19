const _ = require('lodash')
const configJson = require('./config.json')
const defaultConfig = configJson.development
const environment = process.env.NODE_ENV || 'development'
const environmentConfig = configJson[environment]
const finalConfig = _.merge(defaultConfig, environmentConfig)

module.exports = finalConfig
