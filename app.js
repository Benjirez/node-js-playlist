var express = require('express');
var controller1 = require('./controllers/controller1');
var xsvr = express();


//set up template engine
xsvr.set('view engine', 'ejs');

//fire controllers/route handlers - these could be defined in app.js but modularizing makes cleaner.
controller1( xsvr ); //passing it the express server



//static files
xsvr.use( express.static('./static') ); //no specific route specified... thus, all requests routed to ./static






//listen to port
xsvr.listen(3000);
console.log('xsvr listening on 3000');
