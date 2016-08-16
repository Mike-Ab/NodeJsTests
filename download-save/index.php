<html>
<head>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
</head>
<body>
<pre>
  <div id="progress">
  </div>
</pre>
<script>
var limit = 20;
var current = 0;
  	if (current < limit){
    setInterval(function(){
	
      $.get('ajax.php', function(response){
        if (response != "no more records"){
          current ++;
          $('<div>'+response+'<br></div>').appendTo($('#progress'));
        }
      })
    }, 1500)
  }
</script>
</body>
</html>
