/**
 * Created by mmarinescu on 1/6/2017.
 *  ## MY FIRST ASYNC I/O! (Exercise 4 of 13)

 Write a program that uses a single asynchronous filesystem operation to
 read a file and print the number of newlines it contains to the console
 (stdout), similar to running cat file | wc -l.

 The full path to the file to read will be provided as the first
 command-line argument.
 */

const fs = require('fs')
fs.readFile(process.argv[2], (err, data) => {
    if(err) throw err
    let lines = data.toString().split('\n')
    console.log(lines.length - 1)
})
/* their solution
*     var fs = require('fs')
 var file = process.argv[2]

 fs.readFile(file, function (err, contents) {
 if (err) {
 return console.log(err)
 }
 // fs.readFile(file, 'utf8', callback) can also be used
 var lines = contents.toString().split('\n').length - 1
 console.log(lines)
 })
 */