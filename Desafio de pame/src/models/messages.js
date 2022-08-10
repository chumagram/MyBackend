// data base, table messages
const messages = [
  { author: "Juan", text: "¡Hola! ¿Que tal?" },
  { author: "Pedro", text: "¡Muy bien! ¿Y vos?" },
  { author: "Ana", text: "¡Genial!" }
];

const Contenedor = require('../../Contenedor');
const { sqliteOptions } = require('./databases');
//objeto contenedor
const messageContenedor = new Contenedor(sqliteOptions,'messages');

const getMessages = async () => {
  return await messageContenedor.getAll();
};

const saveMessage = async (message) => {
  const idMessage = await messageContenedor.save(message);
  return idMessage;
}

module.exports = {
  getMessages,
  saveMessage
};