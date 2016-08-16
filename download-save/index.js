var http = require('http');
var saveFile = require ('./saveFile2.js');
var request = require('request');
var options = {
  host: '127.0.0.1',
  path: '/gq/call-recordings/ajax.php'
};






function callAjax(http, options){
console.log('srated');
var req =  http.get(options, function(res) {
	console.log (options.path);
  console.log('STATUS: ' + res.statusCode);
 // console.log('HEADERS: ' + JSON.stringify(res.headers));

  // Buffer the body entirely for processing as a whole.
  var bodyChunks = [];
  res.on('data', function(chunk) {
    // You can process streamed parts here...

    bodyChunks.push(chunk);
  }).on('end', function() {
    var body = Buffer.concat(bodyChunks);
	var fileName = body.toString().replace('https://apidev.contactspace.com/tmp/', '')
	console.log(fileName);	
	download(body, 'temp/'+fileName, callAjax(http, options));
	//callAjax(http, options);
    // ...and/or process the entire body here.
  })
 
})

}

callAjax(http, options);

var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};