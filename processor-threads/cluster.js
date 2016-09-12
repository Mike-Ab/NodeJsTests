var os = require("os");
console.log (os.cpus().length);
var cluster = require ('cluster');
var numCPUs = os.cpus().length;
console.log(process.pid);
clusters_needed = 2;

if (cluster.isMaster){
	for (var i = 0; i < clusters_needed; i++) {
    cluster.fork().on('online', () => {
	
		});
  }
  
  cluster.on('online', (worker, code, signal)=> {
			console.log(`worker ${worker.process.pid} started`);  
	  })  
  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });

} else {
	
 console.log('not clustering');
 }