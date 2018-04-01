
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { pushNotification } = require('./notipusher');
const _ = require('lodash');
app.use(express.static('public'));
app.use(bodyParser.json())
const subs = [];

app.post('/notify', (req, res) => {
    pushNotification(_.uniq(subs));
    res.json('ok');
})

app.get('/token/:id', (req, res) => {
    console.log('Received token: ' + req.params.id)
    subs.push(req.params.id);
    res.send(req.params.id);
});

const port = process.env.PORT || 8000;
app.listen(port, function() {
  console.log('Node app is running on port', port);
});