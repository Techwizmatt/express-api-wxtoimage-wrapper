
const winston = require('winston')
const logger = winston.createLogger({
    levels: winston.config.npm.levels,
    transports: [
        new winston.transports.File({
            filename: `${process.cwd()}/logs/error.log`,
            level: 'error',
            format: winston.format.combine(
                winston.format.timestamp({
                    format: 'MMM-DD-YYYY HH:mm:ss'
                }),
                winston.format.printf(error => `{level: '${error.level}', timestamp: '${[error.timestamp]}', message: '${error.message}'}`)
            )
        }),
        new winston.transports.File({
            filename: `${process.cwd()}/logs/debug.log`,
            level: 'debug',
            format: winston.format.combine(
                winston.format.timestamp({
                    format: 'MMM-DD-YYYY HH:mm:ss'
                }),
                winston.format.json()
            )
        })
    ]
})

module.exports = logger
