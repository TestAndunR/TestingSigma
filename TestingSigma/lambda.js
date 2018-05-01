let AWS = require('aws-sdk');
exports.handler = function(event, context, callback) {
	console.log(event.email);
	
	callback(null,'Successfully executed');
}