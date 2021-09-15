const express = require('express');
const io = require('socket.io');
const cors = require('cors');
const { Server } = require('http');

const app = express();
const server = Server(app);
const socket = io(server);

socket.on('connection', () => {
  console.log('CONNECTED SERVER!');
});

app.use(cors());

app.get('/', (req, res) => {
  return res.json({hello: 'world'});
});

// Evento que eu queira emitir.
app.get('/message', (req, res) => {
  const messageId = String(Math.random());
  
  socket.emit('message', {
    id: messageId,
    text: `id: ${messageId}`
  })
  return res.json();
});

server.listen(3333, () => {
  console.log('launch!')
});