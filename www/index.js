const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);


app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

