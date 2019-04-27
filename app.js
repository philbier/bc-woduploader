const fetch = require("node-fetch");

const url = 'https://boxchamp.io/';
const username = 'phillip.biermann@outlook.de';
const password = 'xsGRSw';

//Start BoxChamp Main Page
fetch(url, {
    method:'GET',
    headers: {
        "Content-Type": "text/html"
    }
})
.then(response => console.log(response))
.catch(error => console.log(error));