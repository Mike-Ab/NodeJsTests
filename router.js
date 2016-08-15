var express = require('express');
var app = express();

app.get('/', function (req, res) {
	console.log(req.headers.host);
	console.log ('root command');
	res.json(req.headers);
});


app.get('/about', function (req, res, next) {
  res.send('about');
  next();
});

app.get('/about', function (req, res) {
  console.log(' Us');
});

app.get('/users/:userId/books/:bookId', function(req, res) {
  res.send(req.params);
});

/*
Route path: /users/:userId/books/:bookId
Request URL: http://localhost:3000/users/34/books/8989
req.params: { "userId": "34", "bookId": "8989" }
*/


var cb0 = function (req, res, next) {
  console.log('CB0');
  next();
}

var cb1 = function (req, res, next) {
  console.log('CB1');
  next();
}

var cb2 = function (req, res) {
  res.send('Hello from C!');
}

app.get('/example/c', [cb0, cb1, cb2]);



app.listen(1011, function () {
  console.log('Example app listening on port 1011!');
  console.log('Current gid: ' + process.pid);
});