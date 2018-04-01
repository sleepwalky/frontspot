const father = require('./father');
// // This registration token comes from the client FCM SDKs.
// var registrationToken = 'ejybB9T8JrI:APA91bEdD5U8H1TOhdjb8WNApRlGmMlqg_ub17cYx1_oOvbklHmvLnt5grOoWAEu_Kfrr73ybVEgcXSUWm8p7K-vS6T1vLYCyl-2RNjz71P2IuJZVZNLLIrpisLJKhNfWYSUpyfPo_G5';
// var registrationToken = 'e2BEQHDtOrM:APA91bHABhaPLmeTAkGhulthOn6MVKWFnJr9ZcqDmo80wijCynDxXoCSX7t2LaMNm_fUayom89uAWU3U6PcCfnD4V76reFgvzhzdGDtbtPhQA4gJFXNYc_5YhQ_oqg-HZeRGEUdpXbUK';
// var registrationToken = 'c2FmzgJ5WXM:APA91bG04jUcmH9Eus7Uz25Lgzc4Zzct3jd7383rZrFMgfIZ720eZtVuCdbgxjacnKKWgoJg-1hkTdVD8Eblc3On2HHRXqaRyiTTexxYdNxc7wrsIxAuLrdXKZESz8-v6sDfh-oRl5mQ';
var registrationToken = 'cL3Ys7YotwA:APA91bEV4oYwhFKPDNBC81No9quNLHDkiUD3sCMWq32aOZsd0NPp-n0gxwzNpqD-Ou4UhMKnry4SrXkSrYHAuu9UoDLn1STa1NpNsVvF9mWuUElRKZpjYudteu5429QgU1vGnynvMoQV';
// // See documentation on defining a message payload.
// var message = {
//   data: {
//     score: 'Просыпайся =)',
//     time: '2:45'
//   },
//   token: registrationToken
// };

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
function pushNotification(subs) {
  const messages = subs.map(item => {
    return {
      data: {
        score: 'Привет!',
        time: '2:45'
      },
      token: item
    };
  });
  messages.forEach(item => {
    father.messaging().send(item)
    .then((response) => {
      // Response is a message ID string.
      console.log('Successfully sent message:', response);
    })
    .catch((error) => {
      console.log('Error sending message:', error);
    });
  });

}

module.exports = {
  pushNotification
}


