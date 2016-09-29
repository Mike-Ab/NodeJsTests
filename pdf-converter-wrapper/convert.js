'use strict';

	var exec = require('child_process').exec;
	var child = exec('wkhtmltopdf https://www.google.com E:\\fromNode.pdf' , {  cwd : 'c:\\Program Files\\wkhtmltopdf\\bin\\' , stdio: [null, 'inherit', 'inherit', 'ipc']},(error, stdout, stderr) => {
		  if (error) {
		    console.error(`exec error: ${error}`);
		    return;
		  }
	  console.log(`stdout: ${stdout}`);
	  console.log(`stderr: ${stderr}`);
	});
	
	
		console.log('spawned');
	  child.stdout.on('data', function(data) {
	  console.log('stdout: ' + data);
  });
  child.stderr.on('data', function(data) {
	  console.log('stdout: ' + data);
  });
  child.on('close', function(code) {
	  console.log('closing code: ' + code);
  });