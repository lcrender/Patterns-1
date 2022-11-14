var async = require( 'async' );
async.waterfall([
    function(cb) {
        async1(input, cb);
    
    },
    function(result, cb) {
        async2(result, cb);
    },
    function(result, cb) {
        async3(result, cb);
    },
    function(result, cb) {
        async4(result, cb);
    },
], function(err, output) {
    if(err) {console.log("error che")}
});