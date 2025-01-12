// server.js
// where your node app starts

// init project
var express = require('express');
const moment = require('moment')
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/:timeStamp", function (req, res) {
  var time = req.params.timeStamp;
  var dateTimeRegex = /[0-9]{4}-[0-9]{2}-[0-9]{2}/g
  if (dateTimeRegex.test(time)) {
    time = new Date(time);

  } else {
    time = moment(parseInt(time));
  };
  res.json({"unix": moment(time).valueOf().toString(), "utc" : time});
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);

});
/* var time =  "1451001600000"; */


