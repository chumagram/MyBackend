const { Server: HttpServer } = require('http')
const { Server: SocketServer } = require('socket.io')
const express = require('express');

const cartRouter = require('./routers/cart');
const productRouter = require('./routers/product');
const { saveMessage, getMessages } = require('./models/messages');

const app = express();
const httpServer = new HttpServer(app)
const io = new SocketServer(httpServer)

app.use(express.static('public'))


io.on('connection', async (socket) => {
  console.log(`Nuevo cliente conectado! ${socket.id}`)
  
  const messages = await getMessages()
  socket.emit('messages', messages)

  socket.on('new-message', async (message) => {
    console.log('new-message', message);
    await saveMessage(message)

    const messages = await getMessages()

    // notificará a todos los sockets conectados
    io.sockets.emit('messages', messages)
  })
})

app.use( express.json() );
app.use( express.urlencoded( { extended: true }) );

app.get('/', (req,res) => res.send({ data: Date.now() }))

app.use('/api/productos', productRouter);
app.use('/api/carrito', cartRouter);


httpServer.listen(8081, () => 
  console.log(`Servidor abierto en http://localhost:${8081}/`)
);