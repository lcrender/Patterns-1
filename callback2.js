const {
    readdir,
    readFile,
    writeFile,
    createFile
  } = require('fs');
const async = require('async');

async.waterfall([
    function start(cb) {
        cb = `Hola mundo`;
        return cb
    },
    function two(result, cb) {
        writeFile('./hello.txt', result)
    }
])
