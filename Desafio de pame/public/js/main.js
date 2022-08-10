console.log({io});
const socket = io.connect();

const renderMessages = (messages) => {
  const htmls = messages.map((messsage) => {
    return(`
      <div>
        <strong>${messsage.name}</strong>:
        <em>${messsage.messages}</em>
      </div>
    `);
  });

  const html = htmls.join(" ");

  document.getElementById('messages').innerHTML = html;
}

const addMessage = (event) => {
  // prevenimos el recargo de pagina
  event.preventDefault();

  // armamos el mensaje con los valores
  const mensaje = {
    name: document.getElementById('username').value,
    messages: document.getElementById('texto').value
  };

  // enviamos el mensaje
  socket.emit('new-message', mensaje);

  // limpiamos el form
  document.getElementById('username').value = '';
  document.getElementById('texto').value = '';
};

const form = document.getElementById('form');
form.addEventListener('submit', addMessage);

socket.on('messages', data => {
  console.log(data);
  renderMessages(data);
});