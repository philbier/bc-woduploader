var request = require('request');
var bodyParser = require('body-parser');
const url = 'https://boxchamp.io/';
const email = 'phillip.biermann@outlook.de';
const password = 'password';

request.post(url, {
  form: {
    email: email,
    pass: password
  }
}, function (err, res, body) {
    console.log(body);
});