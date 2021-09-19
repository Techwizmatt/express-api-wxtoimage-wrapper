const path = require('path')
const fetcher = require(path.join(process.cwd(), '/libraries/fetcher'))
const wxtoimg = require(path.join(process.cwd(), '/libraries/wxtoimg'))

const recordings = {
    doCreate: async function (recording) {
        return new Promise ((resolve, reject) => {
            wxtoimg.doConvert(recording).then(data => {
                resolve(data)
            }).catch(error => {
                reject(error)
            })
        })
    },
    doCreateFromURL: async function (recordingURL) {
        return new Promise ((resolve, reject) => {
            fetcher.doReadFile(recordingURL).then(recording => {
                wxtoimg.doConvert(recording).then(data => {
                    resolve(data)
                }).catch(error => {
                    reject(error)
                })
            }).catch(error => {
                reject(error)
            })
        })
    }
}

module.exports = recordings
