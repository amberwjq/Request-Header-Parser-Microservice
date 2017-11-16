// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/api/whoami/", function (request, response) {
 
 var ip =request.headers['x-forwarded-for'].split(",")[0];
 var language= request.headers['accept-language'].split(";")[0];
 var browser= request.headers['user-agent'].split('(')[1];
  var finalBroser=browser.split(')')[0]
   console.log(finalBroser);
  response.json({"ip":ip,"language":language,"software":finalBroser});
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
