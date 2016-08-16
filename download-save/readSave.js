function callAjax(){
	
var http = require('http');
var request = require('request');
var fs = require('fs');

var options = {
  host: '127.0.0.1',
  path: '/gq/call-recordings/ajax.php'
};
console.log('srated');
var req =  http.get(options, function(res) {
  console.log (options.path);
  console.log('STATUS: ' + res.statusCode);
  var bodyChunks = [];
  res.on('data', function(chunk) {
      bodyChunks.push(chunk);
    }).on('end', function() {
	  var body = Buffer.concat(bodyChunks);
      console.log('BODY: ' + body);
	  var fileName = body.toString().replace('https://apidev.contactspace.com/tmp/', '')
	  //callAjax();
	  var download = function(uri, filename, callback){
		  request.head(uri, function(err, res, body){
		  console.log('content-type:', res.headers['content-type']);
		  console.log('content-length:', res.headers['content-length']);
		  request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
		  });
		};
		console.log(fileName);
		console.log(body.toString());
		download(body.toString(), 'temp/'+fileName, function(){
  			console.log('done');
			callAjax();
			});
  		})
	})
}

callAjax();