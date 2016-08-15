var express    = require("express");
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'gq_qual_platform'
});
var app = express();

connection.connect(function(err){
if(!err) {
    console.log("Database is connected ...");    
} else {
    console.log("Error connecting database ...");    
}
});

app.get("/",function(req,res){
connection.query("INSERT INTO courses (c_code) VALUES ('testCode')", function(err, rows, fields) {
connection.end();
  if (!err) {
    // console.log('The solution is: ', rows);
            for (var i = 0; i < rows.length; i++) {
                if (i == 0) {
                    console.log(rows[i]);  
                }
            }        
  }
  else
    console.log('Error while performing Query. '+ err);
  });
});

app.listen(1011);