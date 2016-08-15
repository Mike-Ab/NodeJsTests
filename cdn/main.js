var express = require('express');
var app = express();

var icons = require('./readfile');



app.get('/:fileNeeded/:iconWidth', function (req, res){
	var fn = req.params.fileNeeded;
	var x = icons.loadI(fn, req.params.iconWidth,  function(data){
		console.log("loadIcon Function");
		res.send(data);
	});
});

app.get('/', function (req, res){	
            var welcome = 'Welcome to the icon directory - <br> Available Icons: <br>'
            +' folder <br> chat <br> network<br><br>Moe is Legend';
            res.send(welcome);
	});

app.listen(61000,   function () {
  console.log('Server running on port 61000!');
  console.log('Current gid: ' + process.pid);
});


