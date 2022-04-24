// Programa de javascript en el cliente:

const socket = io.connect();
// Funcion que recibe como parametro "data"
function render(data) {
    // el map crea un nuevo array basadado en el array que se le pasa, sin alterar al mismo, a diferencia del foreach:
    const html = data.map((element) => {
        //strong pone en negrita y el em pone en cursiva:
        return(`<div>
            <strong>${element.author}</strong>:
            <em>${element.text}</em>
        </div>`)
    }).join(" "); //join une los elementos de un array en un string
    // Crea una nueva linea en el html. Imprime todo el div de nuevo (esto seriia un poco inviable para mucha informacion)
    document.getElementById('messages').innerHTML = html;
}

// Funcion que trae el mensaje que esta en los imputs del html. Esta funcion es llamada en el HTML, no aquí. Se va a ejecutar cada vez que se haga click en el boton de enviar (submit) gracias a la propiedad onsubmit (VER EL HTML):
function addMessage(e){
    console.log("NOOOOO"); 
    const mensaje = {
        author: document.getElementById('username').value,
        text: document.getElementById('texto').value
    };
    // envia el nuevo mensaje al servidor:
    socket.emit('new-message', mensaje);
    return false;
}

// Mostrar los mensajes
socket.on('messages', data => {
    render(data); // llama a la funcion render definida mas arriba
})