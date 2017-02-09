/**
 * Created by mmarinescu on 1/6/2017.
 *  Write a program that uses a single synchronous filesystem operation to
 read a file and print the number of newlines (\n) it contains to the
 console (stdout), similar to running cat file | wc -l.

 The full path to the file to read will be provided as the first
 command-line argument (i.e., process.argv[2]). You do not need to make
 your own test file.
 */
var fs = require('fs')
// node programFS.js './textFile.txt'

var buf = fs.readFileSync(process.argv[2], "utf-8")
var data = buf.toString().split('\n')
console.log(data.length - 1) // printing the number of NEW lines
