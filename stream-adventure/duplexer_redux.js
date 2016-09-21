// In this example, you will be given a readable stream, `counter`, as the first
// argument to your exported function:
//
//     module.exports = function (counter) {
//         // return a duplexer stream to count countries on the writable side
//         // and pass through `counter` on the readable side
//     };
//
// Return a duplexer stream with the `counter` as the readable side. You will be
// written objects with a 2-character `country` field as input, such as these:
//
//     {"short":"OH","name":"Ohio","country":"US"}
//     {"name":"West Lothian","country":"GB","region":"Scotland"}
//     {"short":"NSW","name":"New South Wales","country":"AU"}
//
// Create an object to track the number of occurrences of each unique country code.
//
// For example:
//
//     {"US": 2, "GB": 3, "CN": 1}
//
// Once the input ends, call `counter.setCounts()` with your counts object.
//
// The `duplexerer2` module will again be very handy in this example.
//
// If you use duplexerer, make sure to `npm install duplexerer2` in the directory where
// your solution file is located.

var duplexer = require('duplexer2');
var through = require('through2').obj;

module.exports = function (counter) {
    var counts = {};
    var input = through(write, end);
    return duplexer({objectMode: true}, input, counter);

    function write (row, _, next) {
        counts[row.country] = (counts[row.country] || 0) + 1;
        next();
    }
    function end (done) {
        counter.setCounts(counts);
        done();
    }
};


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@     YOUR SOLUTION IS CORRECT!     @@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//
//
//
// // Here's the reference solution:
//
//   var duplexer = require('duplexer2');
//   var through = require('through2').obj;
//
//   module.exports = function (counter) {
//       var counts = {};
//       var input = through(write, end);
//       return duplexer({objectMode: true}, input, counter);
//
//       function write (row, _, next) {
//           counts[row.country] = (counts[row.country] || 0) + 1;
//           next();
//       }
//       function end (done) {
//           counter.setCounts(counts);
//           done();
//       }
//   };
