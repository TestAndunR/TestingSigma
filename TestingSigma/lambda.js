let AWS = require('aws-sdk');
exports.handler = function(event, context, callback) {

	let reciever = event['reciever'];
	let sender = event['sender'];
	let message = event['message']

	console.log("Succesfully message ", message," for",reciever, ' from ',sender);
	callback(null,'Successfully executed');
}