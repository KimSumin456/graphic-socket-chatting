const SocketIO = require('socket.io');

module.exports = (app, server) => {
    const io = SocketIO(server, { path: '/socket.io' });
    app.set('io', io);
    const chat = io.of('/chat');
    const torch = io.of('/torch');

    chat.on('connection', (socket) => {
        console.log('chat 네임스페이스 접속');

        socket.on('chat', (data) => {
            socket.broadcast.emit('chat', data);
        })

        socket.on('disconnect', () => {
            console.log('chat 네임스페이스 접속 해제');
        })
    })
}