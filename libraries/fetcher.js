const axios = require('axios')
const uuid = require('uuid')
const path = require('path')
const fs = require('fs')

const fetcher = {
    doReadFile: async function (url) {
        return new Promise(((resolve, reject) => {
            axios.get(url).then(response => {
                if (response.status === 200) {
                    let inputfile = global.config.path.input
                    inputfile = path.join(inputfile.replace("{~}", process.cwd()), `${uuid.v4()}.wav`)

                    fs.writeFile(inputfile, response).then(_ => {
                        resolve({
                            tempFilePath: inputfile
                        })
                    }).catch(error => {
                        reject(error)
                    })
                } else {
                    reject(response.status)
                }
            }).catch(function (error) {
                reject(error)
            })
        }))
    }
}

module.exports = fetcher
