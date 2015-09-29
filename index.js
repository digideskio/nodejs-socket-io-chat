// Author : Chathu Vishwajith
// Licence : MIT License
// http://opensource.org/licenses/MIT

var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
var http = require('http').Server(app);

app.use(express.static('public'));

var io = require('socket.io')(http);

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(port,function(){
      console.log('%s: Node server started on %d...', Date(Date.now()),port);
});