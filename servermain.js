var express = require('express');
var server = express();
var bodyParser  = require('body-parser');
server.use(bodyParser());
var app = express();
app.use(express.static('public'));
var server = app.listen(80, function () {
var host = server.address().address;
var port = server.address().port;

console.log('Example app listening at http://%s:%s', host, port);
});
var home = require('./public/home/server.js')
app.use('/',home)

var service = require('./public/service/server.js')
app.use('/',service)

var account = require('./public/account/server.js');
  app.use('/', account);

 var sell = require('./public/sell/serversell.js');
    app.use('/', sell);

 var hr = require('./public/hr/serverhr.js');
 app.use('/', hr);
//var service = require('./public/service/server.js')
// app.use('/',service)
