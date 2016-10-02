var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var watson = require('watson-developer-cloud');

var alchemy_language = watson.alchemy_language({
  api_key: 'API_KEY'
});

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded(
{ extended: true }
));

app.use(express.static(__dirname + '/public'));

app.get('/',function(req, res){
	res.sendFile(__dirname + '/index.html')
});

app.post('/api/email', function(req, res){
	console.log(name);
});

app.get('/api/getArticles', function(req, res){

});

var prt = 8000;
app.listen(prt);

console.log("Running at Port " + prt);

