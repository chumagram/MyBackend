/*
- Los websockets establecen conexiones bidireccionales, con la menor latencia posuble. Permite acceder de forma mucho mas rapida a los datos. Permite una comunuciacion en tiempo real entre una ppa web y un servidor.
- Para establecer la comunicacion abierta bidireccional websocket, primero se manda una solicitus y luego se responde con un "apreton de manos" o handhsake.
- El http hace posible la conexion con una pagina web, y luego de enviar una solicitud para que se verifique si existe lo pedido, se establece una conexion unidireccional con altos tiempos de latencia. El http es el clasico preguntas y respuestas. El browser pregunta y el http responde.
- Con los websockets se usa un protocolo especial para un intercambio bidireccional de información. El canal de comunicacion queda abierto, es el que se usa para los notificaciones push. Se esta recibiendo informacion sin necesidad de hacer un apeticion, el servidor se activa y manda la info y simplemente se la recive y te salta la notificación. Los webchats siempre usan websoquets por la sensación de tiempo real que se necesita.
- La solicitus para el websocket es como el clasico http, la concexion es tcp y si el servidor confirma la solicitus, la url ya empieza con WSS:// y ya no el HTTP://
- Los juegos en tiempo real, y redes sociales lo usan ampliamente.
- Antes, si se queria hacer un chat, se tnia que estar actualizando contantemente la página. Lo HTML es para algo más estático... sino hay que estar recargando la página. Dado esto se empezó a desarrollar la tecnologpia Ajax, pero seguia siendo unidireccional, es solo odigo javascript cuando la pagina ya estaba visible, el servidor responde y se iba modificando la pagina dinamicamente con javascript y no se soluciona el tiempo largo de latencia.
- El websocket es como hablar por teléfono. La conexion es en doble vía y no sustituye al HTTP. HTTP y WSS son necesarias! 
- Para usar se usa Socket.io que se tiene 2 partes, una del cliente y una del servidor. Es una biblioteca. Se puede transmitir multiples sockets. Se intala con NPM. 
- Si un cliente se desconecta, se va del meet por ejemplo, mientras el websocket este abiert, va a intentar conectarse contantemente hasta que se recupere el servicio, Esto es del lado del clietne y del servidor. Por lo tanto tiene una deteccion de desconexión (heradbeat). Puede emitir cualquier estructura serializable.
*/

const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname })
})

httpServer.listen(3000, () => console.log('SERVER ON'))

io.on('connection', socket => {
    console.log('Nuevo usuario conectado')
    socket.emit('mi mensaje', 'Este es mi mensaje desde el servidor')

    socket.on('notification', info => {
        console.log(info);
    });
    socket.on('mensaje',data => {
        io.sockets.emit('mi mensaje', data);
    })
})