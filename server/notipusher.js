const father = require('./father');
// // This registration token comes from the client FCM SDKs.
var registrationToken = 'ejybB9T8JrI:APA91bEdD5U8H1TOhdjb8WNApRlGmMlqg_ub17cYx1_oOvbklHmvLnt5grOoWAEu_Kfrr73ybVEgcXSUWm8p7K-vS6T1vLYCyl-2RNjz71P2IuJZVZNLLIrpisLJKhNfWYSUpyfPo_G5';

// // See documentation on defining a message payload.
var message = {
  data: {
    score: '850',
    time: '2:45'
  },
  token: registrationToken
};

// var payload = {
//     notification: {
//       title: "This is a Notification",
//       body: "This is the body of the notification message."
//     }
//   };
  
//    var options = {
//     priority: "high",
//     timeToLive: 60 * 60 *24
//   };

// admin.messaging().sendToDevice(registrationToken, payload, options)
// .then(function(response) {
//     console.log("Successfully sent message:", response);
//   })
//   .catch(function(error) {
//     console.log("Error sending message:", error);
//   });


// Send a message to the device corresponding to the provided
// registration token.
function pushNotification() {
  father.messaging().send(message)
  .then((response) => {
    // Response is a message ID string.
    console.log('Successfully sent message:', response);
  })
  .catch((error) => {
    console.log('Error sending message:', error);
  });
}

module.exports = {
  pushNotification
}


