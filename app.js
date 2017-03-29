// Init express app
var express = require('express');
var app = express();


// Handle main page request
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});


// Make assets publically available
app.use(express.static('public'));


// Start server
var server = app.listen(process.env.PORT || 3000, function() {
  console.log("Server is now listening at http://%s:%s", server.address().address, server.address().port);
})
