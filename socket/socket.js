function socket(io) {

    io.on('connection', function(socket) {
        console.log('a user has connected');
    })
}

module.exports = socket;