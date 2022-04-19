const socket = io();

let button = document.getElementById('btn-enviar');
let inputmensaje = document.getElementById('mensaje');
let parrado = document.getElementById('parrafo')

button.addEventListener('click', function(params){
    let value = inputMensaje.value();
    socket.emit('mensaje', value);
})

socket.on('mi mensaje', data => {
   parrafo.innerHTML = data;
    alert(data)
    socket.emit('notificacion', 'Mensaje recibido exitosamente')
})