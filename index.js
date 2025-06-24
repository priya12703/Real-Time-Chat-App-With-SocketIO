const Message = require('../models/Message');

const users = new Map();

function setupSocket(io) {
  io.on('connection', (socket) => {
    socket.on('joinRoom', ({ username, room }) => {
      socket.join(room);
      users.set(socket.id, { username, room });

      io.to(room).emit('userJoined', { username });
      sendOnlineUsers(io, room);
    });

    socket.on('chatMessage', async ({ room, username, message }) => {
      const newMsg = await Message.create({ room, sender: username, content: message });
      io.to(room).emit('chatMessage', newMsg);
    });

    socket.on('typing', ({ room, username }) => {
      socket.to(room).emit('typing', { username });
    });

    socket.on('stopTyping', ({ room }) => {
      socket.to(room).emit('stopTyping');
    });

    socket.on('disconnect', () => {
      const user = users.get(socket.id);
      if (user) {
        io.to(user.room).emit('userLeft', { username: user.username });
        users.delete(socket.id);
        sendOnlineUsers(io, user.room);
      }
    });
  });
}

function sendOnlineUsers(io, room) {
  const online = [...users.values()].filter(u => u.room === room).map(u => u.username);
  io.to(room).emit('onlineUsers', online);
}

module.exports = { setupSocket };
