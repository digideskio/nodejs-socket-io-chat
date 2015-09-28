// Author : Chathu Vishwajith
// Licence : MIT License
// http://opensource.org/licenses/MIT

var express = require('express');
var app = express();
var port = process.env.PORT || 5000;

app.use(express.static('public'));




app.listen(port,function(){
      console.log('%s: Node server started on %d...', Date(Date.now()),port);
});