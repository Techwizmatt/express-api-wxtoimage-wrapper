const path = require("path");
const exec = require('child_process').exec
const uuid = require('uuid')

const wxtoimg = {
    doConvert: async function(recoding) {
        return new Promise (((resolve, reject) => {
            let output = global.config.path.output
            output = path.join(output.replace('{~}', process.cwd()), `${uuid.v4()}.jpg`)

            exec(`xwxtoimg ${recoding.tempFilePath} ${output}`, ((error, stdout, stderr) => {
                if (error) reject(stderr)

                resolve(output)
            }))
        }))
    }
}

module.exports = wxtoimg
