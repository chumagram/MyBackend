// este es el programa de ajavascript del lado del cliente...
// a continuacion inicializamos una constante para usar los sockets:
const socket = io();

// Obtenemos lo colocado en el input del html:
let button = document.getElementById('btn-enviar');
// Agarro el valor luego de que me hacen click en el boton, y agarro el "mensaje":
let inputMensaje = document.getElementById('mensaje');
//declaro el parrafo que se encuentra en el html para no estar escribiendo el get element by id a cada rato, esto es simplemente apuntar al parrafo, no estamos haciendo nada con el aun:
let parrafo = document.getElementById('parrafo');

// Le ponemos un evento al click que se va a dar en el boton de enviar
button.addEventListener('click', function (params) {
    // vamos a agarrar el valor del mensaje que ahora es igual al inputMensaje
    let value = inputMensaje.value;
    // Emitimos el el valor del "mensaje"
    socket.emit('mensaje', value);
})

// Recibe el evento emit llamado "mi mensaje" y emite una alerta con data, siendo data el segundo parámetro pasado en el io.on (es decir que se va a emitir solo una vez).
socket.on('mi mensaje', (data) => {
    // le pegamos data al parrafo, ahora si lo estamos modificando en el html
    parrafo.innerHTML += data +'</br>'; 
    console.log(data);
    // Luego le enviamos un mensaje al servidor de que el mensaje fue recibido exitosamente:
    socket.emit('notification', 'Mensaje recibido desde el cliente');
})