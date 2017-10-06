// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

app.all('*', (req, res, next) => {
  // protocol check, if http, redirect to https
  if(req.get('X-Forwarded-Proto').indexOf('https') == 0) {
    return next();
  } else {
    res.redirect('https://' + req.hostname + req.url);
  }
});

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
  
// listen for requests
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});