/*
 * This is the catch style server
 *
 */


 var fs = require ('fs');
 var express = require ('express');
 var path = require ('path');
 var app = express();
 var uploadpath = path.join(__dirname, 'uploads');

 var chunkNum = function (min, max, total)
  	{
      console.log(min, max, total);
  		if (min == 0) return 1;
  		if (max >= total - 10) return 'last';
  		var totalChunks =  Math.ceil ((max - min)/ total);
  		return Math.ceil (min / (max - min))  == 1 ? 2 : Math.ceil (min / (max - min)) ;
  	}

/*
 * Middlware
 */
 app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Range", "Content-Type")
   res.header("Access-Control-Allow-Methods", "POST, GET, PUT, UPDATE, DELETE, OPTIONS")
   res.header("Allow", "*");
   next();
 });

/*
 * app
 */
 
 app.get ('/', function (req, res){
	 res.send ('welcome home baby');
 })

 app.post('/server', function (req, res){
    console.log(req.headers);
    if (req.headers['content-range']){
      var cNum = chunkNum(
        parseInt(req.headers['min-range']),
        parseInt(req.headers['max-range']),
        parseInt(req.headers['total-size'])
       );
    }else { // no content range header
      var cNum = 'last'
    }
    var index = 0;
    var saveFileName = `${req.headers['file-name']}.ctm_${cNum}`;
    var saveTo = path.join (uploadpath, saveFileName);
    writabel = fs.createWriteStream(saveTo);
    console.log(saveTo);
    req.pipe(writabel);
    req.on('data', function (data){
      console.log(index ++ +'- wrtieTo: ' + saveFileName );
      //  writabel.write(data);
    }).on('end', () => {
      res.send ('Written data to chunk: '+cNum);
    })

 	});

  app.options('/server', function (req, res){
     console.log(req.headers);
     if (req.headers['content-range']){
       var cNum = chunkNum(
         parseInt(req.headers['min-range']),
         parseInt(req.headers['max-range']),
         parseInt(req.headers['total-size'])
        );
     }else { // no content range header
       var cNum = 'last';
     }
     var index = 0;
     var saveFileName = `${req.headers['file-name']}.ctm_${cNum}`;
     var saveTo = path.join (uploadpath, saveFileName);
     writabel = fs.createWriteStream(saveTo);
     console.log(saveTo);
     req.pipe(writabel);
     req.on('data', function (data){
       console.log(index ++ +'- wrtieTo: ' + saveFileName );
       //  writabel.write(data);
     }).on('end', () => {
       res.send ('Written data to chunk: '+cNum);
     })

   });


 app.listen(61000,   function () {
   console.log('Server running on port 61000!');
   console.log('Current gid: ' + process.pid);
 });
