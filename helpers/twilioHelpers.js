var Promise = require("bluebird");
const client = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

var sendMessage = function(phoneNumber, ingredients) {
  return new Promise(function(resolve, reject) {
    client.messages.create({
      from: '12028518182',
      to: phoneNumber,
      body: ingredients
    }).then((messsage) => console.log(message.sid));
  });
};

// sendMessage('13017413473');

module.exports.sendMessage = sendMessage;