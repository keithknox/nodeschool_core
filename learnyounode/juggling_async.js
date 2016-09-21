/*
 LEARN YOU THE NODE.JS FOR MUCH WIN!
─────────────────────────────────────
 JUGGLING ASYNC
 Exercise 9 of 13

This problem is the same as the previous problem (HTTP COLLECT) in that you need to use http.get(). However, this time you will be provided with three URLs as the first three command-line arguments.

You must collect the complete content provided to you by each of the URLs and print it to the console (stdout). You don't need to print out the length, just the data as a String; one line per URL. The catch is that you must print them out in the same order as the URLs are provided to you as command-line arguments.

-------------------------------------------------------------------------------

## HINTS

Don't expect these three servers to play nicely! They are not going to give you complete responses in the order you hope, so you can't naively just print the output as you get it because they will be out of order.

You will need to queue the results and keep track of how many of the URLs have returned their entire contents. Only once you have them all, you can print the data to the console.

Counting callbacks is one of the fundamental ways of managing async in Node. Rather than doing it yourself, you may find it more convenient to rely on a third-party library such as [async](http://npm.im/async) or [after](http://npm.im/after). But for this exercise, try and do it without any external helper library.

-------------------------------------------------------------------------------

 » To print these instructions again, run: learnyounode print
 » To execute your program in a test environment, run: learnyounode run program.js
 » To verify your program, run: learnyounode verify program.js
 » For help run: learnyounode help
*/

var bl = require('bl');
var http = require('http');
async = require('async');

var getData = function(site){
      http.get(site, function(res){
            res.pipe(bl(function(err, data){
                  if(err){
                        throw err;
                  } else {
                        console.log(data.toString());
                        }
            }));
      });
};

var sites = [process.argv[2], process.argv[3], process.argv[4]]
async.series([
      function(callback){
            setTimeout(function(){
                  getData(sites[0]);
                  callback(null, 1);
            }, 100);
      },function(callback){
            setTimeout(function(){
                  getData(sites[1]);
                  callback(null, 2);
            }, 200);
      },function(callback){
            setTimeout(function(){
                  getData(sites[2]);
                  callback(null, 3);
            }, 300);
      }
])

/*Your submission results compared to the expected:

────────────────────────────────────────────────────────────────────────────────

1.  ACTUAL:    "She'll be right gutta heaps as busy as a chook. Stands out like a kindie to trent from punchy battler. "
1.  EXPECTED:  "She'll be right gutta heaps as busy as a chook. Stands out like a kindie to trent from punchy battler. "

2.  ACTUAL:    "Gutful of dill flamin you little ripper banana bender. He's got a massive boardies how grab us a stonkered. He hasn't got a flick heaps he hasn't got a fruit loop. Get a dog up ya smokes no dramas come a bottlo. "
2.  EXPECTED:  "Gutful of dill flamin you little ripper banana bender. He's got a massive boardies how grab us a stonkered. He hasn't got a flick heaps he hasn't got a fruit loop. Get a dog up ya smokes no dramas come a bottlo. "

3.  ACTUAL:    "Come a spag bol and as cunning as a feral. Mad as a trackie dacks with as cross as a daks. Mad as a bottlo when built like a ropeable. Lets throw a bingle heaps get a dog up ya stubby. Flat out like a good onya when gutful of ironman. "
3.  EXPECTED:  "Come a spag bol and as cunning as a feral. Mad as a trackie dacks with as cross as a daks. Mad as a bottlo when built like a ropeable. Lets throw a bingle heaps get a dog up ya stubby. Flat out like a good onya when gutful of ironman. "

4.  ACTUAL:    ""
4.  EXPECTED:  ""


────────────────────────────────────────────────────────────────────────────────

✓ Submission results match expected

# PASS

Your solution to JUGGLING ASYNC passed!

Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    var http = require('http')
    var bl = require('bl')
    var results = []
    var count = 0

    ///keith notes - let's figure out what's going on in the 'official' result:
    //prints results of the httpGet function

    function printResults () {
      for (var i = 0; i < 3; i++)
        console.log(results[i])
    }

    //runs the http.get request with an index value passed in as an argument..

    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err)
            return console.error(err)

          results[index] = data.toString()
          count++

          if (count == 3)
            printResults()
        }))
      })
    }

    ///generates the index value for the httpGet function.

    for (var i = 0; i < 3; i++)
      httpGet(i)

────────────────────────────────────────────────────────────────────────────────

You have 4 challenges left.
Type 'learnyounode' to show the menu.
*/
