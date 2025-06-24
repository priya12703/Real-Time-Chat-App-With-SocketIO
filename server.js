const express = require('express');
const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const { Server } = require('socket.io');

dotenv.config();

const authRoutes = require('./routes/auth');
const chatRoutes = require('./routes/chat');
const { setupSocket } = require('./socket/index');

const app = express();
const server = http.createServer(app);

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => {
    console.error('❌ MongoDB connection failed:', err.message);
    process.exit(1);
  });

const io = new Server(server, {
  cors: { origin: 'http://localhost:3000', methods: ['GET', 'POST'] }
});
setupSocket(io);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
