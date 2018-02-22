var Promise = require("bluebird");
const client = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

var sendMessage = function(req, res) {
  console.log('sendMessage, ',req.body.number)
  return new Promise(function(resolve, reject) {
    console.log('sendMessage, ',req.body.number)
    client.messages.create({
      from: '12028518182',
      to: req.body.number,
      body: "message working"
    }).then((messsage) => console.log(message.sid));
  });
}

// sendMessage('13017413473');

module.exports.sendMessage = sendMessage;