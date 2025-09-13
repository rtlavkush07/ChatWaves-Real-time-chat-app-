// SocketIO/server.js

import { Server } from 'socket.io';
import http from 'http';
import express from 'express';

const app = express();
const server = http.createServer(app);

// Allow frontend at port 5173
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    credentials: true
  }
});

const users = {}; // Maps userId to socket.id

// Utility function for getting socket ID by user ID
export const getReceiverSocketId = (receiverId) => {
  return users[receiverId];
};
 
io.on('connection', (socket) => {
  console.log('New client connected:', socket.id);

  const userId = socket.handshake.query.userID;
  console.log('User ID:', userId);

  if (userId) {
    users[userId] = socket.id;
    console.log('Current online users:', users);
  }

  // Notify all clients about online users
  io.emit('getonline', Object.keys(users));

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
    delete users[userId];
    io.emit('getonline', Object.keys(users));
  });
});

export { app, server, io };
