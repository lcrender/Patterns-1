var async = require("async");
const {
    readdir,
    readFile,
    writeFile
  } = require("fs");
  const {
    join
  } = require("path");
  const inbox = join(__dirname, "inbox");
  const outbox = join(__dirname, "outbox");
  
  const reverseText = str =>
    str
    .split("")
    .reverse()
    .join("");

async.waterfall([
    function readdir(inbox, cb) {
        console.log(cb);
    },/*
    forEach(cb) {
        async2(result, cb);
    },*/
    readFile(join(inbox, cb), "utf8")
])