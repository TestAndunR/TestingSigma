let AWS = require('aws-sdk');
let SL_AWS = require('slappforge-sdk-aws');
const sqs = new SL_AWS.SQS(AWS);
exports.handler = function (event, context, callback) {
	let email = event.email;
	console.log(event.email);
	sqs.sendMessage({
		MessageBody: email,
		QueueUrl: 'https://sqs.us-east-2.amazonaws.com/318300609668/SQS1',
		DelaySeconds: '0',
		MessageAttributes: {}
	}, function (data) {
		// your logic (logging etc) to handle successful message delivery, should be here
	}, function (error) {
		// your logic (logging etc) to handle failures, should be here
	});

	callback(null, 'Successfully executed');
}