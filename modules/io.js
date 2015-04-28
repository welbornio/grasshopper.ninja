var sio = require('socket.io'),
    icons = require('./icons');

module.exports.listen = function(app) {
    var io = sio.listen(app);

    // initiates connection with user
    io.on('connection', function(socket) {
        console.log('connection opened');

        socket.on('search', function(event) {
            socket.emit('search', icons.search(event));
        });

        socket.on('update', function(event) {
            socket.emit('update', icons.update(event));
        });

        socket.on('get', function(event) {
            socket.emit('update', icons.get(event));
        });

        // user disconnects
        socket.on('disconnect', function() {
            console.log('connection closed');
        });
    });
};