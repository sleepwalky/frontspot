var admin = require('firebase-admin');

var serviceAccount = require('./service-account.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://frontspot-37f84.firebaseio.com"
  });

// This registration token comes from the client FCM SDKs.
var registrationToken = 'BEM0zdkSb-QpTRInNaKPXRWB6ustw-QExwBNXDDa3r2lj-u18Nq1l7T_AbykvQ-0v0tPyGCB-O5c0PCfqZtRVwU';

// See documentation on defining a message payload.
var message = {
  data: {
    score: '850',
    time: '2:45'
  },
  token: registrationToken
};

// Send a message to the device corresponding to the provided
// registration token.
admin.messaging().send(message)
  .then((response) => {
    // Response is a message ID string.
    console.log('Successfully sent message:', response);
  })
  .catch((error) => {
    console.log('Error sending message:', error);
  });