<?php

echo '1';
exit();
?>
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
 $.get('http://127.0.0.1:61000/', function(response){        	
			console.log(response);     	
          $('<div>'+response+'<br></div>').appendTo($('#progress'));
        
      })
	  
</script>
</body>
</html>
