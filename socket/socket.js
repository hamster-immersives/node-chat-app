function socket(io) {

    io.on('connection', function(socket) {
        console.log('a user has connected', socket.id);

        socket.emit('connected', 'you are connected')

        socket.on('new message', function(msg) {
            const newDate = new Date();
            var data = {
                message: msg.message,
                username: msg.username,
                date: newDate.toLocaleTimeString()
            }
            socket.emit('chat message', data);
        })
        socket.on('disconnect', () => {
            console.log(`user ${socket.id} has disconnected`);
        })
    });
}

module.exports = socket;