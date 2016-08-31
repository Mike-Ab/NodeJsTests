//defining an array
var arrayOfKeys = ['test1', 'test2'];
var myArray = [];

// assigning values to corresponding keys
myArray["Main"] = "Main page";
myArray["Guide"] = "Guide page";
myArray["Articles"] = "Articles page";
myArray["Forum"] = "Forum board";



arrayOfKeys.forEach(function (value, key){
	console.log(key);
	console.log(value);
	});

for (var k in arrayOfKeys) {
    myArray[arrayOfKeys[k]] = arrayOfKeys[k]+k;
}

for (var key in myArray) {
    var value = myArray[key];
  //  console.log(value);
  //  console.log(key);
}

// doesnt work with non numirical akeys of arrays
myArray.forEach(function (key, value){
	console.log(key);
	});
	
myObj = { Main : 'Main P', Guide : 'Guide P' }


for (var key in myObj) {
    var value = myArray[key];
    console.log(value);
    console.log(key);
}


// doesnt work
myObj.forEach(function (key, value){
	console.log(key);
	});
	
