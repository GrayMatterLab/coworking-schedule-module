const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(__dirname + '/../client/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Test API GET request
app.get('/', (req, res) => {
  res.send('Received successful GET test request!')
})

//Test API POST request
app.post('/', (req, res) => {
  res.send('Received successful POST test request!')
})


module.exports = app;