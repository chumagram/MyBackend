const express = require('express');

// iniciamos express
const app = express(); 
// si quiero levantar el puerto en el 8080 y en el 8081
const PORT = parseInt(process.argv[2]) || 8080;

app.get('/', (req, res) => {
    res.send('Servidor express ' + process.pid)
})

app.listen(PORT, err => {
    if (!err) console.log('Escuchando');
})

// COMANDOS EN FOREVER EN ORDEN
// iniciar el servidor con forever
//* forever start serverForever.js
// listar los servidores con forever
//* forever list
// kill [pid del proceso]
//* kill 43565
// si se cayo un proceso, forever trata de volverlo a levantar. Si realmetnte quiero frentar el servidor se usa:
//* forever stop 43565
// si quiero frentar todo
//* forever stopall
// si quiero consultar todos los comando de forever: forever --help