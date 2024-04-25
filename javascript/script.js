document.addEventListener("DOMContentLoaded", function() {
    const chatBox = document.getElementById('chat-box');
    const messageInput = document.getElementById('message-input');
    const sendBtn = document.getElementById('send-btn');

    sendBtn.addEventListener('click', function() {
        const message = messageInput.value.trim();
        if (message !== '') {
            const messageElement = document.createElement('div');
            messageElement.textContent = message;
            chatBox.appendChild(messageElement);
            chatBox.scrollTop = chatBox.scrollHeight;
            messageInput.value = '';
        }
    });

    messageInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            sendBtn.click();
        }
    });
});

// Video call system 

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', socket => {
  console.log('New client connected');

  socket.on('startCall', () => {
    // Handle start call event
    // Create a room for the call and join the client to the room
    // Send signaling messages to establish the call
  });

  socket.on('endCall', () => {
    // Handle end call event
    // Leave the room and send signaling messages to terminate the call
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


