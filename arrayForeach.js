//defining an array
var arrayOfKeys = ['test1', 'test2'];
var myArray = [];

// assigning values to corresponding keys
myArray["Main"] = "Main page";
myArray["Guide"] = "Guide page";
myArray["Articles"] = "Articles page";
myArray["Forum"] = "Forum board";

for (var k in arrayOfKeys) {
    myArray[arrayOfKeys[k]] = arrayOfKeys[k]+k;
}

for (var key in myArray) {
    var value = myArray[key];
    console.log(value);
    console.log(key);
}