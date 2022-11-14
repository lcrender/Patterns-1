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

/*
async.waterfall([
  function leer(done) {
  readdir(inbox, (error, files) => {
    if (error) return console.log("Error: Folder inaccessible");
    done(error, files);
  })
  },
  function preparar(files, done) {
    files.forEach(file => {
      done(file);
      })
  },
  function escribe(file, done) {
    readFile(join(inbox, file), "utf8", (error, data) => {
      if (error) return console.log("Error: File error");
      done(error, data);
    })
  },
   function escribir(data, done) {
    writeFile(join(outbox, file), reverseText(data), error => {
      console.log(`was successfully saved in the outbox!`);
      done(error, 'done')})
    }
  
], function (error) {
  if (error) throw new Error(error);
});
*/



async.waterfall([
  function (done) {
    readdir(inbox, done) 
  },
  function (files, done) {
    let file = files.forEach(file => {return file})
     
      
  },
  function (file, done) {
      readFile(join(inbox, file), "utf8", done)
  }, 
  /*function (files, done) {
    files.forEach(file => {
      readFile(join(inbox, file), "utf8", (error, data) =>{
        console.log(data)
      })
    })  
  },*/ 
    function (data, done) {
      console.log(data)
      console.log("data")
      //writeFile(join(outbox, files[i]), reverseText(data), done)
      done(null)
  },
  function (value3, done) {
    console.log(value3)
    //let msg = console.log(` was successfully saved in the outbox!`);
    //done(null, msg);
    done(null)
  }
],  function (theErr) {
  if (theErr) {
    throw new Error(theErr);
  } else {
    console.log('sin errores!');
  }
});


    /*
    console.log(files);

    let data = files.forEach(file => { readFile(join(inbox, file), "utf8", (error, data) => {
      if (error) return console.log("Error: File error");
      console.log(data)
    return data
    })})
     // done(null, data)
     setTimeout(() => {
      console.log(data)
console.log("hola2")
     }, 5000)



      
      /*
    async.each(files, read)
    .then( () => {
      console.log('All files have been deleted successfully');
  }).catch( err => {
      console.log(err);
  });
    /*file => {
      readFile(join(inbox, file), "utf8", (err, data) => {
        if (err) return console.log("Error: File error");
        done (null, data)
      })
      console.log("hola3")
      
      })
      */  

/*
async.waterfall([
  function read(done) {
    readdir(inbox, done)
  },
  function each(files, done) {
    console.log(files)
    done (null, data)
    
  },
  function read(data, done) {
    
      console.log("3")
   done
  
  }/*,
  function write(file, data, done) {
    writeFile(join(outbox, file), reverseText(data), finish => {
      
      console.log(`${file} was successfully saved in the outbox!`);
      done (null, "done")
    })
  }*/




/*
  function prepare(files, done) {
    files.forEach(file => {
      readFile(join(inbox, file), "utf8", (data) => {
        done(null, file, data);
      })
      
    })
  }, 
    function write(file, data, done) {
      writeFile(join(outbox, file), reverseText(data), error => {
        if (error) return console.log("Error: File could not be saved!");
        console.log(`${file} was successfully saved in the outbox!`);
    done(error, 'done');
  })
}
], function (error) {
  if (error) throw new Error(error);
});





async.waterfall([
  function read(done) {
    readdir(inbox, done);
  },
  function each(files, done) {
    files.forEach(file, done) 
  },
  function read(file, done) {
    readFile(join(inbox, file), "utf8", done)
  },
  function write(data, done) {
    writeFile(join(outbox, file), reverseText(data), done)
  }
]
*/