
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { pushNotification } = require('./notipusher');
app.use(express.static('public'));
app.use(bodyParser.json())

app.post('/notify', (req, res) => {
    pushNotification();
    res.json('ok');
})

app.get('/token/:id', (req, res) => {
    res.send(req.params.id);
});

const port = process.env.PORT || 8000;
app.listen(port, function() {
  console.log('Node app is running on port', port);
});