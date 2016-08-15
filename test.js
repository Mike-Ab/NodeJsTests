'use strict';
class testClass {
	constructor(){
		
	}
	
	foo (varName){
		console.log ('this is foo function ' + varName );
	}
	
	bar (varName){
		console.log (`This is string literal funciton ES6 the reads ${varName} 
		and counts for new lines`);
	}
}

var myTest = new testClass();
myTest.foo('foo');
myTest.bar('no waaaaay');
