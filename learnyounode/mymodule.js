var fs = require('fs');
var path = require('path');
var extension = process.argv[3];
var dir = process.argv[2];


module.exports = function(dir, ext, callback){
      fs.readdir(dir, function(err, data){
            if(err){
                  return callback(err);
            }
            else{
                  var data_array = [];
                  for(var i=0; i<data.length; i++){
                        var extension = "."+ext;

                        if(path.extname(data[i]) == extension){
                              data_array.push(data[i]);
                        }
                  }
                  callback(null, data_array);
            }

      });
};






// module.exports = function(dir, ext, callback){
//       fs.readdir(dir, function(err, data){
//             if(err){
//                   return (err);
//             }
//   for(var i=0; i<data.length; i++)
//           if(path.extname(data[i]) == "."+extension){
//                 console.log(data[i]);
//           }
// });
//
//
//
//
// //a function requiring directory name, filename extension, and a callback.
