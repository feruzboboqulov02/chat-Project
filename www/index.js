const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

const users = [];
const connections = [];

io.sockets.on('connection', function (socket) {
    console.log("Successfully Connected to Socket.IO");
    connections.push(socket);
    console.log('Connected: %s sockets connected', connections.length);

    // Disconnect
    socket.on('disconnect', function (data) {
        connections.splice(connections.indexOf(socket), 1);
        console.log('Disconnected: %s sockets connected', connections.length);
    });
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
