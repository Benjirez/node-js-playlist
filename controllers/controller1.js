// controller1 is: route handling and server side logic for view1
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extend: false}); //this is needed to handle/parse the data from the (body of the) POST request.

//test data
var data = [{item: 'get blue milk'}, {item: "re-attach 3PO's arm"}, {item: 'pickup power converters at toshi station'}];

module.exports = function(xsvr){


	xsvr.get('/', function(req, res){
		res.render('view1', {todos: data}); //name of view to render (render looks for views in views directory) 
	});

	xsvr.post('/', urlencodedParser, function(req, res){
		data.push(req.body);
		res.json(data);
	});

	xsvr.delete('/todo/item', function(req, res){

	});

};
