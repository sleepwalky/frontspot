var admin = require('firebase-admin');

var serviceAccount = require('./service-account.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://frontspot-37f84.firebaseio.com"
  });

module.exports = admin;