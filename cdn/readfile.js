var fs = require("fs");

var loadIcon = function(file, iWidth, result){
	console.log('started reading file');
	fs.readFile(file+'.txt', function (err, data) {
		console.log('call back file read');
	    if (err) {
			console.log(err);
			result (err);
		}else {
			//data += ' '+' '+ file;	
			console.log('No Error returning data');
			result  (data.toString().replace("__varWidth__", iWidth+'px'));
		}
	})
}

var staticIcon = 'Static Icon';
exports.loadI = loadIcon;
exports.static = staticIcon; 

/*
exports = {
  loadIconA: 'test',
       
  loadIconB: function() {

	
	 // async function
	fs.readFile('content.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
	return (data.toString());
});
	
}
}

exports = exports


	/*
	var fileCon = fs.readFileSync('content.txt').toString();
	return (fileCon);
	*/
	
	
	
	
	/*





var async = require('async');

var calls = [];

['aaa','bbb','ccc'].forEach(function(name){
    calls.push(function(callback) {
        conn.collection(name).drop(function(err) {
            if (err)
                return callback(err);
            console.log('dropped');
            callback(null, name);
        });
    }
)});

async.parallel(calls, function(err, result) {
    //this code will run after all calls finished the job or
     //  when any of the calls passes an error
	   
    if (err)
        return console.log(err);
    console.log(result);
});
*/