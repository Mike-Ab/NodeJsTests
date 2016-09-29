var http = require ('http');
var fs = require ('fs');
var postOpts = {
  host: 'apidev.contactspace.com',
  path: '/tmp/b3bf82f2-590d-11e6-8ded-2573a2e556aa.wav',
  method: 'GET',
  headers: {
      'Content-Type': 'audio/x-wav, audio/wav',
  }
}

  var postRes = http.get(postOpts, function(postRes) {
  	  console.log('Status: ' + postRes.statusCode);
	  console.log('Headers: ' + JSON.stringify(postRes.headers));
   // postRes.setEncoding('utf8');
  	  postRes.on('data', function (ResChunk) {
		  console.log("Receiving :" + ResChunk);
	  	var wavBody = [];
	   	wavBody.push(ResChunk);
  		}).on('end', function(){
		    var waveFile = Buffer.concat(wavBody);
    		fs.writeFile('temp/test.wav', waveFile, function(err){
				if (err){
				console.log(err);
				}
			console.log("The file was saved!");
			});
		})
});