const express = require('express');
const { Server: HttpServer } = require('http');
const { Server:IOServer } = require('socket.io');

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

app.use(express.static('./public'));

httpServer.listen(8080, () => {
    console.log("Server escuchando en el puerto " + httpServer.address().port);
});

// Objeto del chat
const messages = [
    { author: "Juan", text: 'Hola que tal?'},
    { author: "Pedro", text: 'Muy y vos?'},
    { author: "Ana", text: 'Genial'}
];

// se crea la conexion con el nuevo cliente
io.on('connection', (socket) => {
    // se avisa por sonsola que se conecto un nuevo cliente:
    console.log('Nuevo cliente conectado');
    // se envia el array de objetos messages hacia el cliente:
    socket.emit('messages', messages);
    // recibe desde el cliente un nuevo objeto que contiene el nombre del cliente y el mensaje y lo agrega al array messages:
    socket.on('new-message', data => {
        messages.push(data);
        // envia todo el aray de nuevo hacia el cliente
        io.sockets.emit('messages', messages);
    })
})