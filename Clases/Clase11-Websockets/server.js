/*
- Los websockets establecen conexiones bidireccionales, con la menor latencia posible. Permite acceder de forma mucho mas rapida a los datos. Permite una comunuciacion en tiempo real entre una ppa web y un servidor.
- Para establecer la comunicacion abierta bidireccional websocket, primero se manda una solicitud y luego se responde con un "apreton de manos" o handhsake.
- El http hace posible la conexion con una pagina web, y luego de enviar una solicitud para que se verifique si existe lo pedido, se establece una conexion unidireccional con altos tiempos de latencia. El http es el clasico preguntas y respuestas. El browser pregunta y el http responde.
- Con los websockets se usa un protocolo especial para un intercambio bidireccional de información. El canal de comunicacion queda abierto, es el que se usa para los notificaciones push. Se esta recibiendo informacion sin necesidad de hacer un apeticion, el servidor se activa y manda la info y simplemente se la recive y te salta la notificación. Los webchats siempre usan websoquets por la sensación de tiempo real que se necesita.
- La solicitud para el websocket es como el clasico http, la concexion es tcp y si el servidor confirma la solicitud, la url ya empieza con WSS:// y ya no el HTTP://
- Los juegos en tiempo real, y redes sociales lo usan ampliamente.
- Antes, si se queria hacer un chat, se tenia que estar actualizando contantemente la página. Lo HTML es para algo más estático... sino hay que estar recargando la página. Dado esto se empezó a desarrollar la tecnologpia Ajax, pero seguia siendo unidireccional, es solo codigo javascript cuando la pagina ya estaba visible, el servidor responde y se iba modificando la pagina dinamicamente con javascript y no se soluciona el tiempo larga de latencia.
- El websocket es como hablar por teléfono. La conexion es en doble vía y no sustituye al HTTP. HTTP y WSS son necesarias! 
- Para usar se usa Socket.io que se tiene 2 partes, una del cliente y una del servidor. Es una biblioteca. Se puede transmitir multiples sockets. Se intala con NPM. 
- Si un cliente se desconecta, se va del meet por ejemplo, mientras el websocket este abierto, va a intentar conectarse contantemente hasta que se recupere el servicio, Esto es del lado del clietne y del servidor. Por lo tanto tiene una deteccion de desconexión (heardbeat). Puede emitir cualquier estructura serializable.
*/

//Llamamos a el módulo Express (npm install express)
const express = require('express');
//Llamamos al módulo de http, que es necesario para el funcionamiento del módulo socket. No es necesario instalarlo, ya viene con node por defecto.
const { Server: HttpServer } = require('http');
// Llamamos al módulo socket.io (npm install socket.io)
const { Server: IOServer } = require('socket.io');

// Creamos el los objetos necesarios para usar las librerias:
const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

// INICIACION DEL SERVIDOR (configurar middleware):
// Indicamos que queremos cargar los archivos estáticos que se encuentran en la carpeta public.
app.use(express.static('./public'));
// Esta ruta o endpoint carga nuestro archivo index.html en la raíz de la misma.
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname })
})
// Ya no se usa app.listen para levantar el servidor:
httpServer.listen(3000, () => {
    console.log("App express escuchando en el puerto " + httpServer.address().port);
}); // Listo... servidor funcionando en puerto 3000 

// "conection" se ejecuta la primera vez que se abre una nueva conexión.
io.on('connection', (socket) => {
    console.log('¡Nuevo cliente conectado!') // aviso por consola (solo una vez)

    // Emitir un mensaje de nuestro servidor al cliente. El primer parámetro es el nombre de nuestro evento y el segundo es la info a transmitir. IMPORTANTE: Solo se le está emitiendo al nuevo usario conectado, no a todos los usuarios... :
    socket.emit('mi mensaje', 'Este es mi mensaje desde el servidor');
    // Luego el cliente nos contesta un evento emit llamado "notification" y lo recibimos:
    socket.on('notification', (info) => {
        console.log(info);
    });
    
    //DESAFÍO GENÉRICO 2:
    // si queremos enviar un mensaje a TODOS los clientes conectado, se hace de la siguiente forma, usando sockets y ya no socket:
    socket.on('mensaje', data => { // me viene una data
        // mensajes.push({socketid: socket.id, mensaje: data});
        // para todos los que estan conectados, emit "mi mensaje" y le enviamos "data"
        io.sockets.emit('mi mensaje', data); // estamos reutilizando el "mi mensaje" anterior
    })
})