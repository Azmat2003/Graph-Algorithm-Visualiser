
const express = require('express');
const app = express();
app.use(express.static(__dirname));
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
})

app.listen('7878', function (req, res) {
    console.log('Succes');
})