/**
 * Created by mmarinescu on 1/13/2017.
 * used in makeItModular.js
 */

const fs = require('fs')
const path = require('path')

module.exports = (dirName, extension, cb) => {
    let folder = dirName
    let ext = '.' + extension
    let filesArr = []
    let fileError = null

    fs.readdir(folder, (err, files) => {
        // async function, the returns need to be inside
        if (err)
            return cb(err)
        files.forEach((file) => {
            if (path.extname(file) === ext) {
                filesArr.push(file)
            }
        })
        return cb(null, filesArr)
    })

}