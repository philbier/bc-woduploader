const fetch = require("node-fetch");
var bodyParser = require('body-parser');
const url = 'https://boxchamp.io/';
const email = 'phillip.biermann@outlook.de';
const password = '123';

postForm(url)
.then(data => console.log(data))
.catch(error => console.error(error))

function postForm(url) {
    return fetch(url, {
        method: 'POST', // or 'PUT'
        body: {
            email: email,
            password: password
        }
    })
    .then(response => response.text())
}