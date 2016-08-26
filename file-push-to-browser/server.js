/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var io  = require('socket.io').listen(5001),
    dl  = require('delivery');

io.sockets.on('connection', function(socket){
  var delivery = dl.listen(socket);
  delivery.on('delivery.connect',function(delivery){

    delivery.send({
      name: 'sample-image.jpg',
      path : './sample-image.jpg'
    });

    delivery.on('send.success',function(file){
      console.log('File successfully sent to client!');
    });

  });
});