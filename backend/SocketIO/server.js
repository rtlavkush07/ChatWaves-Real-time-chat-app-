import {Server} from 'socket.io';
import http from 'http';
import express from 'express';

const app = express();

const server = http.createServer(app);
const io = new Server(server,{
    cors: {
        origin: 'http://localhost:4001',
        methods: ['GET', 'POST']
        
    }
}); 

// function for real time message 
export const getReceiverSocketId = (receiverId)=>{
    return users[receiverId];
}
 
const users ={} 
io.on("connection", (socket) => {
    console.log("New client connected",socket.id);
    const userId = socket.handshake.query.userID;
    console.log("User ID:", userId);
    if(userId){
        users[userId] = socket.id; // Store the user ID and socket ID
        console.log("Users socket id:", users);  

    }

    io.emit("getonline", Object.keys(users)); // Emit the updated users list to all clients

 
    socket.on("disconnect", () => {
        console.log("Client disconnected", socket.id);
        delete users[userId]; // Remove the user from the users object
            io.emit("getonline", Object.keys(users)); // Emit the updated users list to all clients
    });
});

export {app, io, server};