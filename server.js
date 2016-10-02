var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var watson = require('watson-developer-cloud');
var twilio = require('twilio');

var alchemy_language = watson.alchemy_language({
  api_key: 'API_KEY'
});

var accountSid = 'AC97177c4030bde8b6f9f34c5637e29ec7'; // Your Account SID from www.twilio.com/console
var authToken = 'fabd42d3553729e2bcfee4e03a8061c9';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio.RestClient(accountSid, authToken);
const twilioNumber='14423337300';

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({ 
	extended: true 
}));

app.use(express.static(__dirname + '/public'));

app.get('/',function(req, res){
	res.sendFile(__dirname + '/index.html')
});

app.post('/api/email', function(req, res){
	var name = req.body.username;
	var email = req.body.email;
	var number = req.body.number;

	console.log(JSON.stringify( {
		name: name,
		email: email,
		number: number
	}));

	client.messages.create({
	    body: 'Hi ' + name + '! This is Lynx!',
	    to: number,  // Text this number
	    from: twilioNumber // From a valid Twilio number
	}, function(err, message) {
	    if(err) {
	        console.error(err.message);
		}
	});


});

app.get('/api/getArticles', function(req, res){

});

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'));

console.log("Running at Port " + prt);

