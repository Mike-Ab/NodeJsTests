var os   = require('os');
var path = require('path');
var fs = require ('fs');
var Downloader = require('./lib/Downloader');

// Create new downloader
var downloader = new Downloader();

var fileUrl = 'http://ipv4.download.thinkbroadband.com/100MB.zip';

var fileSavePath = path.join(os.tmpdir(), 'mtFileDlTest3.zip');
var fileTempPath = fileSavePath + '.mtd';
// !filePath.match(/\.mtd$/) //
/*
try {
	fs.lstatSync(fileSavePath)
	} catch (e){
	console.log('caught ' +e);
}
*/
/**
 * Better option
 *
 */
 dl = downloader.download(fileUrl, fileSavePath);
require('./examples/_handleEvents')(dl);
require('./examples/_printStats')(dl);

 try {
    fs.accessSync(fileTempPath, fs.F_OK);
   console.log('found teh file and its accissable ... resuming');
   dl.resume();
} catch (e) {
	
     console.log('Error in access / or file not found');
	 dl.start();
	
		 console.log('gonna stop in 8 sec'); 
	 setTimeout (function(){
		 dl.stop();
		 console.log('stopped');
		 }, 8000)
		 
}
 
