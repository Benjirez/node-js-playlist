var express = require('express');
var myController1 = require('./controllers/myController1');
var xsvr = express();

//set up template engine
xsvr.set('view engine', 'ejs');

//static files
xsvr.use( express.static('./static') ); //no specific route specified... thus, all requests routed to ./public



//fire controllers (ie. call functions)
myController1( xsvr ); //passing it the express server




//listen to port
xsvr.listen(3000);
console.log('xsvr listening on 3000');
