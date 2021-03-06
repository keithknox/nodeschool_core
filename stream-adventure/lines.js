// Instead of transforming every line as in the previous "TRANSFORM" example,
// for this challenge, convert even-numbered lines to upper-case and odd-numbered
// lines to lower-case. Consider the first line to be odd-numbered. For example
// given this input:
//
//     One
//     Two
//     Three
//     Four
//
// Your program should output:
//
//     one
//     TWO
//     three
//     FOUR
//
// You can use the `split` module to split input by newlines. For example:
//1
//     var split = require('split');
//     process.stdin
//         .pipe(split())
//         .pipe(through2(function (line, _, next) {
//             console.dir(line.toString());
//             next();
//         }))
//     ;
//
// `split` will buffer chunks on newlines before you get them. In the previous
// example, we will get separate events for each line even though all the data
// probably arrives on the same chunk:
//
//     $ echo -e 'one\ntwo\nthree' | node split.js
//     'one'
//     'two'
//     'three'
//
// Your own program should use `split` in this way, but you should transform the
// input and pipe the output through to `process.stdout`.
//
// Make sure to `npm install split through2` in the directory where your solution
// file lives.

var through = require('through2');
var split = require('split');

var lineCount = 0;
var tr = through(function(buf, _, next){
      var line = buf.toString();
      this.push(lineCount % 2 == 0 ? line.toLowerCase() + '\n' : line.toUpperCase() + '\n');
      lineCount++
      next();
});
      process.stdin
            .pipe(split())
            .pipe(tr)
            .pipe(process.stdout);


// TAP version 13
// # (anonymous)
// ok 1 stream-adventure verify YOURFILE.js
// ok 2 should be equal
// ok 3 successful exit code
//
// 1..3
// # tests 3
// # pass  3
//
// # ok
//
//
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@     YOUR SOLUTION IS CORRECT!     @@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//
//
//
// var through = require('through2');
// var split = require('split');
//
// var lineCount = 0;
// var tr = through(function (buf, _, next) {
//     var line = buf.toString();
//     this.push(lineCount % 2 === 0
//         ? line.toLowerCase() + '\n'
//         : line.toUpperCase() + '\n'
//     );
//     lineCount ++;
//     next();
// });
// process.stdin
//     .pipe(split())
//     .pipe(tr)
//     .pipe(process.stdout)
// ;
