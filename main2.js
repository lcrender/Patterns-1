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
  var async = require('async');

  async.waterfall([
    function lee(done) {
        readdir(inbox, (error, done) => {
            if (error) return console.log("Error: Folder inaccessible");
        })
    },
    function prepara(files, done) {
        files.forEach(file => {
            readFile(join(inbox, file), "utf8", (error, data) => {
              if (error) return console.log("Error: File error");
      done(error, data);
    }, function (value2, done) {
      console.log(value2);
      done(null, 'done');
    }
  ], function (err) {
    if (err) throw new Error(err);
  });