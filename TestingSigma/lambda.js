let AWS = require('aws-sdk');
const sns = new AWS.SNS();
exports.handler = function (event, context, callback) {

	let reciever = event['reciever'];
	let sender = event['sender'];
	let message = event['message']

	console.log("Succesfully message ", message, " for", reciever, ' from ', sender);

	sns.publish({
		Message: message,
		MessageAttributes: {
			'AWS.SNS.SMS.SMSType': {
				DataType: 'String',
				StringValue: 'Promotional'
			},
			'AWS.SNS.SMS.SenderID': {
				DataType: 'String',
				StringValue: sender
			},
		},
		PhoneNumber: reciever
	}).promise()
		.then(data => {
			// your code goes here
			console.log("Sending success to ",reciever);
			callback(null,data);
		})
		.catch(err => {
			// error handling goes here
			console.log("sending failed",err);
			callback(err)
		});


	callback(null, message);
}