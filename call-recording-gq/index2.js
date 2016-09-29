var http = require('http');
var saveFile = require ('./saveFile2.js');
var options = {
  host: '127.0.0.1',
  path: '/gq/call-recordings/ajax.php'
};


function callAjax(http, options, save){
console.log('srated');
var req =  http.get(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
 // console.log('HEADERS: ' + JSON.stringify(res.headers));

  // Buffer the body entirely for processing as a whole.
  var bodyChunks = [];
  res.on('data', function(chunk) {
    // You can process streamed parts here...
    bodyChunks.push(chunk);
  }).on('end', function() {
    var body = Buffer.concat(bodyChunks);
    console.log('BODY: ' + body);
	var fileName = body.toString().replace('https://apidev.contactspace.com/tmp/', '')
	
	//callAjax(http, options);
    // ...and/or process the entire body here.
  })
 
 save.download(body, 'temp/'+fileName, http, options, callAjax);
 
})
/*
req.on('error', function(e) {
  console.log('ERROR: ' + e.message);
});
	*/
}

callAjax(http, options, saveFile);
/*
setInterval (function(){
}, 2000);
*/
